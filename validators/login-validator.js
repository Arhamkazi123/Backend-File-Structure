import { z } from "zod";

const loginschema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Not a valid email" })
    .min(3, { message: "Name must be Atleast 3 characters" })
    .max(255, { message: "Name cant be any longer" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be atleast 7 characters" })
    .max(1024, { message: "Password cant be longer" }),
});

export { loginschema };
