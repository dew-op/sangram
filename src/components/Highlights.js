import React from 'react';
import Image from "next/image";
import highlights from "../../public/images/highlights.svg";

const Highlights = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-[#1D82C1] px-[4rem]">
            <div className="flex flex-col pt-[4rem] pb-[5rem]">
                <div className="font-bungeesh text-[56px] text-[#000000]">HIGHLIGHTS</div>
                <div className="font-bungeein text-[69px] text-[#ffffff]">SANGRAM-2020</div>
            </div>
            <div className="flex gap-16">
                <div className="flex flex-col bg-white rounded-xl justify-center w-[300px] pt-[2rem] pb-[0.5rem]">
                    <Image className="w-[250px] h-[250px] mx-auto mb-[0.5rem]" src={highlights} alt='highlights'/>
                    <div className="font-allura text-[#1D82C1] text-[28px] mx-auto">Athletics</div>
                </div>
                <div className="flex flex-col bg-white rounded-xl justify-center w-[300px] pt-[2rem] pb-[0.5rem]">
                    <Image className="w-[250px] h-[250px] mx-auto mb-[0.5rem]" src={highlights} alt='highlights'/>
                    <div className="font-allura text-[#1D82C1] text-[28px] mx-auto">Football</div>
                </div>
                <div className="flex flex-col bg-white rounded-xl justify-center w-[300px] pt-[2rem] pb-[0.5rem]">
                    <Image className="w-[250px] h-[250px] mx-auto mb-[0.5rem]" src={highlights} alt='highlights'/>
                    <div className="font-allura text-[#1D82C1] text-[28px] mx-auto">Badminton</div>
                </div>
                <div className="flex flex-col bg-white rounded-xl justify-center w-[300px] pt-[2rem] pb-[0.5rem]">
                    <Image className="w-[250px] h-[250px] mx-auto mb-[0.5rem]" src={highlights} alt='highlights'/>
                    <div className="font-allura text-[#1D82C1] text-[28px] mx-auto">Hockey</div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;