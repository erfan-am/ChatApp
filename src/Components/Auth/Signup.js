import React  from 'react'
import INPUT from '../UI/Input'
import Button from '../UI/Button'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { Validate } from './Validate';

const Login = () => {
    return (
        <div className=" opacity-80 bg-blue-700 flex justify-center min-h-screen relative">
         <div  className="bg-white p-2  fixed mt-10 rounded">
         <h1 className=" text-center  font-bold  font-serif">Create your accunt in ER.ChAT</h1>
         <Formik initialValues={{name:"",email:"",password:"",confirm:""}}
             validate={values =>Validate(values)}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
             >
                 {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       })=> (
             <form onSubmit={handleSubmit} className="mt-10">
                     <INPUT
                        type="name"
                        name="name"
                        label="Name"
                        placeholder="Enter Valid Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error= {errors.name && touched.name && errors.name}
                    />
                    <INPUT
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter Valid Email"
                        value={values.email}
                        onBlur={handleBlur}
                        error= {errors.email && touched.email && errors.email} 
                        onChange={handleChange}
                    />
                         <INPUT
                        type="password"
                        placeholder="Enter Valid Password"
                        name="password"
                        label="Password"
                        value={values.password}
                        onBlur={handleBlur}
                        error= {errors.password && touched.password && errors.password} 
                       onChange={handleChange}
                    />
                      <INPUT
                        type="password"
                        placeholder="Enter Password Again"
                        name="confirm"
                        label="Confirm"
                        value={values.confirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error= {errors.confirm && touched.confirm && errors.confirm}  />
                    <p className="text-center">If you  have account , please click  <Link  className="text-blue-600 hover:text-red-600" to="/login">here</Link></p>
                    <Button type="submit" onClick={handleSubmit} disabled={isSubmitting} children="Login" className="mx-36" />
           </form>
       )}
             </Formik>
         </div>
        </div>
    )
}

export default Login
