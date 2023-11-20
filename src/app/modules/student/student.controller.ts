import { Request, Response } from 'express'
import { createStudentServices } from './student.service'
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body

    // It will call service funciton to send data
    const result = await createStudentServices.createStudentIntoDB(student)

    // response data
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getAllStudentsFromDB = async (req: Request, res: Response) => {
  const result = await createStudentServices.getStudentFromDB()
  try {
    res.status(200).json({
      success: true,
      message: 'Student get successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await createStudentServices.getSingleStudentFromDB(id)
    res.status(200).json({
      success: true,
      message: 'Get single student successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentController = {
  createStudent,
  getAllStudentsFromDB,
  getSingleStudent,
}
