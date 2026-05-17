import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type ShipmentActionsMenuProps = {
  onView: () => void;
  onEdit: () => void;
  onCancel: () => void;
};

export function ShipmentActionsMenu({ onView, onEdit, onCancel }: ShipmentActionsMenuProps) {
  return (
    <div onClick={(event) => event.stopPropagation()}>
      <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Shipment actions"><MoreHorizontal /></Button>} />
      <DropdownMenuContent align="end" sideOffset={8}>
        <DropdownMenuItem onClick={onView}>View details</DropdownMenuItem>
        <DropdownMenuItem onClick={onEdit}>Edit shipment</DropdownMenuItem>
        <DropdownMenuItem variant="destructive" onClick={onCancel}>Cancel shipment</DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
