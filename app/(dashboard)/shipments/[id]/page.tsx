"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { PageContent } from "@/src/components/layout/page-content";
import { PageHeader } from "@/src/components/layout/page-header";
import { mapApiError } from "@/src/lib/error-message";
import { ShipmentDetailCard } from "@/src/features/shipments/components/shipment-detail-card";
import { ShipmentErrorState } from "@/src/features/shipments/components/shipment-error-state";
import { ShipmentLoadingGrid } from "@/src/features/shipments/components/shipment-loading-grid";
import { useDeleteShipment } from "@/src/features/shipments/hooks/use-delete-shipment";
import { useShipment } from "@/src/features/shipments/hooks/use-shipment";
import { useUpdateShipmentStatus } from "@/src/features/shipments/hooks/use-update-shipment-status";

export default function ShipmentDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const shipmentQuery = useShipment(params.id, Boolean(params.id));
  const deleteShipment = useDeleteShipment();
  const updateStatus = useUpdateShipmentStatus();
  const [actionError, setActionError] = useState<string | null>(null);

  const shipment = shipmentQuery.data;
  const statusActions = ["in_transit", "arrived", "delivered"];

  return (
    <PageContent>
      <PageHeader
        title="Shipment details"
        compact
        actions={<div className="flex gap-2"><Link href="/shipments"><Button variant="outline">Back</Button></Link></div>}
      />

      {shipmentQuery.isLoading ? <ShipmentLoadingGrid /> : null}
      {shipmentQuery.isError ? <ShipmentErrorState message={mapApiError(shipmentQuery.error)} onRetry={() => shipmentQuery.refetch()} /> : null}
      {shipment ? <ShipmentDetailCard shipment={shipment} /> : null}

      {actionError ? <ShipmentErrorState message={actionError} onRetry={() => setActionError(null)} /> : null}
      {shipment ? <div className="rounded-xl border bg-card p-4">
        <h3 className="mb-3 text-sm font-semibold">Shipment actions</h3>
        <div className="flex flex-wrap gap-2">
          {statusActions.map((status) => <Button key={status} variant="outline" onClick={async () => { try { setActionError(null); await updateStatus.mutateAsync({ id: shipment.id, status }); } catch (error) { setActionError(mapApiError(error)); } }}>Mark {status.replaceAll("_", " ")}</Button>)}
          <Button variant="destructive" onClick={async () => { try { setActionError(null); await deleteShipment.mutateAsync(shipment.id); router.push("/shipments"); } catch (error) { setActionError(mapApiError(error)); } }}>Cancel shipment</Button>
        </div>
      </div> : null}
    </PageContent>
  );
}
