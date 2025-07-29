import z from "zod";


export const validateZodSchema = z.object({
    name: z.string({ invalid_type_error: "Name must be string" }).min(3, { message: "Name to short. Menumum 2 character long." }),
    email: z.string({ invalid_type_error: "Email must be string" }).email({ message: "Invalid email address formate" }).toLowerCase().trim(),
    password: z.string().min(8, { message: "Password to short , menimum 8 carecter long" })
        .regex(/\d/, { message: "Password must be contain at least one number" })
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: "Password must be at last one speacil character" })
        .regex(/[A-Z]/, { message: "Password must be contain must be one uppercase chacacter" })
        .regex(/[a-z]/, { message: "Password must be contain at last one lowarcast character" })
});

