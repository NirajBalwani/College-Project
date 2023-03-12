import React from "react";
import styled from "styled-components";
import "./top.css";
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import 'swiper/css';
import 'swiper/css/virtual';

// import required modules
const TopDestinations = () => {
    const sliderSettings = {
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 1,
            spaceBetween: 30,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroupSkip: 2,
            slidesPerGroup: 2,
        },
        1024: {
            slidesPerView: 5,
            slidesPerGroupSkip: 5,
            slidesPerGroup: 5,
            spaceBetween: 10,
        },
    };

    return (
        <Section>
            <h1>Top Destination</h1>
            <div className="swipered">
                <Swiper modules={[Virtual]} slidesPerView={6} virtual>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img2}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img3}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img4}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img5}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img">
                                <img
                                    src={img1}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="text">
                                <h3>New Delhi</h3>
                                <p>13 Packages</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Section>
    );
};

export default TopDestinations;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: var(--r5) 0;
  height: 60vh;
  background-color: var(--bgLightSkin);
  h1 {
    font-size: var(--r4);
    color: var(--bgBlack);
  }
  .swipered{
    height: 100%;
    width: 100%;
    margin: 0 var(--r10);
  }
  .item {
    height: 100%;
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    cursor: pointer;
    overflow: hidden;
    background-color: var(--bgLightSkin);
    .img {
      width: var(--r18);
      height: var(--r18);
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 50%;
        transition: transform 0.5s;
        &:hover {
          transform: scale(1.1);
          transform-origin: 50% 50%;
          cursor: pointer;
        }
      }
    }
    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3{
            color: var(--bgBlack);
            font-size: var(--r2);
        }
        p{
            color: var(--bgBlack);
            font-size: var(--r1-5);
        }
    }
  }
`;
