import React from 'react'
import INPUT from '../UI/Input'
import Button from '../UI/Button'
import { Link } from 'react-router-dom';
import {  Formik } from 'formik';
import { Validate } from './Validate';

const Login = () => {
    return (
        <div className=" opacity-80 bg-blue-700 flex justify-center min-h-screen relative">
             <h1 className="text-white text-center mt-36  font-bold  font-serif">Login To ER.ChAT With Email And Password</h1>
         <div  className="bg-white p-3  fixed mt-44 rounded">
             <Formik initialValues={{email:"",password:""}}
             validate={(values)=>Validate(values)}
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
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter Valid Email"
                        value={values.email}
                        error={errors.email && touched.email && errors.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
           <INPUT
                        type="password"
                        placeholder="Enter Valid Password"
                        name="password"
                        label="Password"
                        value={values.password}
                        onBlure={handleBlur}
                        error={errors.password && touched.password && errors.password}
                        onChange={handleChange}
                    />
           <p className="text-center">If you don't have account please click  <Link  className="text-blue-600 hover:text-red-60" to="/signup">here</Link></p>
           <Button type="submit" onClick={handleSubmit} disabled={isSubmitting} children="Login" className="mx-36" />
           </form>
       )}
             </Formik>
         </div>
        </div>
    )
}

export default Login
