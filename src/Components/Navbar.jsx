import React, { useState } from "react";
import Logo from "/src/assets/TBL_Logo.png";
import { BiSearch } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="sticky top-0 z-50 bg-white">
            <section className="mx-auto flex max-w-7xl items-center justify-between p-4">
                {/* Logo */}
                <a href="">
                    <img src={Logo} alt="Logo" className="w-24 md:w-36" />
                </a>

                <div>
                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
                    >
                        <div
                            className={`absolute top-4 -mt-0.5 h-1 w-8 rounded bg-black transition-all duration-500 ${
                                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                        ></div>
                        <div
                            className={`absolute top-4 h-1 w-8 rounded bg-black transition-all duration-500 ${
                                isMobileMenuOpen ? "opacity-0" : ""
                            }`}
                        ></div>
                        <div
                            className={`absolute top-4 h-1 w-8 translate-y-2 rounded bg-black transition-all duration-500 ${
                                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                        ></div>
                    </button>

                    {/* Desktop Menu */}
                    <nav
                        aria-label="main"
                        className="text-l ml-20 hidden space-x-8 font-semibold md:flex items-center"
                    >
                        <a href="#">Bookstore</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Login</a>
                        <a href="#">
                            <BiSearch className="inline-block text-xl" />
                        </a>
                    </nav>
                </div>
            </section>

            {/* Mobile Menu */}
            <section
                className={`fixed left-0 top-0 h-screen w-full origin-top flex-col justify-center bg-white text-xl transition-transform duration-500 ${
                    isMobileMenuOpen ? "flex animate-open-menu" : "hidden"
                }`}
            >
                <nav className="mb-40 flex flex-col items-center py-16 font-bold" aria-label="mobile">
                    {/* Close Icon */}
                    <button onClick={toggleMenu} className="absolute right-6 top-6 text-4xl">
                        &times;
                    </button>

                    {/* Mobile Avatar + Bookstore */}
                    <div className="flex justify-start mr-40 space-x-3 py-4 font-medium">
                        <RxAvatar className="text-3xl" />
                        <a href="#" className="text-center hover:opacity-90">
                            Login
                        </a>
                    </div>

                    {/* Other Links */}
                    <a href="#" className="w-full py-4 text-center hover:opacity-90">
                        Bookstore
                    </a>
                    <a href="#" className="w-full py-4 text-center hover:opacity-90">
                        Events
                    </a>
                    <a href="#" className="w-full py-4 text-center hover:opacity-90">
                        About
                    </a>
                    <a href="#" className="w-full py-4 text-center hover:opacity-90">
                        Contact
                    </a>
                </nav>
            </section>
        </header>
    );
};

export default Navbar;