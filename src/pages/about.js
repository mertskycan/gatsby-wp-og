import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import AboutTwo from "../components/AboutTwo";
import Footer from "../components/Footer";
import TeamOne from "../components/TeamOne";
import VideoOne from "../components/VideoOne";
import BrandsTwo from "../components/BrandsTwo";
import TestimonialOne from "../components/TestimonialOne";
import CallToActionOne from "../components/CallToActionOne";

const AboutPage = () => {
    return (
        <Layout pageTitle="Kipso | About">
            <NavOne />
            <PageHeader title="About" />
            <AboutTwo />
            <TeamOne />
            <VideoOne />
            <BrandsTwo />
            <TestimonialOne />
            <CallToActionOne />
            <Footer />
        </Layout>
    );
};

export default AboutPage;
