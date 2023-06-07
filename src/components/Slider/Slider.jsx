import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Slider = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/KX2hVDM/classical-acoustic-guitar-hands-musician-copy-space-169016-10979.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/7zY5Gwd/close-up-man-playing-acoustic-guitar-dark-with-stage-lighting-169016-14178.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/WfmgBZV/electronic-piano-interior-room-blurred-background-169016-20791.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/NWGKwS0/female-student-playing-violin-107420-64865.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/4t1JCLm/medium-shot-man-making-music-home-23-2149849374.jpg" />
            </div>
            <div>
                <img src="https://i.ibb.co/crtwK2c/closeup-man-playing-bass-guitar-169016-17307.jpg" />
            </div>
        </Carousel>
    );
};

export default Slider;