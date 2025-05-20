import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  profilePicture: z.string().optional(),
  notifications: z.boolean().default(true),
});

export const dashboardMetricsSchema = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
    value: z.union([z.number(), z.string()]),
    color: z.string(),
  })
); 