import React from 'react';
import styled from 'styled-components';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {

    return (
        <div className='mainColor'>
            <Foot>
                <div className="footerItem">
                    <h2 className="footerItemHeading">Support</h2>
                    <ul>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Our COVID-19 Response</a></li>
                        <li><a href="#">Cancellation options</a></li>
                        <li><a href="#">Safety information</a></li>
                    </ul>
                </div>
                <div className="footerItem">
                    <h2 className="footerItemHeading">Company</h2>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Community Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms of service</a></li>
                    </ul>
                </div>
                <div className="footerItem">
                    <h2 className="footerItemHeading">Contact</h2>
                    <ul>
                        <li><a href="#">Partnership</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Get in touch</a></li>
                    </ul>
                </div>
                <div className="footerItem">
                    <h2 className="footerItemHeading">Social</h2>
                    <div className="icons">
                        <div className="icon" style={{ backgroundColor: "rgb(61, 82, 166)" }}><FaFacebookF className='colors' /></div>
                        <div className="icon" style={{ backgroundColor: "rgb(88, 177, 247)" }}><BsTwitter className='colors' /></div>
                        <div className="icon" style={{ backgroundColor: "rgb(217, 73, 140)" }}><GrInstagram className='colors' /></div>
                        <div className="icon" style={{ backgroundColor: "rgb(246, 45, 58)" }}><IoLogoYoutube className='colors' /></div>
                    </div>
                </div>
            </Foot>
            <hr />
            <div className="footerlast">
                <p>© Copyright Traveler 2022</p>
            </div>
        </div>
    );
}

export default Footer;

const Foot = styled.footer`
    height: max-content;
    width: 88vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 3rem 10rem;
    margin-bottom: 3rem;
    .footerItem{
        .footerItemHeading{
            font-size: 3rem;
            margin-bottom: 4rem;
            font-weight: 600;
            color: #232323;
        }
        flex:1;
        ul{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 0;
            margin: 0;
            li {
                list-style-type: none;
                a{
                    color: #727272;
                    font-size: 2rem;
                    text-decoration: none;
                }
            }
        }
        .icons{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;
            .icon{
                width: 40px;
                height: 40px;
                background-color: red;
                border-radius: 50%;
                display: flex;
                align-items: center;
                cursor: pointer;
                justify-content: center;
                .colors{
                    color: white;
                    font-size: 2rem;
                }
            }
        }
    }
`

