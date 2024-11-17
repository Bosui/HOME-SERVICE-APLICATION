// src/components/LoginForm/LoginForm.tsx

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import styles from './LoginForm.module.scss'; // Importuojame stilius

const LoginForm: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <div>
      <h2>Login Form</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email or Username</label>
            <Field type="email" id="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="Enter your password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <button type="submit">Login</button>

          <div className={styles.socialLoginButtons}>
            <a href="#" className={`${styles.socialButton} ${styles.facebook}`}>Facebook</a>
            <a href="#" className={`${styles.socialButton} ${styles.google}`}>Google</a>
          </div>

          <p className={styles.signupLink}>
            Not a member? <a href="/signup">Signup now</a>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
