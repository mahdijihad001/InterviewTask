import z from "zod";

export const createTaskZod = z.object({
    title: z.string({ invalid_type_error: "Title must be string" }),
    content: z.string({ invalid_type_error: "Content must be string" })
});

export const updateZodTask = z.object({
    title: z.string({ invalid_type_error: "Title must be string" }).optional(),
    content: z.string({ invalid_type_error: "Content must be string" }).optional()
})