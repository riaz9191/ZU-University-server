import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created succesfully',
    data: result,
  });
});

const getAllAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters are retrieved succesfully',
    data: result,
  });
});

const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { semesterId  } = req.params;
    const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
      semesterId ,
    );
   sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is retrieved succesfully',
      data: result,
    });
  },
);

const updateAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterInDB(
    semesterId,req.body)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true, 
      message: 'Academic Semester is updated succesfully',
      data: result,
    });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester
};
