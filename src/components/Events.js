import React from 'react';
import Image from "next/image";
import football from "../../public/images/football.svg";
import cricket from "../../public/images/cricket.svg";
import volleyball from "../../public/images/volleyball.svg";
import athletics from "../../public/images/athletics.svg";
import hockey from "../../public/images/hockey.svg";
import basketball from "../../public/images/basketball.svg";

const Events = () => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-[#FECA85] px-[4rem]">
            <div className="flex flex-col pt-[4rem] pb-[2rem]">
                <div className="font-bungeesh text-[56px] text-[#0474BA]">EVENTS IN</div>
                <div className="font-bungeein text-[69px] text-[#0474BA]">SANGRAM</div>
            </div>
            <div className="flex gap-12">
                <div className="flex flex-col gap-6 justify-center items-center w-[190px]">
                    <Image className="w-[190px]" src={football} alt='football'/>
                    <div className="font-cabin font-bold text-[#0474BA] text-[24px]">Football</div>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center w-[190px]">
                    <Image className="w-[190px]" src={cricket} alt='cricket'/>
                    <div className="font-cabin font-bold text-[#0474BA] text-[24px]">Cricket</div>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center w-[190px]">
                    <Image className="w-[190px]" src={volleyball} alt='volleyball'/>
                    <div className="font-cabin font-bold text-[#0474BA] text-[24px]">Volleyball</div>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center w-[190px]">
                    <Image className="w-[190px]" src={athletics} alt='athletics'/>
                    <div className="font-cabin font-bold text-[#0474BA] text-[24px]">Athletics</div>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center w-[190px]">
                    <Image className="w-[190px]" src={hockey} alt='hockey'/>
                    <div className="font-cabin font-bold text-[#0474BA] text-[24px]">Hockey</div>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center w-[190px]">
                    <Image className="w-[190px]" src={basketball} alt='basketball'/>
                    <div className="font-cabin font-bold text-[#0474BA] text-[24px]">Basketball</div>
                </div>
            </div>
            <div className="flex ml-[80vw] my-[5rem]">
                <button className="px-10 py-3 w-fit rounded-3xl border-[4px] border-[#0474BA] font-cabin italic font-semibold text-[#0474BA] text-[16px]">Explore All</button>
            </div>
        </div>
    );
};

export default Events;