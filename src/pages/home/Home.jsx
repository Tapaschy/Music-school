import React from 'react';
import Slider from '../../components/Slider/Slider';
import { Helmet } from 'react-helmet-async';
import MusicGroups from '../music groups/MusicGroups';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MUSIC FAIRY || Home</title>
            </Helmet>
            <Slider></Slider>
            <MusicGroups></MusicGroups>
        </div>
    );
};

export default Home;