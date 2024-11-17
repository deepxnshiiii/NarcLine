import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Layout() {
    return (
        <>
            <div>
                <div className="px-16">
                    <Header />
                </div>
                <Outlet />
                <Footer />
            </div>
        </>
    );
}
