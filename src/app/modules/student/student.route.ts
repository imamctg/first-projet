import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

router.post('/create-student', StudentController.createStudent)

router.get('/', StudentController.getAllStudentsFromDB)

router.get('/:id', StudentController.getSingleStudent)

export const StudentRoutes = router
