import { PermissionType } from "./permission.types.model";

export const permissionTypes: PermissionType[] = [
  {
    id: 1,
    name: "supplier-entry",
    label: "Ingreso de proveedores",
    description: "",
  },
  {
    id: 2,
    name: "furniture-installation",
    label: "Instalación/Modificación de mobiliario",
    description: "",
  },
  {
    id: 3,
    name: "decoration-installation",
    label: "Instalación/Modificación de decoración",
    description: "",
  },
  {
    id: 4,
    name: "maintenance",
    label: "Mantenimiento preventivo y/o correctivo",
    description: "",
  },
  {
    id: 5,
    name: "marketing",
    label: "Actividades de marketing",
    description: "",
  },
];
