"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { PageContent } from "@/src/components/layout/page-content";
import { PageHeader } from "@/src/components/layout/page-header";
import { getListItems } from "@/src/lib/api-utils";
import { mapApiError } from "@/src/lib/error-message";
import { ShipmentDeleteDialog } from "@/src/features/shipments/components/shipment-delete-dialog";
import { ShipmentEmptyState } from "@/src/features/shipments/components/shipment-empty-state";
import { ShipmentErrorState } from "@/src/features/shipments/components/shipment-error-state";
import { ShipmentFormDrawer } from "@/src/features/shipments/components/shipment-form-drawer";
import { ShipmentListToolbar } from "@/src/features/shipments/components/shipment-list-toolbar";
import { ShipmentLoadingGrid } from "@/src/features/shipments/components/shipment-loading-grid";
import { ShipmentTable } from "@/src/features/shipments/components/shipment-table";
import { useCreateShipment } from "@/src/features/shipments/hooks/use-create-shipment";
import { useDeleteShipment } from "@/src/features/shipments/hooks/use-delete-shipment";
import { useShipments } from "@/src/features/shipments/hooks/use-shipments";
import { useUpdateShipment } from "@/src/features/shipments/hooks/use-update-shipment";
import type { Shipment } from "@/src/types/shipment";

export default function ShipmentsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [drawerMode, setDrawerMode] = useState<"create" | "edit">("create");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [activeShipment, setActiveShipment] = useState<Shipment | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const params = useMemo(() => ({ search: search || undefined, status: status === "all" ? undefined : status }), [search, status]);
  const shipmentsQuery = useShipments(params);
  const createShipment = useCreateShipment();
  const updateShipment = useUpdateShipment();
  const deleteShipment = useDeleteShipment();
  const shipments = shipmentsQuery.data ? getListItems(shipmentsQuery.data) : [];

  const openCreate = () => { setDrawerMode("create"); setActiveShipment(null); setDrawerOpen(true); };
  const openEdit = (shipment: Shipment) => { setDrawerMode("edit"); setActiveShipment(shipment); setDrawerOpen(true); };

  const handleSubmit = async (values: Record<string, unknown>) => {
    setActionError(null);
    try {
      if (drawerMode === "create") await createShipment.mutateAsync(values as never);
      else if (activeShipment) await updateShipment.mutateAsync({ id: activeShipment.id, payload: values as never });
      setDrawerOpen(false);
    } catch (error) {
      setActionError(mapApiError(error));
    }
  };

  const handleCancel = async () => {
    if (!activeShipment) return;
    setActionError(null);
    try {
      await deleteShipment.mutateAsync(activeShipment.id);
      setDeleteOpen(false);
    } catch (error) {
      setActionError(mapApiError(error));
    }
  };

  return (
    <PageContent>
      <PageHeader title="Shipments" compact actions={null} />
      <ShipmentListToolbar search={search} status={status} onSearchChange={setSearch} onStatusChange={setStatus} onCreate={openCreate} onRefresh={() => shipmentsQuery.refetch()} />
      {actionError ? <ShipmentErrorState message={actionError} onRetry={() => setActionError(null)} /> : null}
      {shipmentsQuery.isLoading ? <ShipmentLoadingGrid /> : null}
      {shipmentsQuery.isError ? <ShipmentErrorState message={mapApiError(shipmentsQuery.error)} onRetry={() => shipmentsQuery.refetch()} /> : null}
      {!shipmentsQuery.isLoading && !shipmentsQuery.isError && shipments.length === 0 ? <ShipmentEmptyState onCreate={openCreate} /> : null}
      {!shipmentsQuery.isLoading && !shipmentsQuery.isError && shipments.length > 0 ? <ShipmentTable data={shipments} onView={(s) => router.push(`/shipments/${s.id}`)} onEdit={openEdit} onCancel={(s) => { setActiveShipment(s); setDeleteOpen(true); }} /> : null}

      <ShipmentFormDrawer open={drawerOpen} onOpenChange={setDrawerOpen} mode={drawerMode} loading={createShipment.isPending || updateShipment.isPending} onSubmit={handleSubmit} />
      <ShipmentDeleteDialog open={deleteOpen} onOpenChange={setDeleteOpen} loading={deleteShipment.isPending} onConfirm={handleCancel} />
    </PageContent>
  );
}
