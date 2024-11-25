import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is created succesfully',
    data: result,
  });
});

const getAllAcademicFaculties: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultiesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculties are retrieved succesfully',
    data: result,
  });
});

const getSingleAcademicFaculty: RequestHandler = catchAsync(
  async (req, res) => {
    const { facultyId  } = req.params;
    const result = await AcademicFacultyServices.getSingleAcademicFacultiesFromDB(
      facultyId ,
    );
   sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty is retrieved succesfully',
      data: result,
    });
  },
);

const updateAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicFacultyServices.updateAcademicFacultiesInDB(
    facultyId,req.body)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true, 
      message: 'Academic faculty is updated succesfully',
      data: result,
    });
});

export const AcademicFacultyControllers = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateAcademicFaculty,
};
