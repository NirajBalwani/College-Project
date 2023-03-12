import React from 'react';
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "./top.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const Recommended = () => {
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
            slidesPerGroup: 2
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
            <Swiper
                slidesPerView={5}
                slideNextClass=".arrow-right"
                slidePrevClass=".arrow-left"
                slidesPerGroup={5}
                slidesPerGroupSkip={5}
                breakpoints={sliderSettings}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="item">
                        <div className="img">
                            <img src="../../public/assets/topdestination/t2.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t12.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t11.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t1.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t3.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t8.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t7.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
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
                            <img src="../../public/assets/topdestination/t4.jpg" loading='lazy' alt="" />
                        </div>
                        <div className="text">
                            <h3>New Delhi</h3>
                            <p>13 Packages</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </Section>
    );
}

export default Recommended;
const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 5rem 0;
    height: 60vh;
    h1{
        font-size: 4rem;
        color: #393a3b;
    }
`