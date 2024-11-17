import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LatestNews() {
    const data = [
        {
            title: "1",
            bg: "#f100005b",
            date: "4th September, 2024",
            heading: "HEADING 1",
        },
        {
            title: "2",
            bg: "#7072db5b",
            date: "11th September, 2024",
            heading: "HEADING 2",
        },
        {
            title: "3",
            bg: "#201c1c5b",
            date: "12th September, 2024",
            heading: "HEADING 3",
        },
        {
            title: "4",
            bg: "#f100005b",
            date: "23rd September, 2024",
            heading: "HEADING 4",
        },
        {
            title: "5",
            bg: "#7072db5b",
            date: "29th September, 2024",
            heading: "HEADING 5",
        },
        {
            title: "6",
            bg: "#201c1c5b",
            date: "29th September, 2024",
            heading: "HEADING 6",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (index) => setCurrentSlide(index), // Updates currentSlide when slide changes
    };

    return (
        <div className="py-20 bg-blue-100">
            <div className="pt-16 pb-8 flex justify-center text-[3rem] font-semibold tracking-tight">
                <h1 className="whitespace-pre text-[#266AFB]">News </h1>
                <h1 className="text-[#003588]">of our World</h1>
            </div>

            <div className="p-10">
                <Slider {...settings}>
                    {data.map((elem, index) => (
                        <div key={index}>
                            <div
                                className="h-[30rem] flex justify-center items-center"
                                style={{ backgroundColor: elem.bg }}
                            >
                                <div className="text-[#003588]">
                                    <h2 className="text-2xl font-semibold">
                                        {elem.title}
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h5 className="font-semibold text-[#003588]">
                    {data[currentSlide].date}
                </h5>
                <h3 className="pt-3 text-[2rem] font-medium text-[#003588]">
                    {data[currentSlide].heading}
                </h3>
            </div>
        </div>
    );
}
