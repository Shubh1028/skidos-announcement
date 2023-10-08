import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AppContext from "../../contextAPI/context";

/* For creating a login form I used formik library which makes form building easier and it also helps in form validation in an easy way.
 I used the authentication using https://reqres.in as instructed and when right credentials are intered than only user will be able to login.*/

const LoginForm = () => {
  const { toggleIsLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const apiUrl = "https://reqres.in/api/login";
  const makeApiCall = async (values) => {
    const dataStringi = JSON.stringify(values);
    console.log(dataStringi);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      toggleIsLogin();
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onSubmit = (values) => {
    makeApiCall(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="form-control"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="form-control"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
