import { z } from "zod";

const signupchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be Atleast 3 characters" })
    .max(255, { message: "Name cant be any longer" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Not a valid email" })
    .min(3, { message: "Name must be Atleast 3 characters" })
    .max(255, { message: "Name cant be any longer" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone number must be Atleast 10 digits" })
    .max(20, { message: "Phone cant be any longer" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be atleast 7 characters" })
    .max(1024, { message: "Password cant be longer" }),
});

export { signupchema };
