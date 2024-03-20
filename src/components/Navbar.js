import React from 'react';
import logo from '../../public/images/logo.svg';
import Image from "next/image";

function Navbar() {
    return (
        <div className="h-[20vh] bg-black flex justify-between px-[4rem] py-[1rem]">
            <div className=""><Image src={logo} alt='logo'/></div>
            <div className="flex gap-[3rem] items-center text-white">
                <div>Home</div>
                <div>About</div>
                <div>Events</div>
                <div>Registration</div>
                <div>Contact Us</div>
            </div>
        </div>
    );
}

export default Navbar;