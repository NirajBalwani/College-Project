import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAuthLoginMutation } from "../store/services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { setSuccess } from "../store/reducers/globalReducer";
import { setUserToken } from "../store/reducers/authReducer";

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const Login = ({ loginOpen, setLoginOpen }) => {

    const basicSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: yup.string().required("Password is required"),
    });
    const [loginData, response1] = useAuthLoginMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        loginData(values);
        // actions.resetForm();
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    useEffect(() => {
        if (response1?.isSuccess) {
            if (response1?.data?.token) {
                localStorage.setItem("login-token", response1?.data?.token);
                console.log(response1?.data?.token);
            }
            dispatch(setUserToken(response1?.data?.token));
            toast.success("Logged In successfully");
        }
    }, [response1?.isSuccess]);

    useEffect(() => {
        if (response1.isError) {
            toast.error(response1?.error?.data?.errors[0].msg);
        }
    }, [response1?.isError]);

    return <>
        <Toaster
            toastOptions={{ style: { fontSize: "8px" } }}
            position="top-center"
            reverseOrder={true}
        />
        <RegComponent>
            <div className="closeIcon">
                <div className="title">Log In</div>
                <HighlightOffIcon
                    className="icon"
                    onClick={() => setLoginOpen(false)}
                >
                    close
                </HighlightOffIcon>
            </div>
            <div className="login">
                <form
                    className="inputs"
                    onSubmit={handleSubmit}
                    // autoComplete="off"
                >
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                            value={values.email}
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email ? "input-error" : ""
                            }
                            type="email"
                            placeholder="Enter your Email"
                        />
                        {
                            errors.email && touched.email ? <p></p> : <p style={{ visibility: "hidden" }}>Hello brother</p>
                        }
                        {errors.email && touched.email && (
                            <p className="error">{errors.email}</p>
                        )}
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            value={values.password}
                            id="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.password && touched.password ? "input-error" : ""
                            }
                            type="password"
                            placeholder="Enter your Password"
                        />
                        {
                            errors.password && touched.password ? <p></p> : <p style={{ visibility: "hidden" }}>Hello brother</p>
                        }
                        {errors.password && touched.password && (
                            <p className="error">{errors.password}</p>
                        )}
                    </div>
                    <button className="submit">Submit</button>
                </form>
            </div>
            <div className="googlelinks"></div>
        </RegComponent></>
};

export default Login;

const slideDown = keyframes`
  from {
    top: -100%;
  }
  to {
    top: 0;
  }
`;

const RegComponent = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2000;
  background-color: var(--bgYellow);
  padding: var(--r2) var(--r4);
  .closeIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      font-size: var(--r3);
      cursor: pointer;
      color: var(--bgDarkBlue);
    }
    .title {
      font-size: var(--r3);
      font-weight: 700;
      color: var(--bgDarkBlue);
    }
  }
  .login {
    .inputs {
      margin-top: var(--r2);
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        "email "
        "password"
        "submit";
      grid-column-gap: 3rem;
      /* grid-row-gap: 2rem; */
      .email {
        grid-area: email;
      }
      .password {
        grid-area: password;
      }
      .input {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: var(--r-5);
        .input-error {
          border: 2px solid red;
        }
        .error {
          font-size: var(--r1-25);
          padding: 0;
          padding-bottom: var(--r-5);
          color: red;
        }
        label {
          font-size: var(--r1-5);
          color: var(--bgDarkBlue);
          font-weight: 700;
        }
        input {
          padding:var(--r-75) var(--r1-75);
          outline: none;
          background-color: white;
          border: 2px solid #a6a4a1;
          font-size: var(--r1-75);
          width: 100%;
          &:focus {
            border: 2px solid #383734;
            transition: all 0.3s ease-in-out;
          }
        }
      }
      .submit {
        padding: var(--r1) var(--r3);
        font-size: var(--r1-75);
        font-weight: 600;
        color: var(--bgYellow);
        border: 2px solid #383734;
        background-color: var(--bgDarkBlue);
        margin-top: var(--r1-75);
        grid-area: submit;
        &:hover {
          color: #a6a4a1;
          background-color: #383734;
          border: 2px solid #a6a4a1;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 875px) {
    .login {
      .inputs {
        grid-template-areas:
          "email email"
          "password password"
          "submit submit";
      }
    }
  }
`;