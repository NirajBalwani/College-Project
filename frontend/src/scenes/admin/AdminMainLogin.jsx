import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAdminAuthMutation } from '../../store/services/authService';
import { setAdminToken } from '../../store/reducers/authReducer';

const AdminMainLogin = () => {

    const basicSchema = yup.object().shape({
        email: yup.string().email("Please enter a valid email").required("Email is required"),
        password: yup.string().required("Password is required")
    })

    const [loginData, response] = useAdminAuthMutation();
    console.log(response);
    const error = response?.error?.data?.errors ? response?.error?.data?.errors : []

    console.log(response);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        loginData(values)
    }

    const {
        values, errors, touched, handleBlur, handleChange, handleSubmit
    } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    useEffect(() => {
        if(response?.isSuccess){
            localStorage.setItem('admin-token',response?.data?.token)
            dispatch(setAdminToken(response?.data?.token))
            if(response?.data?.admin) {
                navigate("/dashboard/packages")
                console.log("yes");
            }
        }
    }, [response?.isSuccess]);

    return (
        <Section>
            <div className="login">
                <h3>LOGIN</h3>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input value={values.email} id="email" onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} type="email" placeholder='Enter your email' />
                        {
                            errors.email && touched.email ? "" : <p style={{ visibility: "hidden", marginBottom: "var(--r1)" }}>Hello brother</p>
                        }
                        {
                            errors.email && touched.email && (
                                <p className='error'>{errors.email}</p>
                            )
                        }
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input value={values.password} id="password" onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password ? "input-error" : ""} type="password" placeholder='Enter your password' />
                        {
                            errors.password && touched.password ? "" : <p style={{ visibility: "hidden", marginBottom: "var(--r1)" }}>Hello brother</p>
                        }
                        {
                            errors.password && touched.password && (
                                <p className='error'>{errors.password}</p>
                            )
                        }
                    </div>
                    <button className='submit'>Submit</button>
                </form>
            </div >
        </Section >
    );
}

export default AdminMainLogin;

const Section = styled.section`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--bgDarkAdmin);
    .login{
        width: 40%;
        height: 65%;
        background-color: var(--bgVioletAdmin);
        padding: var(--r2) var(--r4);
        h3{
            font-size: var(--r3);
            font-weight: 700;
            color: var(--bgYellow);
            margin-top: var(--r1-5);
            margin-bottom: var(--r2-5);
        }
        .field{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--r1);
            label{
                font-size: var(--r1-5);
                color: var(--bgWhite);
            }
            input{
                padding: var(--r1) var(--r3);
                font-size: var(--r1-75);
                width: 100%;
                border: none;
                outline: none;
            }
            .error{
                padding: 0;
                margin-bottom: var(--r1);
                font-size: var(--r1-25);
                color: red;
                letter-spacing: .15rem;
            }
        }
        form{
            button{
            font-size: var(--r2);
            font-weight: 700;
            padding: var(--r-5) var(--r3);
            border-radius: var(--r1);
            background-color: var(--bgYellow);
            color: var(--bgVioletAdmin);
            cursor: pointer;
            margin-top: var(--r1);
            border: none;
            margin-bottom: var(--r4);
            &:hover{
                background-color: var(--bgLightBlue);
                transition: all .3s ease-in-out;
                 box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
                -webkit-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
                -moz-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
            }
        }
        }
    }

`