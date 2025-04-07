import { z } from "zod"

const loginSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(8).regex(/[A-Z]/, "Passsword must contain a uppercase letter")
        .regex(/[a-z]/, "Password must contain lowercase letters")
        .regex(/[0-9]/, "Password should contain at least a number").regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

export default loginSchema;