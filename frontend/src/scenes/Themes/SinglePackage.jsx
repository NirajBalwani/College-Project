import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { Link, useNavigate } from "react-router-dom";
import TourIcon from '@mui/icons-material/Tour';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CancelIcon from '@mui/icons-material/Cancel';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SinglePackage = ({ singlePackage }) => {

    const [packageMore, setPackageMore] = useState(false);
    console.log(packageMore);

    const navigate = useNavigate();

    const setPackageMoreHandle = () => {
        if (singlePackage.details.length === 1) {
            navigate(`/package/${singlePackage._id}`, { state: { myParam: singlePackage.details[0].duration } });
            setPackageMore(!packageMore);
        }
        else {
            setPackageMore(!packageMore);
        }
    }

    const SingleDuration = (detail) => {
        let detailDuration = detail.detail
        return (
            <Link to={`/package/${singlePackage._id}`}>
                <div className="singleInfo">
                    <div className="left">
                        <label htmlFor="">{detailDuration.duration}</label>
                        <p>{detailDuration.duration.split("")[0]} Nights/{detailDuration.duration.split("")[3]} Days</p>
                    </div>
                    <div className="right">
                        <div className="info">
                            <p>₹{detailDuration.price}</p>
                            <h2>₹{detailDuration.price}</h2>
                            <h4>per person</h4>
                        </div>
                        <div className="btn">
                            <ChevronRightIcon className="icon" />
                        </div>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <Section packageMore={packageMore} onClick={setPackageMoreHandle} className="items" style={{ cursor: packageMore ? "default" : "pointer", marginBottom: "2rem" }}>
            {/* <div className="optionText">
                hello
            </div> */}
            <div className="textwrapper">
                <div className="mainContainer">
                    <div className="container">
                        <p><TourIcon /></p>
                        <p>Flex Package</p>
                    </div>
                    <div className="stars">
                        {
                            Array.from({ length: singlePackage?.stars }, (_, i) => (
                                <StarIcon style={{ fontSize: "var(--r1-25)", color: "var(--starColor)" }} />
                            ))
                        }
                    </div>
                </div>
                <Link to={`/package/${singlePackage._id}`}>
                    <div className="title">{singlePackage.name}</div>
                </Link>
            </div>
            <div className="imgparent">
                <img src={`http://localhost:7800/${singlePackage?.images[0]}`} alt="" />
            </div>
            <div className="logos">
                <div className="time">
                    3N/4D
                </div>
                <div className="logo">
                    <AirplanemodeActiveIcon className="icon" />
                    <p>2 Flights</p>
                </div>
                <div className="logo">
                    <ApartmentIcon className="icon" />
                    <p>1 Hotel</p>
                </div>
                <div className="logo">
                    <HikingIcon className="icon" />
                    <p>2 Activity</p>
                </div>
                <div className="logo">
                    <DirectionsCarIcon className="icon" />
                    <p>2 Transfers</p>
                </div>
            </div>
            <div className="textwrapper">
                <div className="days">
                    <h1>4N</h1>
                    <span>{singlePackage?.location?.city}</span>
                </div>

                <div className="description">
                    <ul>
                        <li>North Goa Sightseeing</li>
                        <li>North Goa Sightseeing</li>
                    </ul>
                    <div className="priceDetails">
                        <h4>₹{singlePackage.details[0].price} </h4>
                        <span>₹<p>{singlePackage.details[0].price}</p></span>
                        <p>per person</p>
                    </div>
                </div>
                <div className="tagline">
                    Amazing Choice! Booked 100+ Times in Last 15 days
                </div>

            </div>
            {packageMore && <div className="moreInfo" style={{ opacity: "1" }}>
                <div className="packageName">
                    <p>{singlePackage.name}</p>
                    <CancelIcon className="icon" onClick={() => {
                        setPackageMore(!packageMore)
                    }} />
                </div>
                <div className="infoContainer">
                    <h3>Please select an option</h3>
                    {
                        singlePackage?.details?.map((detail) => {
                            return (
                                <SingleDuration detail={detail} key={detail._id} />
                            )
                        })
                    }
                </div>
            </div>}
        </Section>
    );
}

export default SinglePackage;


const Section = styled.div`
    width: 37rem;
    height: max-content;
    position: relative;
    overflow: hidden;
    background-color: ${props => props.packageMore ? "rgba(0,0,0,0.7)" : "white"};
    /* box-shadow:  3px 3px 3px 3px rgba(100, 111, 111, 0.35); */
    /* border: 1px solid gray; */
    /* box-shadow: 0 0 50px #ccc;*/
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    /* box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%); */
    border-radius: var(--r-75);
    margin-left: var(--r2);
    border-bottom-left-radius: none;
    border-bottom-right-radius: none;
    margin-top: 2rem;
    /* .optionText{
        position: absolute;
        top: 1rem;
        right: 0;
    } */
    .moreInfo{
        width: 37rem;
        height: max-content;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgb(237,247,255);
        border-radius: 1.5rem;
        .packageName{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem 1.5rem;
            text-transform: capitalize;
            p{
                padding: 0;
                font-size: 1.7rem;
                font-weight: 900;
                color: rgb(74,74,74);
            }
            .icon{
                color: rgb(74,74,74);
                font-size: 1.8rem;
                cursor: pointer;
            }
        }
        .infoContainer{
            background-color: white;
            padding: 1.5rem 1.5rem;
            h3{
                font-size: 1.7rem;
                color: rgb(74,74,74);
                margin-bottom: 1rem;
            }
            .singleInfo{
                box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); 
                border-radius: .7rem;
                padding: .5rem 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1rem;
                cursor: pointer;
                .left{
                    label{
                        color: rgb(74,74,74);
                    }
                    p{
                        padding: 0;
                        color: rgb(74,74,74);
                        font-size: 1.7rem;
                        font-weight: 900;
                    }
                }
                .right{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: .7rem;
                    .info{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: flex-start;
                        p{
                            padding: 0;
                            color: rgb(74,74,74);
                            font-size: .8rem;
                            text-decoration: line-through;
                        }
                        h2{
                            padding: 0;
                            margin: 0;
                            font-size: 1.5rem;
                            font-weight: 900;
                            color: rgb(74,74,74);
                        }
                        h4{
                            font-size: 1rem;
                            color: rgb(74,74,74);
                        }
                    }   
                    .btn{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .icon{
                        font-size: 2.3rem;
                        color: #008cff;
                    }
                    }
                }
            }
        }
    }
    .logos{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 2rem 2rem;
        position: relative;
        .time{
            position: absolute;
            top: -1.8rem;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            right: 1.5rem;
            height: 2.7rem;
            width: 6rem;
            border-radius: 2rem;
            background-color: black;
        }
        .logo{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: .15rem;
            .icon{
                font-size: 2rem;
                color: rgb(74,74,74);
            }
            p{
                padding: 0;
                font-size: 1.2rem;
                font-weight: 500;
                color: black;
            }
        }
    }
    .imgparent {
      overflow: hidden;
      display: block;
      height: 50%;
      width: calc(100% - 2rem);
      border-radius: 0.7rem 0.7rem 0 0;
      margin: 0 1rem;
      /* position: relative; */
      img {
        overflow: hidden;
        display: block;
        width: 100%;
        height: 25rem;
        object-fit: cover;
        transition: transform 0.3s;
        filter: ${props => props.packageMore ? "brightness(30%)" : "brightness(100%)"};
        :hover {
          transform: ${props => props.packageMore ? "" : "scale(1.1)"};
          transform-origin: ${props => props.packageMore ? "" : "50% 50%"};
          cursor: pointer;
        }
      }
    }
    .textwrapper {
        .tagline{
            width: 37rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(234,245,255);
            margin: 0;
            border-bottom-left-radius: .4rem;
            border-bottom-right-radius: .4rem;
        }
      padding: var(--r1-5) 0;
      padding-top: .4rem;
      padding-bottom: 0;
      height: max-content;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      .mainContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 2rem;
        .container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .6rem;
        :nth-child(1){
            font-size: 3rem;
        }
      }
      }
      p{
        padding: 0;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 600;
        color: black;
      }
      .title {
        font-size: 1.80rem;
        font-weight: bold;
        margin-bottom: 7px;
        padding: 0 2rem;
        /* :hover {
          text-decoration: underline;
          cursor: pointer;
        } */
      }
      .days{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .4rem;
        padding: 0 2rem;
        margin-bottom: 2.5rem;
        h1{
            font-size: 1.5rem;
            color: red;
        }
        span{
            font-size: 1.5rem;
            color: rgb(74,74,74);
            text-transform: capitalize;
            font-weight: 900;
        }
      }
      .description{
        display: flex;
        align-items: center;
        padding: 0 2rem;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1.4rem;
        ul{
            display: flex;
            flex-direction: column;
            margin-left: 1.5rem;
            li{
                font-size: 1.4rem;
                color: rgb(74,74,74);
            }
        }
        .priceDetails{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-start;
            h4{ 
                text-decoration: line-through;
            }
            span{
                font-size: 2.4rem;
                letter-spacing: -.15rem;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .4rem;
                p{
                    font-size: 2.4rem;
                    letter-spacing: -.15rem;
                    font-weight: bold;
                }
            }
        }
    }
    }
`