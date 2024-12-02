import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidation } from './course.validation';
import { CourseControllers } from './course.controller';
const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/',CourseControllers.getAllCourses);

router.get('/:id', CourseControllers.getSingleCourse);
// router.patch(
//   '/:facultyId',
//   validateRequest(
//     academicFacultyValidation.updateAcademicFacultyValidationSchema,
//   ),
//   AcademicFacultyControllers.updateAcademicFaculty,
// );
router.delete('/:id', CourseControllers.deleteCourse);

export const CourseRoutes = router;
