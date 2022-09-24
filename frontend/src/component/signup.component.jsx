import axios from "axios";
import { Formik , Form , Field , ErrorMessage } from "formik";
import { userSchema } from "../helper/signUpSchema";
const SignUp = () => {
    const userValidationSchema = userSchema;
    const initialValues = {
        userName: '',
        firstName : '',
        lastName : '',
        password : '',
        email: '',
        confirmPassword : '',
        mobile : '',
    }
    const handleSubmit = async (values) => {
        const response = await axios.post('http://localhost:3001/signup', {
            userName : values.userName,
            firstName : values.firstName ,
            lastName : values.lastName ,
            mobile : values.mobile,
            email : values.email,
            password : values.password,
        });
        console.log(response)

        console.log(values)
    }
 
    return(
        <div>
            <h1>SignUp Page</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={userValidationSchema}
            onSubmit={handleSubmit}>
                {(errors , touched) => (
                    <Form>
                    <label >Username</label>
                    <Field name='userName'/>
                    <ErrorMessage name='userName' />
                    <label >Firstname</label>
                    <Field name='firstName'/>
                    <ErrorMessage name="firstName"/>
                    <label >Lastname</label>
                    <Field name='lastName'/>
                    <ErrorMessage name="lastName"/>
                    <label >Email</label>
                    <Field name='email'/>
                    <ErrorMessage name="email"/>
                    <label >Mobile</label>
                    <Field name='mobile'/>
                    <ErrorMessage name="mobile" />
                    <label >Password</label>
                    <Field name='password'/>
                    <ErrorMessage name="password"/>
                    <label >Confirm Password</label>
                    <Field name='confirmPassword' />
                    <ErrorMessage name="confirmPassword"/>
                    <button type="submit" name="button">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp ;