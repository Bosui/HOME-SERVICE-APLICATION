// src/components/RegisterForm/RegisterForm.tsx

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import styles from './RegisterForm.module.scss'; // Importuojame stilius

const RegisterForm: React.FC = () => {
  // Yup validacija
  const validationSchema = Yup.object({
    username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <div>
      <h2>Sign Up Form</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Čia galite apdoroti formos duomenis, pvz., siųsti į serverį
          console.log(values);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" placeholder="Enter your username" />
            <ErrorMessage name="username" component="div" className={styles.error} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="Enter your password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
            <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
          </div>
          <button type="submit">Sign Up</button>

          <div className={styles.socialLoginButtons}>
            <a href="#" className={`${styles.socialButton} ${styles.facebook}`}>Facebook</a>
            <a href="#" className={`${styles.socialButton} ${styles.google}`}>Google</a>
          </div>

          <p className={styles.signupLink}>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
