import { z } from 'zod';

const preRequisitesCoursesValidationSchema = z.object({
  course: z.string(),
  isDelete: z.boolean().optional(),
});

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisitesCourses: z.array(preRequisitesCoursesValidationSchema),
  }),
});

export const CourseValidation = {
  createCourseValidationSchema,
};
