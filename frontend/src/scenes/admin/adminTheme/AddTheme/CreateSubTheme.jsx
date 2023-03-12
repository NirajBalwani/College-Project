import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAddThemeMutation } from '../../../../store/services/themeService'
import { setSuccess } from '../../../../store/reducers/globalReducer';
import { useDispatch } from 'react-redux';

const CreateSubTheme = () => {

    const navigate = useNavigate();

    const [themeServices, response] = useAddThemeMutation();
    console.log(response);

    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: '',
        image: '',
        description: ''
    })

    const check = () => {
        if (state.name && state.image && state.description) {
            return false;
        }
        return true
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleFileSelect = (event, inputName) => {
        const file = event.target.files[0];
        setState(prevState => ({ ...prevState, [inputName]: file }));
    };

    console.log(state)

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', state.image);
        formData.append('name', state.name)
        formData.append('description', state.description)
        themeServices(formData)
    }

    useEffect(() => {
        if (response?.isSuccess) {
            toast.success(response?.data?.msg);
            dispatch(setSuccess("Theme added Successfully"))
            navigate("/dashboard/theme")
        }
        if (response?.isError) {
            toast.error("Try again")
        }
    }, [response?.isSuccess]);

    return (
        <>
            <Toaster
                toastOptions={{ style: { fontSize: "1.5rem" } }}
                position="top-center"
                reverseOrder={true}
            />
            <Section>
                <div className="add">
                    <Link to="/dashboard/theme"><button>Back</button></Link>
                </div>
                <div className="main">
                    <h3>Create Theme</h3>
                    <div className="info">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                            autoComplete="off"
                        >
                            <label htmlFor="themeName">Theme Name</label>
                            <input type="text" placeholder='Enter Theme Name' name='name' id="name" value={state.name} onChange={handleChange} />
                            <label htmlFor="themeName">Description</label>
                            <input type="text" placeholder='Enter Description' name='description' id="description" value={state.description} onChange={handleChange} />
                            <label htmlFor="upload-theme">Upload File</label>
                            <input type="file" accept='.jpg, .jpeg, .png' id="upload-theme" onChange={(e) => handleFileSelect(e, 'image')} />
                            <input disabled={check() ? true : false} style={{ opacity: check() ? '.7' : "1" }} type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default CreateSubTheme;

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
        height: 60vh;
        width: 97%;
        background-color: var(--bgWhite);
        margin: var(--r3) var(--r2);
        border-radius: var(--r1);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--r2);
        padding: var(--r2) var(--r3);
        h3{
            font-size: var(--r2-5);
            font-weight: 700;
            color: var(--bgVioletAdmin);
        }
        .info{
            display: flex;
            flex-direction: column;
            gap: var(--r-75);
        form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: var(--r2);
            label{
                    font-size: var(--r1-5);
                    color: var(--bgBlack);
                    font-weight: 500;
                } 
            }
            
            input{
                    padding: var(--r-75) var(--r2-5);
                    font-size: var(--r1-5);
                    outline: none;
                }
                .input-error {
                    border: 2px solid red;
                    }
                    .error {
                    font-size: var(--r1-25);
                    padding: 0;
                    padding-bottom: var(--r-5);
                    color: red;
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
`

