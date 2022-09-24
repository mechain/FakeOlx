import * as Yup from 'yup';
import {validators} from './validators/index'
export const userSchema = Yup.object({
    userName: Yup.string().min(3 , 'Too Short!').max(30 , 'Too Long!').required('Required'),
    firstName: Yup.string().min(3 , 'Too Short!').max(30 , 'Too Long!').required('Required'),
    lastName: Yup.string().min(3 , 'Too Short!').max(30 , 'Too Long!').required('Required'),
    email : Yup.string().matches(validators.email , 'Invalid Email'),
    password : Yup.string().min(8 , "Too Short!").max(20 ,'Too Long!').required('Required'),
    confirmPassword : Yup.string().oneOf([ Yup.ref('password') , null] , "Password Does Not Matches"),
    mobile : Yup.string().matches(validators.mobile , 'Invalid Mobile Number'),
})