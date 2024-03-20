import React from 'react';
import Image from "next/image";
import hero from '../../public/images/hero.svg';

const Homepage = () => {
    return (
        <div className="flex h-[80vh] w-full bg-black px-[4rem]">
            <div className="flex flex-col w-[50%] pt-16">
                <div className="font-bungeein text-[130px] text-[#FBFBFB]">SANGRAM</div>
                <div className="font-bungeesh text-[150px] text-[#0474BA]">2024</div>
                <div className="font-cabin text-[36px] text-[#FBFBFB]">An IIT Roorkee’s sports meet</div>
            </div>
            <div className="justify-center items-center w-[50%]">
                <Image className="w-[600px]" src={hero} alt="hero" />
            </div>
        </div>
    );
};

export default Homepage;