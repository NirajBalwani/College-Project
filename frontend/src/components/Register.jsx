import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { createPortal } from "react-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSuccess } from "../store/reducers/globalReducer";
import { useAuthRegisterMutation } from "../store/services/authService";
import toast, { Toaster } from "react-hot-toast";
import { setUserToken } from "../store/reducers/authReducer";

const Register = ({ open, setOpen }) => {
    const { isRegister } = useSelector((state) => state.toggleReducer);

    const [registerData, response] = useAuthRegisterMutation();
    console.log(response);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    const basicSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        password: yup
            .string()
            .min(5)
            // .matches(passwordRules, { message: "Please create a stronger password" })
            .required("Password is required"),
        confirmPassword: yup
            .string()
            .min(5)
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const onSubmit = async (values, actions) => {
        await registerData(values);
        // registerData(values)
        actions.resetForm();
        // response?.isSuccess ? navigate("/login") : navigate("/register");
        setOpen(false);
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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    useEffect(() => {
        if (response?.isSuccess) {
            localStorage.setItem("login-token", response?.data?.token);
            //   dispatch(setUserToken(response?.data?.token))
            dispatch(setSuccess(response?.data?.msg));
            toast.success(response?.data?.msg);
            //   setTimeout(() => {
            //     setOpenRegister(!openRegister);
            //     setOpenLogin();
            //   }, 1000);
            //   setOpenRegister(!openRegister);
        }
    }, [response?.isSuccess]);

    useEffect(() => {
        if (response.isError) {
            toast.error(response?.error?.data?.errors[0].msg);
        }
    }, [response?.isError]);

    // const [open, setOpen] = React.useState(false);
    // const [loginOpen, setLoginOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleLoginOpen = () => setLoginOpen(true);
    // const handleLoginClose = () => setLoginOpen(false);
    // const handleClose = () => setOpen(false);


    return <>
        <Toaster
            toastOptions={{ style: { fontSize: "8px" } }}
            position="top-center"
            reverseOrder={true}
        />
        <RegComponent>
            <div className="closeIcon">
                <div className="title">Register</div>
                <HighlightOffIcon className="icon" onClick={() => setOpen(false)}>
                    close
                </HighlightOffIcon>
            </div>
            <div className="login">
                <form
                    className="inputs"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <div className="input firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            value={values.firstName}
                            id="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.firstName && touched.firstName ? "input-error" : ""
                            }
                            type="text"
                            placeholder="Enter your FirstName"
                        />
                        {
                            errors.firstName && touched.firstName ? <p></p> : <p style={{ visibility: "hidden" }}>Hello brother</p>
                        }
                        {errors.firstName && touched.firstName && (
                            <p className="error">{errors.firstName}</p>
                        )}
                    </div>
                    <div className="input lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            value={values.lastName}
                            id="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.lastName && touched.lastName ? "input-error" : ""
                            }
                            type="text"
                            placeholder="Enter your LastName"
                        />
                        {
                            errors.lastName && touched.lastName ? <p></p> : <p style={{ visibility: "hidden" }}>Hello brother</p>
                        }
                        {errors.lastName && touched.lastName && (
                            <p className="error">{errors.lastName}</p>
                        )}
                    </div>
                    <div className="input email">
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
                    <div className="input password">
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
                    <div className="input confirmPassword">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            value={values.confirmPassword}
                            id="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.confirmPassword && touched.confirmPassword
                                    ? "input-error"
                                    : ""
                            }
                            type="password"
                            placeholder="Enter your Confirm Password"
                        />
                        {
                            errors.confirmPassword && touched.confirmPassword ? <p></p> : <p style={{ visibility: "hidden" }}>Hello brother</p>
                        }
                        {errors.confirmPassword && touched.confirmPassword && (
                            <p className="error">{errors.confirmPassword}</p>
                        )}
                    </div>
                    <button className="submit">Submit</button>
                </form>
            </div>
            <div className="googlelinks"></div>
        </RegComponent>
    </>
};

export default Register;

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
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "firstName lastName"
        "email email"
        "password password"
        "confirmPassword confirmPassword"
        "submit submit";
      grid-column-gap: 3rem;
      /* grid-row-gap: 2rem; */
      .firstName {
        grid-area: firstName;
      }
      .lastName {
        grid-area: lastName;
      }
      .email {
        grid-area: email;
      }
      .password {
        grid-area: password;
      }
      .confirmPassword {
        grid-area: confirmPassword;
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
          "firstName firstName"
          "lastName lastName"
          "email email"
          "password password"
          "confirmPassword confirmPassword"
          "submit submit";
      }
    }
  }
`;
