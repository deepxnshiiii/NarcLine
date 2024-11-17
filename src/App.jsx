import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import AnonymousComplaint from "./pages/AnonymousComplaint";
import LatestNews from "./pages/LatestNews";
import WantedIndividuals from "./pages/WantedIndividuals";
import Blogs from "./pages/Blogs";
import EduResources from "./pages/EduResources";
import FeedbackForm from "./pages/FeedbackForm";
import Webinars from "./pages/Webinars";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import JoinCommunity from "./pages/JoinCommunity";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/joincommunity" element={<JoinCommunity />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/latestnews" element={<LatestNews />} />
                        <Route
                            path="/wantedindividuals"
                            element={<WantedIndividuals />}
                        />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route
                            path="/eduresources"
                            element={<EduResources />}
                        />
                        <Route path="/webinars" element={<Webinars />} />
                        <Route path="/feedback" element={<FeedbackForm />} />
                        {/* <Route path="/contactus" element={<ContactUs />} /> */}
                        <Route
                            path="/privacypolicy"
                            element={<PrivacyPolicy />}
                        />
                        <Route
                            path="/anonymouscomplaint"
                            element={<AnonymousComplaint />}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
