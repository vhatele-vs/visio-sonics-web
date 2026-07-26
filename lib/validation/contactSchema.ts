import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name is too short")
    .max(100, "Name is too long"),

  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email is too long"), // RFC 5321 max length

  phone: z
    .string()
    .max(30, "Phone number is too long")
    .regex(/^[0-9+\-\s()]*$/, "Invalid phone number")
    .optional()
    .or(z.literal("")),

  projectType: z
    .string()
    .max(100, "Project type is too long")
    .optional()
    .or(z.literal("")),

  message: z
    .string()
    .min(10, "Message is too short")
    .max(2000, "Message is too long"),
});