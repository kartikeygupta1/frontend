'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as Yup from 'yup';

const Signup = () => {

  const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required').min(6, 'Too short')
    .matches(/[a-z]/, 'password must contain lowercase letter')
    .matches(/[A-Z]/, 'password must contain uppercase letter')
    .matches(/[0-9]/, 'password must contain number')
    .matches(/\W/, 'password must contain special symbol'),
    cpassword: Yup.string().required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const signupForm = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      cpassword: ''
    },
    onSubmit: (values, {resetForm}) => {

        fetch('http://localhost:5000/post/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type' : 'application/json'
                }
            })
            .then((response) => {
                console.log(response.status);
            }).catch((err) => {
                console.log(err);
            });
            
      setTimeout(() => {
        console.log(values);
        resetForm();
      }, 3000);
    },
    validationSchema: signupValidationSchema
  })

  return (
    <section className="vh-100 bg-primary-subtle">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                  {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-primary fw-bold">
                      Registration Form
                    </h3>
                    <form onSubmit={signupForm.handleSubmit}>

                      <div class="mb-3">
                        <label for="" class="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.email}
                          class="form-control"
                          placeholder=""
                        />
                        <small class="text-muted">Enter Valid Email Address</small>
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.name}
                          class="form-control"
                          placeholder=""
                        />
                        <small class="text-muted">Enter Full Name</small>
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                          type="text"
                          id="password"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.password &&
                          <small class="text-danger">{signupForm.errors.password}</small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="cpassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.cpassword}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.cpassword &&
                          <small class="text-danger">{signupForm.errors.cpassword}</small>
                        }
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all
                        </button>
                        <button disabled={signupForm.isSubmitting} type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>

                    <p>Already Registered? <Link href='/login'>Login Here</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup;