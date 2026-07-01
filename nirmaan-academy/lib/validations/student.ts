import { z } from "zod";

export const createStudentSchema = z.object({
  studentName: z
    .string()
    .min(2, "Student name must be at least 2 characters")
    .max(100, "Student name cannot exceed 100 characters"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
  course: z
    .string()
    .max(50, "Course name cannot exceed 50 characters"),
  rank: z.number().int().min(1, "Rank must be greater than 0"),
  marks: z
    .number()
    .min(0, "Marks cannot be negative")
    .max(200, "Marks cannot exceed 200")
    .optional()
    .nullable(),
  collegeName: z
    .string()
    .max(150, "College name cannot exceed 150 characters")
    .optional()
    .nullable(),
  branchName: z
    .string()
    .max(150, "Branch name cannot exceed 150 characters")
    .optional()
    .nullable(),
  admissionYear: z
    .number()
    .int()
    .min(2000, "Admission year is invalid")
    .max(2100, "Admission year is invalid"),
  achievementYear: z
    .number()
    .int()
    .min(2000, "Achievement year is invalid")
    .max(2100, "Achievement year is invalid")
    .optional()
    .nullable(),
  testimonial: z
    .string()
    .max(2000, "Testimonial cannot exceed 2000 characters")
    .optional()
    .nullable(),
  featured: z.boolean(),
  displayOrder: z.number().int().min(1, "Display order must be at least 1"),
});

export type CreateStudentInput = z.infer<typeof createStudentSchema>;
