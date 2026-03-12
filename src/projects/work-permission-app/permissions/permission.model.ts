import { z } from "zod";
import dayjs, { Dayjs } from "dayjs";

const HourString = z
  .string()
  .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid hour format (HH:mm)");

const DayjsSchema = z.custom<Dayjs>((value) => dayjs.isDayjs(value), {
  message: "Invalid Dayjs object",
});

export const PermissionBaseSchema = z.object({
  shoppingCenter: z.string(),
  retailSpace: z.string(),

  typeId: z.number(),
  statusId: z.number(),

  startDate: DayjsSchema,
  endDate: DayjsSchema,

  startHour: HourString,
  endHour: HourString,

  description: z.string(),

  file: z.instanceof(File).optional(),
});

export const PermissionSchema = PermissionBaseSchema.extend({
  id: z.number(),

  createdBy: z.email(),
  createdAt: DayjsSchema,
});

export const PermissionCreateSchema = PermissionBaseSchema.extend({
  createdBy: z.email(),
});

export const PermissionUpdateSchema = PermissionBaseSchema.partial().extend({
  id: z.number(),
});

export type Permission = z.infer<typeof PermissionSchema>;
