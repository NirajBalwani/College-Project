import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/users/Navbar";
import Spinner from "../../components/users/Spinner";
import { useFetchOnePackageQuery } from "../../store/services/packageService";
import PackageDetail from './PackageDetail'
import GridViewIcon from '@mui/icons-material/GridView';

const Package = () => {

        const { id } = useParams();
        const { data, isFetching } = useFetchOnePackageQuery(id)
        console.log(data);

        const { isPackagePhoto } = useSelector((state) => state.toggleReducer);
        const dispatch = useDispatch();

        const [state, setState] = useState({
            starting: data?.package1?.starting_point ? data?.package1?.starting_point : "",
            destination: data?.package1?.starting_point ? data?.package1?.ending_point : ""
        })

        useEffect(() => {
            if (data) {
                setState(prev => ({ ...prev, ['starting']: data?.package1?.starting_point }))
                setState(prev => ({ ...prev, ['destination']: data?.package1?.ending_point }))
            }
        }, [data]);

        const handleChange = e => {
            setState(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
        };

        return (
            <Section isPackagePhoto={isPackagePhoto}>
                {!isPackagePhoto && <><Navbar />
                    <div className="searchContainer">
                        <div className="container">
                            <div className="left">
                                <div className="box">
                                    <label htmlFor="">Starting From</label>
                                    <input type="text" name="starting" value={state.starting} onChange={(e) => handleChange(e)} disabled />
                                </div>
                                <div className="box">
                                    <label htmlFor="">Going to</label>
                                    <input type="text" name="destination" value={state.destination} disabled />
                                </div>
                                <div className="box">
                                    <label htmlFor="">Starting date</label>
                                    <input type="text" placeholder="Select" disabled />
                                </div>
                                <button>Search</button>
                            </div>
                            <div className="right">
                                <GridViewIcon style={{ fontSize: "2.5rem", fontStyle: "italic" }} />
                                Explore
                            </div>
                        </div>
                    </div>
                </>}
                {isFetching ? <div style={{ marginTop: "3rem" }}>
                    <Spinner />
                </div> : <PackageDetail data={data?.package1} />}
            </Section>
        );
    };

    export default Package;

    const Section = styled.div`
    .searchContainer{
    height: 10vh;
    width: 100%;
    background-color: rgb(10,34,61);
    position: sticky;
    top: 0px;
    .container{
        max-width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
            .box{
                border-radius: .4rem;
                background-color: rgba(255,255,255,.1);
                height: 100%;
                width: max-content;
                width: 20rem;
                padding: .3rem 1rem;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: .3rem;
                label{
                    color: rgb(0,140,255);
                    font-size: 1.2rem;
                    text-transform: uppercase;
                    font-weight: 700;
                }
                input{
                    border: none;
                    outline: none;
                    font-size: 1.9rem;
                    font-weight: 100;
                    background-color: rgba(255,255,255,0);
                    color: white;
                }
            }
            button{
                font-size: 2rem;
                padding: 1rem 5rem;
                border-radius: 3rem;
                font-weight: 900;
                cursor: pointer;
                text-transform: uppercase;
                color: white;
                margin-left: 2rem;
                background-image: linear-gradient(93deg,#53b2fe,#065af3),linear-gradient(93deg,#53b2fe,#065af3);
            }
        }
        .right{
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            color: white;
            cursor: pointer;
        }
    }
  }
`


