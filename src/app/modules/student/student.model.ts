import { Schema, model } from 'mongoose'
import { Guardian, Student, UserName } from './student.interface'

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
})

const gurdianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherProfession: { type: String, required: true },
  motherName: { type: String, required: true },
  motherProfession: { type: String, required: true },
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  email: { type: String, required: true },
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
})

export const StudentModel = model<Student>('StudentModel', studentSchema)
