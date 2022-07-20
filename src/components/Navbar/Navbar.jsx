import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/fakeshoppng.png'
import { Menu, X, User } from 'react-feather'
import NavLinks from "./NavLinks";
import SearchBox from '../SearchBox'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white ">
            <div className="flex items-center p-4 md:p-0 font-medium justify-between">
                <div className="z-50  md:w-auto w-full flex justify-between">
                    <Link to='/'>
                        <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
                    </Link>
                    <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>

                        {open ? <X /> : <Menu />}
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                    <div>
                        <SearchBox />
                    </div>
                    <NavLinks />
                    <li>
                        <Link to="/" className="py-7 px-3 flex items-center gap-1">
                            <User />
                            Kartikey
                        </Link>
                    </li>
                </ul>
                {/* mobile  */}
                <ul
                    className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto z-10 bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                >
                    <NavLinks />
                    <li>
                        <Link to="/" className="py-7 px-3 flex items-center gap-1">
                            <User />
                            Kartikey
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
