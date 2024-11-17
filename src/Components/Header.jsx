import { useEffect, useRef, useState } from "react";
import { Arrow } from "../assets";
import { Link } from "react-router-dom";

export default function Header() {
    const [pages, isPages] = useState(false);
    const ref = useRef(null);

    const togglePages = () => {
        isPages(!pages);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            isPages(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="relative w-full flex items-center justify-between py-8">
                <ul className="flex gap-10 text-lg">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <div ref={ref} className="relative" onClick={togglePages}>
                        <li className="w-20 flex items-center justify-between">
                            Pages
                            <img src={Arrow} className="h-5" />
                        </li>
                        {pages && (
                            <div className="absolute w-52 px-4 py-4 rounded-xl bg-[#ECF2FF] text-lg text-[#003588] border-2 border-[#00348849] font-medium z-10">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/latestnews">
                                            Latest News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/wantedindividuals">
                                            Wanted Individuals
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blogs">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/joincommunity">Donations</Link>
                                    </li>
                                    <li>
                                        <Link to="/eduresources">
                                            Resources
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/webinars">Webinars</Link>
                                    </li>
                                    <li>
                                        <Link to="/feedback">Feedback</Link>
                                    </li>
                                    <li>
                                        <Link to="">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacypolicy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                </ul>
                <div className="absolute left-1/2 -translate-x-1/2">
                    <h1 className="text-5xl font-bold text-[#364F65]">
                        NarcLine
                    </h1>
                </div>
                <div>
                    <Link to="/anonymouscomplaint">
                        <button className="px-6 py-3 rounded-full text-lg text-white font-medium bg-green-800">
                            Make a Complaint
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    );
}
