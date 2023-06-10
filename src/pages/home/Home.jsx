import React from 'react';
import Slider from '../../components/Slider/Slider';
import { Helmet } from 'react-helmet-async';
import MusicGroups from '../music groups/MusicGroups';
import ClassesSection from './ClassesSection';
import InstructorSection from './InstructorSection';

const Home = () => {


    return (
        <div>
            <Helmet>
                <title>MUSIC FAIRY || Home</title>
            </Helmet>
            <Slider></Slider>
            <InstructorSection></InstructorSection>
            <ClassesSection></ClassesSection>
            <MusicGroups></MusicGroups>
        </div>
    );
};

export default Home;