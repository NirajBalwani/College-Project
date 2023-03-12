import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import '../home/top.css'
import { Link } from "react-router-dom";
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import TourIcon from '@mui/icons-material/Tour';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GridViewIcon from '@mui/icons-material/GridView';
import SinglePackage from "./SinglePackage";

const RegularTheme = ({ data, packages }) => {

    const [state, setState] = useState({
        starting: packages ? packages[1]?.starting_point : "",
        destination: packages ? packages[1]?.ending_point : ""
    })

    const handleChange = e => {
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Section>
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
            <div className="proImage">
                <img src={`http://localhost:7800/${data?.theme?.image}`} alt="" />
                <div className="container">
                    <h1>{data?.theme?.name}</h1>
                    <div className="totalPackages">
                        for All ({packages ? packages.length : 0})
                    </div>
                </div>
                <p>{data?.theme?.description}</p>
            </div>
            <div style={{ margin: "0 15rem", width: "calc(100% - 30rem)" }}>
                <Swiper modules={[Virtual]} slidesPerView={3} virtual>
                    {
                        packages?.map((singlePackage) => {
                            return (
                                <SwiperSlide key={singlePackage._id}>
                                    <SinglePackage singlePackage={singlePackage}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </Section>
    );
};

export default RegularTheme;

const Section = styled.section`
  display: flex;
  height: 145vh;
  background-color: var(--bgLightSkin);
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  /* gap: var(--r2); */
  width: 100%;
  .searchContainer{
    height: 10vh;
    width: 100%;
    background-color: rgb(10,34,61);
    position: sticky;
    .container{
        max-width: 80%;
        height: 10vh;
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
                }
                input{
                    border: none;
                    outline: none;
                    padding: .3rem .3rem;
                    font-size: 1.6rem;
                    font-weight: 500;
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
  .proImage{
    width: 100%;
    height: 35vh;
    margin-bottom: 2rem;
    position: relative;
    .container{
        .totalPackages{
            position: absolute;
            top: 6rem;
            margin-left: 50rem;
            font-size: 1.6rem;
            padding: .4rem 2rem;
            height: 3.5rem;
            width: 12rem;
            background-color: rgba(0,0,0,.4);
            border-radius: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(60%);
    }
    h1 {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 5rem;
        left: 0;
        font-size: var(--r4);
        margin-left: var(--r15);
        color: var(--bgWhite);
    }
    p{
        margin: 0;
        padding: 0;
        position: absolute;
        top: 12rem;
        left: 0;
        font-size: var(--r1-75);
        font-weight: 700;
        margin-left: var(--r15);
        margin-right: var(--r10);
        color: var(--bgWhite);
    }
  }
`;
