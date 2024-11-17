import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="my-20 px-16 flex gap-12">
            <div className="relative w-[35rem] h-[30rem] bg-[#ECF2FF] rounded-3xl">
                <h1 className="before:content-[''] before:absolute before:top-0 before:right-24 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#FFF]"></h1>
                <div className="absolute right-0 py-12 px-12 bg-white rounded-bl-2xl"></div>
                <h1 className="before:content-[''] before:absolute before:top-24 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-tr-3xl before:shadow-[16px_-16px_0_0_#FFF]"></h1>

                <div className="h-full flex flex-col justify-between p-10">
                    <h3 className="text-4xl font-bold text-[#003588]">
                        NarcLine
                    </h3>
                    <div>
                        <p className="text-[1.4rem] font-medium text-[#003588] pb-4">
                            Stay updated with our newsletter
                        </p>
                        <div>
                            <form className="bg-white flex border border-[#003588] p-2 rounded-full">
                                <input
                                    className="w-full bg-transparent px-4 text-ellipsis outline-none"
                                    maxLength="256"
                                    name="Footer-Email"
                                    placeholder="Enter your email address"
                                    type="email"
                                    id="Footer-Email"
                                    required
                                />
                                <input
                                    type="submit"
                                    data-wait="Please wait..."
                                    className="px-8 py-3 bg-[#003588] text-white font-medium rounded-full cursor-pointer"
                                    value="Subscribe"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-[60rem] h-[30rem] p-10 bg-[#E0F7FF] rounded-3xl">
                <div className="grid grid-flow-col gap-16">
                    <div>
                        <h5 className="mb-8 text-2xl font-semibold text-[#003588]">
                            Pages
                        </h5>
                        <div className="flex gap-12 text-lg font-medium text-[#033e9ec9] tracking-wide text-nowrap">
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/latestnews">News</Link>
                                </li>
                                <li>Community</li>
                                <li>
                                    <Link to="/joincommunity">Donations</Link>
                                </li>
                                <li>
                                    <Link to="/eduresources">Tutorials</Link>
                                </li>
                                <li>
                                    <Link to="/anonymouscomplaint">
                                        Complaint
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link to="/blogs">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h5 className="mb-8 text-2xl font-semibold text-[#003588]">
                            Utility Pages
                        </h5>
                        <div className="flex gap-16 text-lg font-medium text-[#033e9ec9] tracking-wide">
                            <ul className="flex flex-col gap-3 text-nowrap">
                                <li>Style Guide</li>
                                <li>Instructions</li>
                                <li>Licenses</li>
                                <li>Changelog</li>
                                <li>Link in Bio</li>
                            </ul>
                            <ul className="flex flex-col gap-3">
                                <li>Coming Soon</li>
                                <li>Error 404</li>
                                <li>Password Protected</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h5 className="mb-4  text-2xl font-semibold text-[#003588] text-wrap">
                            Contact Information
                        </h5>
                        <ul className="flex flex-col gap-3 text-lg font-medium text-[#033e9ec9] tracking-wide">
                            <li>
                                Address
                                <p>123 Main St, Anytown, USA</p>
                            </li>
                            <li>
                                Phone
                                <p>+123-456-7890</p>
                            </li>
                            <li>
                                E-mail
                                <p>abcd@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <h1 className="before:content-[''] before:absolute before:bottom-0 before:right-24 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
                <div className="absolute bottom-0 right-0 py-12 px-12 bg-white rounded-tl-2xl"></div>
                <h1 className="before:content-[''] before:absolute before:bottom-24 before:right-0 before:h-12 before:w-12 before:bg-transparent before:rounded-br-3xl before:shadow-[0_22px_0_0_#FFF]"></h1>
            </div>
        </div>
    );
}
