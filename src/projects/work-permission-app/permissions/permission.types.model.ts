import { z } from "zod";

export const PermissionTypeSchema = z.object({
    id: z.number(),
    name: z.string(),
    label: z.string().optional(),
    description: z.string(),
})

export type PermissionType = z.infer<typeof PermissionTypeSchema>;