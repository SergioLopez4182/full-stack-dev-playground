import {
  PermissionStatus,
  PermissionStatusSchema,
} from "./permission.status.model";

export const permissionStatuses: PermissionStatus[] =
  PermissionStatusSchema.array().parse([
    {
      id: 1,
      name: "pending",
      label: "Pendiente",
      description: "",
    },
    {
      id: 2,
      name: "approved",
      label: "Aprobado",
      description: "",
    },
    {
      id: 3,
      name: "rejected",
      label: "Rechazado",
      description: "",
    },
    {
      id: 4,
      name: "expired",
      label: "Caducado",
      description: "",
    },
    {
      id: 5,
      name: "canceled",
      label: "Cancelado",
      description: "",
    },
  ]);
