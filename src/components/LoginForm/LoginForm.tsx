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
      <h2>Login</h2>
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
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="Enter your password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
