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

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route
                            path="/anonymouscomplaint"
                            element={<AnonymousComplaint />}
                        />
                        <Route path="/latestnews" element={<LatestNews />} />
                        <Route
                            path="/wantedindividuals"
                            element={<WantedIndividuals />}
                        />
                        <Route path="/blogs" element={<Blogs />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;