import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from '../../../../components/users/Spinner'
import TimePicker from 'react-time-picker';
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
import { useCreatePackageMutation } from "../../../../store/services/packageService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdminSubAddPackage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [startTime, setStartTime] = useState('10:00');
    const [endTime, setEndTime] = useState('12:00');

    const handleStartTime = (newTime) => {
        setTime(newTime);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [createPackage, response] = useCreatePackageMutation();
    console.log(response);

    const [preview, setPreview] = useState({
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
    });

    const { data, isFetching } = useFetchAllThemesQuery();
    console.log(data);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [next, setNext] = useState(1);

    const [state, setState] = useState({
        name: "",
        starting_point: "",
        city: "",
        ending_point: "",
        state_name: "",
        destinations_covered: "",
        stars: 0,
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image6: "",
        image7: "",
        image8: "",
        theme_id: "",
        packageDuration: "2N/3D",
        price: 5000,
        transfer: 400,
        aname: "",
        nearby: "",
        aprice: "",
        astars: 1,
        atype: "HOTEL",
        image6: "",
        bairport: "",
        dairport: "",
        fno: "",
        stime: "",
        etime: "",
        price_1: 5000,
        transfer_1: 400,
        aname_1: "",
        nearby_1: "",
        aprice_1: "",
        astars_1: 1,
        atype_1: "HOTEL",
        bairport_1: "",
        dairport_1: "",
        fno_1: "",
        stime_1: "",
        etime_1: "",
        price_2: 5000,
        transfer_2: 400,
        aname_2: "",
        nearby_2: "",
        aprice_2: "",
        astars_2: 1,
        atype_2: "HOTEL",
        bairport_2: "",
        dairport_2: "",
        fno_2: "",
        stime_2: "",
        etime_2: ""
    });

    console.log(selectedDate);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('images', state.image1);
        formData.append('images', state.image2);
        formData.append('images', state.image3);
        formData.append('images', state.image4);
        formData.append('images', state.image5);
        formData.append('images', state.image6);
        formData.append('images', state.image7);
        formData.append('images', state.image8);
        formData.append('name', state.name);
        formData.append('starting_point', state.starting_point);
        formData.append('city', state.city);
        formData.append('ending_point', state.ending_point);
        formData.append('state_name', state.state_name);
        formData.append('destinations_covered', state.destinations_covered);
        formData.append('stars', state.stars);
        formData.append('price', state.price);
        formData.append('transfer', state.transfer);
        formData.append('aname', state.aname);
        formData.append('nearby', state.nearby);
        formData.append('aprice', state.aprice);
        formData.append('astars', state.astars);
        formData.append('atype', state.atype);
        formData.append('bairport', state.bairport);
        formData.append('dairport', state.dairport);
        formData.append('fno', state.fno);
        formData.append('selectedDate', selectedDate);
        formData.append('theme_id', state.theme_id);
        if (state.price_1 || state.transfer_1 || state.aname_1 || state.nearby_1 || state.aprice_1 || state.astars_1 || state.atype_1 || state.image6_1 || state.bairport_1 || state.dairport_1 || state.fno_1) {
            formData.append('price_1', state.price_1);
            formData.append('transfer_1', state.transfer_1);
            formData.append('aname_1', state.aname_1);
            formData.append('nearby_1', state.nearby_1);
            formData.append('aprice_1', state.aprice_1);
            formData.append('astars_1', state.astars_1);
            formData.append('atype_1', state.atype_1);
            formData.append('bairport_1', state.bairport_1);
            formData.append('dairport_1', state.dairport_1);
            formData.append('fno_1', state.fno_1);
        }
        if (state.price_2 || state.transfer_2 || state.aname_2 || state.nearby_2 || state.aprice_2 || state.astars_2 || state.atype_2 || state.image6_2 || state.bairport_2 || state.dairport_2 || state.fno_2) {
            formData.append('price_2', state.price_2);
            formData.append('transfer_2', state.transfer_2);
            formData.append('aname_2', state.aname_2);
            formData.append('nearby_2', state.nearby_2);
            formData.append('aprice_2', state.aprice_2);
            formData.append('astars_2', state.astars_2);
            formData.append('atype_2', state.atype_2);
            formData.append('bairport_2', state.bairport_2);
            formData.append('dairport_2', state.dairport_2);
            formData.append('fno_2', state.fno_2);
        }
        createPackage(formData);
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
        if (state.name && state.starting_point && state.city && state.ending_point && state.state_name && state.destinations_covered && state.stars && state.image1 && state.image2 && state.image3 && state.image4 && state.image5 && state.image6 && state.theme_id && state.price && state.transfer && state.aname && state.nearby && state.aprice && state.astars && state.atype && state.image6 && state.bairport && state.dairport && state.fno) {
            if (state.aname_1 || state.nearby_1 || state.aprice_1 || state.image7 || state.bairport_1 || state.dairport_1 || state.fno_1) {
                if (state.price_1 && state.transfer_1 && state.aname_1 && state.nearby_1 && state.aprice_1 && state.astars_1 && state.atype_1 && state.image7 && state.bairport_1 && state.dairport_1 && state.fno_1) {

                }
                else {
                    return true
                }
            }
            if (state.aname_2 || state.nearby_2 || state.aprice_2 || state.image8 || state.bairport_2 || state.dairport_2 || state.fno_2) {
                if (state.price_2 && state.transfer_2 && state.aname_2 && state.nearby_2 && state.aprice_2 && state.astars_2 && state.atype_2 && state.image8 && state.bairport_2 && state.dairport_2 && state.fno_2) {

                }
                else {
                    return true
                }
            }
            return false;
        }
        return true
    }

    useEffect(() => {
        if (response?.isSuccess) {
            dispatch(setSuccess("User added Successfully"));
            navigate("/dashboard/packages");
        }
        if (response?.isError) {
            toast.error("Try again");
        }
    }, [response?.isSuccess]);

    console.log(state);

    return (
        <>
            <Toaster
                toastOptions={{ style: { fontSize: "1.5rem" } }}
                position="top-center"
                reverseOrder={true}
            />
            {!isFetching ? <Section>
                <div className="add">
                    <Link to="/dashboard/packages">
                        <button>Back</button>
                    </Link>
                </div>
                <div className="main">
                    <div className="wrapper">
                        <h3>Add Package</h3>
                        <div className="info">
                            <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
                                <table>
                                    <tbody>
                                        {next === 1 && (
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
                                                        <label htmlFor="date">Date</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <DatePicker dateFormat="dd/MM/yyyy" selected={selectedDate} onChange={handleDateChange} />
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
                                                <div className="right">
                                                    <div className="hello" onClick={() => setNext(2)}>Next - 2</div>
                                                </div>
                                            </>
                                        )}
                                        {next === 2 && (
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
                                                        <select name="theme_id" onChange={handleChange}>
                                                            {data?.map((theme) => (
                                                                <option key={theme._id} value={theme._id}>{theme.name}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6}>
                                                        <div className="images-flex">
                                                            {preview.image1 && <img src={preview.image1} alt={preview.image1.name} />}
                                                            {preview.image2 && <img src={preview.image2} alt={preview.image2.name} />}
                                                            {preview.image3 && <img src={preview.image3} alt={preview.image3.name} />}
                                                            {preview.image4 && <img src={preview.image4} alt={preview.image4.name} />}
                                                            {preview.image5 && <img src={preview.image5} alt={preview.image5.name} />}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6}>
                                                        <div className="images-flex1">
                                                            {preview.image1 && <p>Image 1</p>}
                                                            {preview.image2 && <p>Image 2</p>}
                                                            {preview.image3 && <p>Image 3</p>}
                                                            {preview.image4 && <p>Image 4</p>}
                                                            {preview.image5 && <p>Image 5</p>}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <div className="left">
                                                    <div className="hello" onClick={() => setNext(1)}>1 - Back</div>
                                                </div>
                                                <div className="right">
                                                    <div className="hello" onClick={() => setNext(3)}>Next - 3</div>
                                                </div>
                                            </>
                                        )}
                                        {next === 3 && <tr>
                                            <td style={{ width: "25rem" }}>
                                                <b><label htmlFor="packageDuration" style={{ fontSize: "1.7rem", fontWeight: "900" }}>Select Package Duration</label></b>
                                            </td>
                                            <td>:</td>
                                            <td colSpan="5" style={{ textAlign: "start", display: "flex", paddingTop: "1.5rem", paddingLeft: "2.5rem" }}>
                                                <label htmlFor="2N/3D" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                    <input
                                                        type="radio"
                                                        name="packageDuration"
                                                        id="2N/3D"
                                                        value="2N/3D"
                                                        onChange={handleChange}
                                                        checked={state.packageDuration === "2N/3D"}
                                                    />2N/3D
                                                </label>
                                                <label htmlFor="3N/4D" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                    <input
                                                        type="radio"
                                                        name="packageDuration"
                                                        id="3N/4D"
                                                        onChange={handleChange}
                                                        value="3N/4D"
                                                        checked={state.packageDuration === "3N/4D"}
                                                    />3N/4D
                                                </label>
                                                <label htmlFor="5N/6D" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                                    <input
                                                        type="radio"
                                                        name="packageDuration"
                                                        id="5N/6D"
                                                        onChange={handleChange}
                                                        value="5N/6D"
                                                        checked={state.packageDuration === "5N/6D"}
                                                    />5N/6D
                                                </label>
                                            </td>
                                        </tr>}
                                        {state.packageDuration === "2N/3D" && <> {next === 3 && (
                                            <>

                                                <tr>
                                                    <td>
                                                        <label htmlFor="price">Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="price"
                                                            id="price"
                                                            value={state.price}
                                                            onChange={handleChange}
                                                            min="5000"
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="transfer">Transfer Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="transfer"
                                                            id="transfer"
                                                            value={state.transfer}
                                                            onChange={handleChange}
                                                            min="400"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6} style={{ backgroundColor: "lightblue", borderRadius: ".6rem", fontSize: "1.7rem", padding: "1rem", fontWeight: "900", textTransform: "uppercase" }}>Accomodation Details</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="aname">Accomodation Name</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="aname"
                                                            id="aname"
                                                            value={state.aname}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="nearby">Near By</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="nearby"
                                                            id="nearby"
                                                            value={state.nearby}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="aprice">Accomodation Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="aprice"
                                                            id="aprice"
                                                            value={state.aprice}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="astars">Stars</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="astars"
                                                            id="astars"
                                                            value={state.astars}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="atype">Accomodation Type</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <select name="atype" onChange={handleChange}>
                                                            <option value="HOTEL">HOTEL</option>
                                                            <option value="HOMESTAY">HOMESTAY</option>
                                                            <option value="VILLA">VILLA</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <label htmlFor="image6">Accommodation Image</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            style={{ padding: "0" }}
                                                            name="image6"
                                                            id="image6"
                                                            onChange={(e) => handleFileSelect(e, "image6")}
                                                        />
                                                    </td>
                                                </tr>
                                                <div className="left">
                                                    <div className="hello" onClick={() => setNext(2)}>2 - Back</div>
                                                </div>
                                                <div className="right">
                                                    <div className="hello" onClick={() => setNext(4)}>Next - 4</div>
                                                </div>
                                            </>
                                        )}
                                            {next === 4 && (
                                                <>
                                                    <tr>
                                                        <td colSpan={6} style={{ backgroundColor: "lightblue", borderRadius: ".6rem", fontSize: "1.7rem", padding: "1rem", fontWeight: "900", textTransform: "uppercase" }}>Flight Details</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="bairport">Boarding Airport</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="bairport"
                                                                id="bairport"
                                                                value={state.bairport}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <label htmlFor="dairport">Destination Airport</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="dairport"
                                                                id="dairport"
                                                                value={state.dairport}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="fno">Flight No</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="fno"
                                                                id="fno"
                                                                value={state.fno}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <label htmlFor="stime">Starting Time</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            {/* <TimePicker onChange={handleStartTime} value={startTime} /> */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="etime">Ending Time</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            {/* <TimePicker onChange={handleStartTime} value={startTime} /> */}
                                                        </td>
                                                    </tr>
                                                    <div className="left">
                                                        <div className="hello" onClick={() => setNext(3)}>3 - Back</div>
                                                    </div>
                                                    <div className="right">
                                                        <button disabled={check() ? true : false} style={{ opacity: check() ? '.7' : "1" }} className="hello" type="submit">Submit</button>
                                                    </div>
                                                </>
                                            )}</>}
                                        {state.packageDuration === "3N/4D" && <> {next === 3 && (
                                            <>

                                                <tr>
                                                    <td>
                                                        <label htmlFor="price_1">Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="price_1"
                                                            id="price_1"
                                                            value={state.price_1}
                                                            onChange={handleChange}
                                                            min="5000"
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="transfer_1">Transfer Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="transfer_1"
                                                            id="transfer_1"
                                                            value={state.transfer_1}
                                                            onChange={handleChange}
                                                            min="400"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6} style={{ backgroundColor: "lightblue", borderRadius: ".6rem", fontSize: "1.7rem", padding: "1rem", fontWeight: "900", textTransform: "uppercase" }}>Accomodation Details</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="aname_1">Accomodation Name</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="aname_1"
                                                            id="aname_1"
                                                            value={state.aname_1}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="nearby_1">Near By</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="nearby_1"
                                                            id="nearby_1"
                                                            value={state.nearby_1}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="aprice_1">Accomodation Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="aprice_1"
                                                            id="aprice_1"
                                                            value={state.aprice_1}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="astars_1">Stars</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="astars_1"
                                                            id="astars_1"
                                                            value={state.astars_1}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="atype_1">Accomodation Type</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <select name="atype_1" onChange={handleChange}>
                                                            <option value="HOTEL">HOTEL</option>
                                                            <option value="HOMESTAY">HOMESTAY</option>
                                                            <option value="VILLA">VILLA</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <label htmlFor="image7">Accommodation Image</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            style={{ padding: "0" }}
                                                            name="image7"
                                                            id="image7"
                                                            onChange={(e) => handleFileSelect(e, "image7")}
                                                        />
                                                    </td>
                                                </tr>
                                                <div className="left">
                                                    <div className="hello" onClick={() => setNext(2)}>2 - Back</div>
                                                </div>
                                                <div className="right">
                                                    <div className="hello" onClick={() => setNext(4)}>Next - 4</div>
                                                </div>
                                            </>
                                        )}
                                            {next === 4 && (
                                                <>
                                                    <tr>
                                                        <td colSpan={6} style={{ backgroundColor: "lightblue", borderRadius: ".6rem", fontSize: "1.7rem", padding: "1rem", fontWeight: "900", textTransform: "uppercase" }}>Flight Details</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="bairport_1">Boarding Airport</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="bairport_1"
                                                                id="bairport_1"
                                                                value={state.bairport_1}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <label htmlFor="dairport_1">Destination Airport</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="dairport_1"
                                                                id="dairport_1"
                                                                value={state.dairport_1}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="fno_1">Flight No</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="fno_1"
                                                                id="fno_1"
                                                                value={state.fno_1}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <label htmlFor="stime">Starting Time</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            {/* <TimePicker onChange={handleStartTime} value={startTime} /> */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="etime">Ending Time</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            {/* <TimePicker onChange={handleStartTime} value={startTime} /> */}
                                                        </td>
                                                    </tr>
                                                    <div className="left">
                                                        <div className="hello" onClick={() => setNext(3)}>3 - Back</div>
                                                    </div>
                                                    <div className="right">
                                                        <button disabled={check() ? true : false} style={{ opacity: check() ? '.7' : "1" }} className="hello" type="submit">Submit</button>
                                                    </div>
                                                </>
                                            )}</>}
                                        {state.packageDuration === "5N/6D" && <> {next === 3 && (
                                            <>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="price_2">Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="price_2"
                                                            id="price_2"
                                                            value={state.price_2}
                                                            onChange={handleChange}
                                                            min="5000"
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="transfer_2">Transfer Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="transfer_2"
                                                            id="transfer_2"
                                                            value={state.transfer_2}
                                                            onChange={handleChange}
                                                            min="400"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6} style={{ backgroundColor: "lightblue", borderRadius: ".6rem", fontSize: "1.7rem", padding: "1rem", fontWeight: "900", textTransform: "uppercase" }}>Accomodation Details</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="aname_2">Accomodation Name</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="aname_2"
                                                            id="aname_2"
                                                            value={state.aname_2}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="nearby_2">Near By</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="nearby_2"
                                                            id="nearby_2"
                                                            value={state.nearby_2}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="aprice_2">Accomodation Price</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="aprice_2"
                                                            id="aprice_2"
                                                            value={state.aprice_2}
                                                            onChange={handleChange}
                                                        // required pattern="^[2-9][0-9]{2}$|^1000$"
                                                        />
                                                    </td>
                                                    <td>
                                                        <label htmlFor="astars_2">Stars</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            name="astars_2"
                                                            id="astars_2"
                                                            value={state.astars_2}
                                                            onChange={handleChange}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="atype_2">Accomodation Type</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <select name="atype_2" onChange={handleChange}>
                                                            <option value="HOTEL">HOTEL</option>
                                                            <option value="HOMESTAY">HOMESTAY</option>
                                                            <option value="VILLA">VILLA</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <label htmlFor="image8">Accommodation Image</label>
                                                    </td>
                                                    <td>:</td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            style={{ padding: "0" }}
                                                            name="image8"
                                                            id="image8"
                                                            onChange={(e) => handleFileSelect(e, "image8")}
                                                        />
                                                    </td>
                                                </tr>
                                                <div className="left">
                                                    <div className="hello" onClick={() => setNext(2)}>2 - Back</div>
                                                </div>
                                                <div className="right">
                                                    <div className="hello" onClick={() => setNext(4)}>Next - 4</div>
                                                </div>
                                            </>
                                        )}
                                            {next === 4 && (
                                                <>
                                                    <tr>
                                                        <td colSpan={6} style={{ backgroundColor: "lightblue", borderRadius: ".6rem", fontSize: "1.7rem", padding: "1rem", fontWeight: "900", textTransform: "uppercase" }}>Flight Details</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="bairport_2">Boarding Airport</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="bairport_2"
                                                                id="bairport_2"
                                                                value={state.bairport_2}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <label htmlFor="dairport_2">Destination Airport</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="dairport_2"
                                                                id="dairport_2"
                                                                value={state.dairport_2}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="fno_2">Flight No</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                name="fno_2"
                                                                id="fno_2"
                                                                value={state.fno_2}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <label htmlFor="stime">Starting Time</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            {/* <TimePicker onChange={handleStartTime} value={startTime} /> */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label htmlFor="etime">Ending Time</label>
                                                        </td>
                                                        <td>:</td>
                                                        <td>
                                                            {/* <TimePicker onChange={handleStartTime} value={startTime} /> */}
                                                        </td>
                                                    </tr>
                                                    <div className="left">
                                                        <div className="hello" onClick={() => setNext(3)}>3 - Back</div>
                                                    </div>
                                                    <div className="right">
                                                        <button disabled={check() ? true : false} style={{ opacity: check() ? '.7' : "1" }} className="hello" type="submit">Submit</button>
                                                    </div>
                                                </>
                                            )}</>}
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

export default AdminSubAddPackage;

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
                    .left{
                        position: fixed;
                        bottom: 4.4rem;
                        left: 25rem;
                        .hello{
                            padding: 1rem 3rem;
                            background-color: var(--bgYellow);
                            color: black;
                            font-size: 1.4rem;
                            border-radius: .4rem;
                            cursor: pointer;
                            font-weight: 900;
                        }
                    }
                    .right{
                        position: fixed;
                        bottom: 4rem;
                        right: 10rem;
                        .hello{
                            padding: 1rem 3rem;
                            background-color: var(--bgYellow);
                            color: black;
                            font-size: 1.4rem;
                            border-radius: .4rem;
                            cursor: pointer;
                            font-weight: 900;
                        }
                    }
                    tr{
                        .newTD{

                        }
                        td{
                            label{
                                cursor: pointer;
                                input[type="radio"] {
                                    padding: 0;
                                    margin: 0;
                                    width: 2rem;
                                    cursor: pointer;
                                }
                            }
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
