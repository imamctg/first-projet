export type Guardian = {
  fatherName: string
  fatherProfession: string
  motherName: string
  motherProfession: string
}
export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  email: string
  dateOfBirth: string
  contactNumber: string
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  gurdian: Guardian
}
