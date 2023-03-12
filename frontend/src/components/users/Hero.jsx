import React from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../scenes/images/1.jpg'
import img2 from '../../scenes/images/2.jpg'
import img3 from '../../scenes/images/3.jpg'
import img4 from '../../scenes/images/4.jpg'
import img5 from '../../scenes/images/5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const Hero = () => {
    return (
        <Section>
            <Swiper modules={[Virtual]} slidesPerView={1} virtual>
                <SwiperSlide>
                    <div className="images">
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src={img2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src={img3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src={img4} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="images">
                        <img src={img5} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

        </Section>
    );
}

export default Hero;

{/* <video loop autoPlay muted> */ }
{/* <source src="../../public/assets/v1.mp4" type="video/mp4" /> */ }
{/* </video>  */ }

const Section = styled.section`
    height: 80vh;
    width: 100%;
    background-color: black;
    position: relative;
    .images{
        height: 100%;
        width: 100%;
        display: flex;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        video{
            height: 100%;
            width: 100vw;
            object-fit: cover;
            source{
                width: 100vw;
            }
        }
    }
    .buttons{
        position: absolute;
        z-index: 1099;
        padding: 3rem;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            height: 6rem;
            width: 6rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            border: 1px solid rgba(0,0,0,0.4);
            justify-content: center;
            cursor: pointer;
            background-color: rgba(0,0,0,0.4);
            .icon{
                font-size: 5rem;
                color: white;
            }
        }
        .right{
            height: 6rem;
            width: 6rem;
            cursor: pointer;
            border-radius: 50%;
            border: 1px solid rgba(0,0,0,0.4);
            background-color: rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{
                font-size: 5rem;
                color: white;
            }
        }
    }
`