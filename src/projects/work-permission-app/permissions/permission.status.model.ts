import { z } from "zod";

export const PermissionStatusSchema = z.object({
    id: z.number(),
    name: z.string(),
    label: z.string().optional(),
    description: z.string(),
})

export type PermissionStatus = z.infer<typeof PermissionStatusSchema>;