import React from 'react';
import hero2 from '../../public/images/hero2.svg';
import Image from "next/image";

function About(props) {
    return (
        <div className="flex min-h-screen w-full bg-[#E7E7E7] px-[4rem]">
            <div className="w-[50%] py-[4rem] flex flex-col">
                <div className="font-bungeesh text-[56px] text-[#0474BA]">ABOUT</div>
                <div className="font-bungeein text-[69px] text-[#0474BA]">SANGRAM</div>
                <div className="font-cabin flex flex-col text-[24px] text-[#0474BA] py-11 gap-5">
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores deleniti deserunt dicta dolor ea eos expedita, fugit inventore minima nemo nesciunt pariatur quam repellat, saepe tempore. Accusantium aperiam aspernatur debitis deserunt doloremque doloribus eius et exercitationem fugit illum impedit inventore iusto laboriosam maxime mollitia natus neque perspiciatis placeat porro praesentium quasi quia, recusandae repellendus unde vero. Commodi, delectus!</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi earum est officia? Dignissimos dolore dolores ipsum repellendus tenetur! Asperiores fugit laboriosam, minima nemo praesentium provident!</div>
                </div>
                <div>
                    <button className="px-10 py-3 w-fit rounded-3xl border-[4px] border-[#0474BA] font-cabin italic font-semibold text-[#0474BA] text-[16px]">Know More</button>
                </div>
            </div>
            <div className="w-[50%] flex justify-end items-center">
                <Image className="pr-[-4rem] h-[700px]" src={hero2} alt="bgimg" />
            </div>
        </div>
    );
}

export default About;