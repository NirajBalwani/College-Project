import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useFetchOneThemeQuery, useUpdateThemeMutation, useUpdateThemeNameMutation } from '../../../../store/services/themeService';
import { setSuccess } from '../../../../store/reducers/globalReducer';
import { useGetSingleUserQuery, useUpdateUserMutation } from '../../../../store/services/adminUserService';

const AdminEditSubUsers = () => {

    const { id } = useParams();
    const [updateUser, response] = useUpdateUserMutation();

    const navigate = useNavigate();
    console.log(id);

    const { data, isFetching } = useGetSingleUserQuery(id);
    console.log(data);

    const dispatch = useDispatch();

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const check = () => {
        if (state.firstName && state.lastName && state.email) {
            if(state.password || state.confirmPassword) {
                if(state.password === state.confirmPassword){
                    return false;
                }
                else {
                    return true
                }
            }
            return false;
        }
        return true
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("object");
        console.log(id);
        const data = {
            ...state,
            id
        }
        updateUser(data);
    }

    useEffect(() => {
        if (response?.isSuccess) {
            dispatch(setSuccess("Theme added Successfully"))
            navigate("/dashboard/users")
        }
        if (response?.isError) {
            toast.error("Try again")
        }
    }, [response?.isSuccess]);

    useEffect(() => {
        if (data?.user) {
            setState(prev => ({ ...prev, firstName: data?.user[0]?.firstName }))
            setState(prev => ({ ...prev, lastName: data?.user[0]?.lastName }))
            setState(prev => ({ ...prev, email: data?.user[0]?.email }))
        }
    }, [data])

    return (
        <>
            <Toaster
                toastOptions={{ style: { fontSize: "1.5rem" } }}
                position="top-center"
                reverseOrder={true}
            />
            <Section>
                <div className="add">
                    <Link to="/dashboard/users"><button>Back</button></Link>
                </div>
                <div className="main">
                    <div className="wrapper">
                        <h3>Update User</h3>
                        <div className="info">
                            <form
                                onSubmit={(e) => handleSubmit(e)}
                                autoComplete="off"
                            >
                                <div className="join">
                                    <label htmlFor="themeName">First Name</label>
                                    <input type="text" placeholder='Enter Users First Name' name='firstName' id="firstName" value={state.firstName} onChange={handleChange} />
                                </div>
                                <div className="join">
                                    <label htmlFor="themeName">Last Name</label>
                                    <input type="text" placeholder='Enter Users Last Name' name='lastName' id="lastName" value={state.lastName} onChange={handleChange} />
                                </div>
                                <div className="join">
                                    <label htmlFor="themeName">Email</label>
                                    <input type="text" placeholder='Enter Users Email ID' name='email' id="email" value={state.email} onChange={handleChange} />
                                </div>
                                <div className="join">
                                    <label htmlFor="themeName">Password</label>
                                    <input type="text" placeholder='Enter Users Password' name='password' id="password" value={state.password} onChange={handleChange} />
                                </div>
                                <div className="join">
                                    <label htmlFor="themeName">Confirm Password</label>
                                    <input type="text" placeholder='Enter Confirm Password' name='confirmPassword' id="confirmPassword" value={state.confirmPassword} onChange={handleChange} />
                                </div>
                                <input disabled={check() ? true : false} style={{ opacity: check() ? '.7' : "1" }} type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default AdminEditSubUsers;

const Section = styled.div`
    flex: 7;
    background-color: var(--bgVioletAdmin);
    .add{
        margin: var(--r2) var(--r2);
        height: var(--r7);
        width: 97%;
        background-color: var(--bgWhite);
        display: flex;
        border-radius: var(--r-75);
        align-items: center;
        button{
            background-color: var(--bgYellow);
            padding: var(--r1-25) var(--r3);
            font-size: var(--r1-75);
            font-weight: 700;
            color: var(--bgVioletAdmin);
            border: none;
            margin-left: var(--r2);
            border-radius: var(--r-75);
            cursor: pointer;
            &:hover{
                box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
                -webkit-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
                -moz-box-shadow: -2px -1px 30px -2px rgba(0,0,0,0.48);
            }
        }
    }
    .main{
        height: 68vh;
        width: 97%;
        background-color: var(--bgWhite);
        margin: var(--r3) var(--r2);
        border-radius: var(--r1);
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--r2);
        padding: var(--r2) var(--r3);
        .preview{
            /* margin-right: var(--r60); */
            margin-top: var(--r20);
            img{
                width: 30rem;
                height: 14rem;
                object-fit: cover;
                border-radius: var(--r1-25);
            }
        }
        .wrapper{
            gap: var(--r2);
            width: 100%;
            h3{
            font-size: var(--r2-5);
            font-weight: 700;
            color: var(--bgVioletAdmin);
            margin-bottom: var(--r4);
            }
            .info{
                display: flex;
                flex-direction: column;
                gap: var(--r-75);
                form {
                    /* display: grid;
                    width: 100%;
                    grid-template-columns: 1fr 1fr;
                    grid-template-areas:
                        "firstName lastName"
                        "email email"
                        "password confirmPassword"
                        "submit submit";
                    grid-column-gap: 15rem; */
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    .join{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        label{
                            font-weight: 700;
                            margin-right: 3rem;
                        }
                        input {
                            width: 30rem;
                        }
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
                    }
                    .join{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        gap: var(--r3);
                    }
                    label{
                        font-size: var(--r1-5);
                        color: var(--bgBlack);
                        font-weight: 500;
                        margin-bottom: var(--r1-25);
                    } 
                    input{
                        padding: var(--r-75) var(--r2-5);
                        font-size: var(--r1-5);
                        outline: none;
                        margin-bottom: var(--r2);
                    }                       
                }
                input[type="submit"] {
                        background-color: var(--bgYellow);
                        border: none;
                        border-radius: var(--r1);
                        cursor: pointer;
                        font-size: var(--r1-5);
                        color: var(--bgVioletAdmin);
                        font-weight: 700;
                        letter-spacing: 0.1rem;
                        padding: var(--r1) var(--r3);
                    } 
        }
        }  
    }
`

