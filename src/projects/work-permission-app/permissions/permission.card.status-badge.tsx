import { Badge } from "@mantine/core";
import { permissionStatuses } from "./permission.status.repository";

interface Props {
    statusId: number;
}

export default function PermissionStatusBadge({ statusId }: Props) {
    const status = permissionStatuses.find(s => s.id === statusId);

    if (!status) return null;

    return (
        <Badge
            size="md"
            radius="md"
            color={statusColors[status.id]}
        >
            {status.label}
        </Badge>
    );
}

const statusColors: Record<number, string> = {
    1: "yellow",
    2: "green",
    3: "red",
    4: "gray",
    5: "dark",
};