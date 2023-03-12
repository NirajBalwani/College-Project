import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useFetchOneThemeQuery } from '../../../../store/services/themeService';
import { setSuccess } from '../../../../store/reducers/globalReducer';
import { useUpdateThemeNameMutation, useUpdateThemeMutation } from '../../../../store/services/themeService';

const EditSubTheme = () => {

    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [updateThemeName, response] = useUpdateThemeNameMutation();
    const [updateTheme, response1] = useUpdateThemeMutation();

    const navigate = useNavigate();
    const { id } = useParams();

    const { data, isFetching } = useFetchOneThemeQuery(id);
    console.log(data);

    const dispatch = useDispatch();

    const [state, setState] = useState({
        name: '',
        image: '',
        description: ''
    })

    const check = () => {
        if (state.name && state.description) {
            if (imagePreview) {
                if (state.name && state.description) {
                    return false;
                } else {
                    return true;
                }
            }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (state.image) {
            console.log(data?.theme[0].image);
            formData.append('deleteFilePath', data?.theme[0].image)
            formData.append('id', id)
            formData.append('name', state.name)
            formData.append('image', state.image);
            formData.append('description', state.description);
            console.log(state.image);
            updateTheme(formData);
        }
        else {
            formData.append('id', id)
            formData.append('name', state.name)
            formData.append('description', state.description)
            const data = {
                id: id,
                name: state.name,
                description: state.description
            }
            updateThemeName(data);
        }
    }

    useEffect(() => {
        if (response?.isSuccess || response1.isSuccess) {
            dispatch(setSuccess("Theme has been Updated Successfully"))
            navigate("/dashboard/theme")
        }
        if (response?.isError) {
            toast.error("Try again")
        }
    }, [response?.isSuccess, response1.isSuccess]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setState(prevState => ({ ...prevState, ['image']: file }));

        const selectedFile = event.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
            setImagePreview(reader.result);
            console.log(reader.result);
        }
    }

    useEffect(() => {
        if (data?.theme) {
            setState(prev => ({ ...prev, name: data?.theme[0]?.name }))
            setState(prev => ({ ...prev, description: data?.theme[0]?.description }))
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
                    <Link to="/dashboard/theme"><button>Back</button></Link>
                </div>
                <div className="main">
                    <div className="wrapper">
                        <h3>Update Theme</h3>
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
                                <input type="file" accept='.jpg, .jpeg, .png' id="upload-theme" onChange={(e) => handleImageUpload(e)} />
                                <input disabled={check() ? true : false} style={{ opacity: check() ? '.7' : "1" }} type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                    <div className="preview">
                        {
                            imagePreview ? <img src={imagePreview} alt="Preview" /> : data && <img src={`http://localhost:7800/${data?.theme[0]?.image}`} alt="" />
                        }
                    </div>
                </div>
            </Section>
        </>
    );
}

export default EditSubTheme;

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
        align-items: center;
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
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--r2);
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
    }
`

