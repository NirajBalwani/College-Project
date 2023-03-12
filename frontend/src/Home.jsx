import React from "react";
import Advertisement from "./components/users/Advertisement";
import Footer from "./components/users/Footer";
import Hero from "./components/users/Hero";
import Navbar from './components/users/Navbar';
import TopDestinations from "./scenes/home/TopDestinations";
import TopSearch from "./scenes/home/TopSearch";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <Slider /> */}
            <Advertisement />
            <TopDestinations />
            {/* <Recommended /> */}
            <TopSearch />
            <Footer />
        </div>
    );
};

export default Home;
