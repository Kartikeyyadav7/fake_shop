import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from 'react-feather';
import { links } from "./Mylinks";

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div className="px-3 text-left md:cursor-pointer group">
                        <h1
                            className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text-xl md:hidden inline">
                                {heading === link.name ? <ChevronUp /> : <ChevronDown />}
                            </span>
                            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 ">
                                <ChevronDown />
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-20 z-50 hidden group-hover:md:block hover:md:block bg-white shadow-lg w-60">
                                    <div className="py-1">
                                        <div
                                            className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"
                                        ></div>
                                    </div>
                                    <div className="bg-white p-5 grid grid-cols-3 gap-10">
                                        {link.sublinks.map((mysublinks) => (
                                            <div key={mysublinks.sublink}>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li key={slink.name} className="text-sm text-gray-600 my-2.5">
                                                        <Link
                                                            to={slink.link}
                                                            className="hover:text-primary"
                                                        >
                                                            {slink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
                    >
                        {link.sublinks.map((slinks) => (
                            <div key={slinks.sublink}>
                                <div>
                                    <div>
                                        {slinks.sublink.map((slink) => (
                                            <li key={slink.link} className="py-3 ">
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;
