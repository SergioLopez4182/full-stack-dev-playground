import dayjs from "dayjs";
import { Permission, PermissionSchema } from "./permission.model";

export const permissionsMock: Permission[] = PermissionSchema.array().parse([
  {
    id: 1,
    shoppingCenter: "Galerías Saltillo",
    retailSpace: "Local A-101",

    typeId: 1,
    statusId: 2,

    startDate: dayjs("2026-01-15"),
    endDate: dayjs("2026-01-15"),

    startHour: "09:00",
    endHour: "11:00",

    description: "Ingreso de proveedor para entrega de mercancía.",

    createdBy: "admin@mall.com",
    createdAt: dayjs("2026-01-13"),
  },
  {
    id: 2,
    shoppingCenter: "Galerías Saltillo",
    retailSpace: "Local B-203",

    typeId: 2,
    statusId: 1,

    startDate: dayjs("2026-02-03"),
    endDate: dayjs("2026-02-03"),

    startHour: "10:00",
    endHour: "14:00",

    description: "Instalación de nuevo mobiliario en área de exhibición.",

    createdBy: "tenant@store.com",
    createdAt: dayjs("2026-02-01"),
  },
  {
    id: 3,
    shoppingCenter: "Plaza Real",
    retailSpace: "Local C-305",

    typeId: 3,
    statusId: 2,

    startDate: dayjs("2026-02-20"),
    endDate: dayjs("2026-02-20"),

    startHour: "08:30",
    endHour: "12:00",

    description: "Cambio de decoración por temporada.",

    createdBy: "marketing@store.com",
    createdAt: dayjs("2026-02-10"),
  },
  {
    id: 4,
    shoppingCenter: "Plaza Real",
    retailSpace: "Local D-110",

    typeId: 4,
    statusId: 4,

    startDate: dayjs("2026-03-05"),
    endDate: dayjs("2026-03-05"),

    startHour: "07:00",
    endHour: "09:00",

    description: "Mantenimiento correctivo del sistema eléctrico.",

    createdBy: "maintenance@mall.com",
    createdAt: dayjs("2026-02-13"),
  },
  {
    id: 5,
    shoppingCenter: "Galerías Saltillo",
    retailSpace: "Kiosco K-12",

    typeId: 5,
    statusId: 3,

    startDate: dayjs("2026-04-12"),
    endDate: dayjs("2026-04-12"),

    startHour: "16:00",
    endHour: "20:00",

    description: "Activación de marketing con promoción de temporada.",

    createdBy: "events@agency.com",
    createdAt: dayjs("2026-03-15"),
  },
]);
