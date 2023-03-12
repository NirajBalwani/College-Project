import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from '../../../../components/users/Spinner'
import {
    useFetchAllThemesQuery,
    useFetchOneThemeQuery,
    useUpdateThemeMutation,
    useUpdateThemeNameMutation,
} from "../../../../store/services/themeService";
import { setSuccess } from "../../../../store/reducers/globalReducer";
import {
    useCreateUserMutation,
    useGetSingleUserQuery,
    useUpdateUserMutation,
} from "../../../../store/services/adminUserService";
import { useCreatePackageMutation, useFetchOnePackageQuery, useUpdatePackageMutation } from "../../../../store/services/packageService";

const AdminSubEditPackage = () => {

    const { data, isFetching } = useFetchAllThemesQuery();
    const [updatePackage, response] = useUpdatePackageMutation();
    console.log(data);

    const [state, setState] = useState({
        name: "",
        starting_point: "",
        city: "",
        ending_point: "",
        state_name: "",
        accommodations: "",
        destinations_covered: "",
        stars: 0,
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        theme_id: ""
    });

    const { id } = useParams();
    const { data: data1, isFetching: isFetching1 } = useFetchOnePackageQuery(id);
    console.log(data1);

    let themeId = ""
    let theme = ""

    useEffect(() => {
        setState(prev => ({ ...prev, ['name']: data1?.package1?.name }))
        setState(prev => ({ ...prev, ['starting_point']: data1?.package1?.starting_point }))
        setState(prev => ({ ...prev, ['city']: data1?.package1?.location?.city }))
        setState(prev => ({ ...prev, ['ending_point']: data1?.package1?.ending_point }))
        setState(prev => ({ ...prev, ['state_name']: data1?.package1?.location?.state_name }))
        setState(prev => ({ ...prev, ['accommodations']: data1?.package1?.accommodations }))
        setState(prev => ({ ...prev, ['destinations_covered']: data1?.package1?.destinations_covered }))
        setState(prev => ({ ...prev, ['stars']: data1?.package1?.stars }))

    }, [data1?.package1])

    const [preview, setPreview] = useState({
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [next, setNext] = useState(false);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        // formData.append('images', state.image1);
        // formData.append('images', state.image2);
        // formData.append('images', state.image3);
        // formData.append('images', state.image4);
        // formData.append('images', state.image5);
        formData.append('name', state.name);
        formData.append('destinations_covered', state.destinations_covered);
        formData.append('accommodations', state.accommodations);
        formData.append('stars', state.stars);
        formData.append('state_name', state.state_name);
        formData.append('starting_point', state.starting_point);
        formData.append('ending_point', state.ending_point);
        formData.append('city', state.city);
        formData.append('theme_id', state.theme_id);
        formData.append('id', id);
        if (state.image1) {
            formData.append('images', state.image1);
            formData.append('image1path', data1?.package1?.images[0])
        }
        if (state.image2) {
            formData.append('images', state.image2);
            formData.append('image2path', data1?.package1?.images[1])
        }
        if (state.image3) {
            formData.append('images', state.image3);
            formData.append('image3path', data1?.package1?.images[2])
        }
        if (state.image4) {
            formData.append('images', state.image4);
            formData.append('image4path', data1?.package1?.images[3])
        }
        if (state.image5) {
            formData.append('images', state.image5);
            formData.append('image5path', data1?.package1?.images[4])
        }
        // if (state.image2) formData.append('images', state.image2);
        // if (state.image3) formData.append('images', state.image3);
        // if (state.image4) formData.append('images', state.image4);
        // if (state.image5) formData.append('images', state.image5);
        console.log(state);
        console.log("hello", id);
        updatePackage(formData)
    };

    const handleFileSelect = (event, inputName) => {
        const file = event.target.files[0];
        setState(prevState => ({ ...prevState, [inputName]: file }));

        const selectedFile = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(prevFile => ({ ...prevFile, [inputName]: reader.result }));
        }
        reader.readAsDataURL(selectedFile);
    };

    const check = () => {
        if (state.name && state.starting_point && state.city && state.ending_point && state.state_name && state.accommodations && state.destinations_covered && state.stars) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (response?.isSuccess) {
            dispatch(setSuccess("Package Updated Successfully"));
            navigate("/dashboard/packages");
            setTimeout(() => {
                dispatch(clearMessage())
            }, 3000);
        }
        if (response?.isError) {
            toast.error("Try again");
        }
    }, [response?.isSuccess]);

    console.log(state);

    return (
        <>
            {!isFetching ? <Section>
                <div className="add">
                    <Link to="/dashboard/packages">
                        <button>Back</button>
                    </Link>
                </div>
                <div className="main">
                    <div className="wrapper">
                        <h3>Update Package</h3>
                        <div className="info">
                            <form onSubmit={(e) => handleSubmit(e)} autoComplete="off" encType="multipart/form-data">
                                <table>
                                    <tbody>
                                        {!next && (
                                            <>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="name">Package Name</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Package Name"
                                                            name="name"
                                                            id="name"
                                                            value={state.name}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="starting_point">Starting Point</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Starting Location"
                                                            name="starting_point"
                                                            id="starting_point"
                                                            value={state.starting_point}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="city">City</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter City"
                                                            name="city"
                                                            id="city"
                                                            value={state.city}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="ending_point">Ending Point</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Ending Point"
                                                            name="ending_point"
                                                            id="ending_point"
                                                            value={state.ending_point}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="state_name">State</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter State Name"
                                                            name="state_name"
                                                            id="state_name"
                                                            value={state.state_name}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="accommodations">Accommodations</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="Possible Accommodations"
                                                            name="accommodations"
                                                            id="accommodations"
                                                            value={state.accommodations}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="destinations_covered">
                                                            Destinations Included
                                                        </label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            placeholder="Main Destinations Covered"
                                                            name="destinations_covered"
                                                            id="destinations_covered"
                                                            value={state.destinations_covered}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="image1">Image 1</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            style={{ padding: "0" }}
                                                            name="image1"
                                                            id="image1"
                                                            capture="environment"
                                                            onChange={(e) => handleFileSelect(e, "image1")}
                                                        />
                                                        {/* <p>{state.image1.name}</p>
                                                        {preview.image1 && <img src={preview.image1} alt={preview.image1.name} width="40px" height="40px" />} */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="stars">Stars</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            placeholder="Enter Stars of Package"
                                                            name="stars"
                                                            id="stars"
                                                            value={state.stars}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="image2">Image 2</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            name="image2"
                                                            style={{ padding: "0" }}
                                                            id="image2"
                                                            onChange={(e) => handleFileSelect(e, "image2")}
                                                        />
                                                        {/* <p>{state.image2.name}</p> */}
                                                    </td>
                                                </tr>
                                                <div className="container">
                                                    <button onClick={() => setNext(true)}>Next</button>
                                                </div>
                                            </>
                                        )}
                                        {next && (
                                            <>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="image3">Image 3</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            style={{ padding: "0" }}
                                                            name="image3"
                                                            id="image3"
                                                            onChange={(e) => handleFileSelect(e, "image3")}
                                                        />
                                                        {/* <p>{state.image3.name}</p> */}
                                                    </td>
                                                    <td>
                                                        <label htmlFor="image5">Image 5</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            style={{ padding: "0" }}
                                                            name="image5"
                                                            id="image5"
                                                            onChange={(e) => handleFileSelect(e, "image5")}
                                                        />
                                                        {/* <p>{state.image5.name}</p> */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="image4">Image 4</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            style={{ padding: "0" }}
                                                            name="image4"
                                                            id="image4"
                                                            onChange={(e) => handleFileSelect(e, "image4")}
                                                        />
                                                        {/* <p>{state.image4.name}</p> */}
                                                    </td>
                                                    <td>
                                                        <label htmlFor="theme_id">Choose theme</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <select name="theme_id" defaultValue={data1?.package1?.theme_id} onChange={handleChange}>
                                                            {data?.map((theme) => (
                                                                <option key={theme._id} value={theme._id}>{theme.name}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6}>
                                                        <div className="images-flex">
                                                            {preview.image1 ? <img src={preview.image1} alt={preview.image1.name} /> : <img src={`http://localhost:7800/${data1?.package1?.images[0]}`} />}
                                                            {preview.image2 ? <img src={preview.image2} alt={preview.image2.name} /> : <img src={`http://localhost:7800/${data1?.package1?.images[1]}`} />}
                                                            {preview.image3 ? <img src={preview.image3} alt={preview.image3.name} /> : <img src={`http://localhost:7800/${data1?.package1?.images[2]}`} />}
                                                            {preview.image4 ? <img src={preview.image4} alt={preview.image4.name} /> : <img src={`http://localhost:7800/${data1?.package1?.images[3]}`} />}
                                                            {preview.image5 ? <img src={preview.image5} alt={preview.image5.name} /> : <img src={`http://localhost:7800/${data1?.package1?.images[4]}`} />}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6}>
                                                        <div className="images-flex1">
                                                            <p>Image 1</p>
                                                            <p>Image 2</p>
                                                            <p>Image 3</p>
                                                            <p>Image 4</p>
                                                            <p>Image 5</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <div className="container">
                                                    <button disabled={check() ? true : false} style={{ opacity: check() ? '.7' : "1" }} className="hello1" type="submit">Submit</button>
                                                </div>
                                                <div className="container">
                                                    <div className="hello" onClick={() => setNext(false)}>Back</div>
                                                </div>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </Section> : <div style={{ marginTop: "2rem", flex: "7" }}><Spinner /></div>}
        </>
    );
};

export default AdminSubEditPackage;

const Section = styled.div`
  flex: 7;
  background-color: var(--bgVioletAdmin);
  height: 100%;
  .add {
    margin: var(--r2) var(--r2);
    height: var(--r7);
    width: 97%;
    background-color: var(--bgWhite);
    display: flex;
    border-radius: var(--r-75);
    align-items: center;
    button {
      background-color: var(--bgYellow);
      padding: var(--r1-25) var(--r3);
      font-size: var(--r1-75);
      font-weight: 700;
      color: var(--bgVioletAdmin);
      border: none;
      margin-left: var(--r2);
      border-radius: var(--r-75);
      cursor: pointer;
      &:hover {
        box-shadow: -2px -1px 30px -2px rgba(0, 0, 0, 0.48);
        -webkit-box-shadow: -2px -1px 30px -2px rgba(0, 0, 0, 0.48);
        -moz-box-shadow: -2px -1px 30px -2px rgba(0, 0, 0, 0.48);
      }
    }
  }
  .main {
    height: 72.6vh;
    width: 97%;
    background-color: var(--bgWhite);
    margin: var(--r1-5) var(--r2);
    border-radius: var(--r1);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--r2);
    padding: var(--r2) var(--r3);
    .preview {
      /* margin-right: var(--r60); */
      margin-top: var(--r20);
      img {
        width: 30rem;
        height: 14rem;
        object-fit: cover;
        border-radius: var(--r1-25);
      }
    }
    .wrapper {
      gap: var(--r2);
      width: 100%;
      h3 {
        font-size: var(--r2-5);
        font-weight: 700;
        color: var(--bgVioletAdmin);
        margin-bottom: var(--r2);
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: var(--r-75);
        width: 100%;
        form {
            table{
                width: 100%;
                tbody{
                    .container{
                        position: relative;
                        button{
                            position: absolute;
                            right: -100rem;
                            background-color: var(--bgLightAdmin);
                            border: none;
                            border-radius: var(--r1);
                            cursor: pointer;
                            font-size: var(--r1-5);
                            color: var(--bgWhite);
                            font-weight: 700;
                            letter-spacing: 0.1rem;
                            padding: var(--r1) var(--r3);
                        }
                        .hello{
                            margin-top: 1.5rem;
                            margin-left: 5rem;
                            width: max-content;
                            background-color: var(--bgLightAdmin);
                            border: none;
                            border-radius: var(--r1);
                            cursor: pointer;
                            font-size: var(--r1-5);
                            color: var(--bgWhite);
                            font-weight: 700;
                            letter-spacing: 0.1rem;
                            padding: var(--r1) var(--r3);
                        }
                        .hello1{
                            margin-top: 1.5rem;
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
                    tr{
                        td{
                            .images-flex{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                gap: 1rem;
                                img{
                                    :first-of-type{
                                        border-top-left-radius: 2rem;
                                        border-bottom-left-radius: 2rem;
                                    }
                                    :last-of-type{
                                        border-top-right-radius: 2rem;
                                        border-bottom-right-radius: 2rem;
                                    }
                                    width: 21rem;
                                    height: 21rem;
                                    object-fit: cover;
                                }
                            }
                            .images-flex1{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                gap: 17.7rem;
                                p{
                                    font-size: 1.4rem;
                                    font-weight: 700;
                                }
                            }
                            p{
                                padding: 0;
                                margin: 0;
                                font-size: 1.3rem;
                                color: black;
                            }
                            :nth-child(2) {
                                font-size: 2rem;
                            }
                            :nth-child(5) {
                                font-size: 2rem;
                            }
                            :nth-child(3) {
                                text-align: center;
                            }
                            :last-of-type{
                                text-align: center;
                            }
                            input{
                                margin-top: 1.3rem;
                            }
                            select{
                                width: 30rem;
                                padding: 1rem 2rem;
                                height: 4rem;
                                background-color: white;
                                color: black;
                                border-radius: 1rem;
                            }
                            padding-right: 2rem;
                        }
                    }
                }
            }
          label {
            font-weight: 700;
            margin-right: 3rem;
          }
          input {
            width: 30rem;
          }
          .join {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: var(--r3);
          }
          label {
            font-size: var(--r1-5);
            color: var(--bgBlack);
            font-weight: 500;
            margin-bottom: var(--r1-25);
          }
          input {
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
`;
