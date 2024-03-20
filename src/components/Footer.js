import React from 'react';
import footer1 from '../../public/images/iit-roorkee-logowhite 1.svg';
import footer2 from '../../public/images/footerlogo.svg';
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col h-[60vh] w-full bg-[#FFFFFF] px-[4rem]">
                <div className="flex flex-col pt-[4rem] pb-[5rem]">
                    <div className="font-bungeesh text-[56px] text-[#000000]">CONTACT</div>
                    <div className="font-bungeein text-[69px] text-[#0474BA]">TEAM SANGRAM</div>
                </div>
                <div className="flex text-[#0474BA] gap-[10rem] text-[20px]">
                    <div className="flex flex-col">
                        <div className="font-cabin font-bold">Name One</div>
                        <div className="font-cabin ">Designation</div>
                        <div className="font-cabin italic">+91 -8877887788</div>
                        <div className="font-cabin italic">nameone@iitr.ac.in</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-cabin font-bold">Name One</div>
                        <div className="font-cabin ">Designation</div>
                        <div className="font-cabin italic">+91 -8877887788</div>
                        <div className="font-cabin italic">nameone@iitr.ac.in</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-cabin font-bold">Name One</div>
                        <div className="font-cabin ">Designation</div>
                        <div className="font-cabin italic">+91 -8877887788</div>
                        <div className="font-cabin italic">nameone@iitr.ac.in</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-[40vh] w-[100vw] bg-[#1A1A1A] px-[4rem]">
                <div className="flex gap-[15rem] text-white py-[3rem]">
                    <div className="flex flex-col gap-3">
                        <div className="font-cabin font-bold text-[18px] pb-1 text-center">Quick Links</div>
                        <div className="font-cabin">About Sangram</div>
                        <div className="font-cabin">All Events</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="font-cabin font-bold text-[18px] pb-1 pl-4r">An Event By</div>
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-4 text-center justify-between w-[120px] items-center">
                                <div>
                                    <Image className="w-[120px] h-fit" src={footer1} alt='footer1' />
                                </div>
                                <div className="text-[11px]">Indian Institute of technology, Roorkee</div>
                            </div>
                            <div className="flex flex-col text-center justify-between w-[120px] items-center">
                                <div>
                                    <Image className="w-[80px] h-fit" src={footer2} alt='footer2'/>
                                </div>
                                <div className="text-[11px]">Sports Council</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-[16rem]">
                        <div className="font-cabin font-bold text-[18px] pb-1">Sangram 2024</div>
                        <div className="font-cabin text-[16px]">Sports Council Indian Institute of technology, roorkee</div>
                        <div className="font-cabin text-[14px]">Roorkee - Haridwar Highway, Roorkee, Uttarakhand 247667</div>
                    </div>
                </div>
                <div className="flex text-white text-[11px] bg-[#1a1a1a]">For any issue please email us at xxxxxxxxx@iitr.ac.in</div>
            </div>
        </>
    );
};

export default Footer;