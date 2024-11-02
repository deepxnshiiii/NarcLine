import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BlogSection() {
    let sliderRef = useRef(null);

    const play = () => {
        sliderRef.slickPlay();
    };

    const pause = () => {
        sliderRef.slickPause();
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <div>Next</div>, // Keep the next arrow
        prevArrow: <div style={{ display: "none" }}>Prev</div>,
        afterChange: (index) => setCurrentSlide(index), // Track current slide
    };

    const data = [
        {
            slideNo: 1,
            bgColor: "bg-[black]",
            title: "Lorem",
            description:
                "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        },
        {
            slideNo: 2,
            bgColor: "bg-[pink]",
            title: "Amet",
            description:
                "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        },
        {
            slideNo: 3,
            bgColor: "bg-[blue]",
            title: "Ipsum",
            description:
                "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        },
        {
            slideNo: 4,
            bgColor: "bg-[gray]",
            title: "Dolor",
            description:
                "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        },
    ];

    return (
        <div className="relative overflow-x-hidden">
            <div className="relative py-10 px-32 translate-x-16">
                <Slider {...settings}>
                    {data.map((elem, index) => (
                        <div
                            key={index}
                            className={`h-[30rem] w-[60rem] ${elem.bgColor}`}
                        ></div>
                    ))}
                </Slider>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[7%] flex flex-col justify-center items-start">
                <h5 className="pl-3 text-[7rem] font-semibold tracking-wider text-[#003588]">
                    {data[currentSlide].title}
                </h5>
                <h3 className="w-96 pt-3 font-semibold text-[#003588]">
                    {data[currentSlide].description}
                </h3>
            </div>
        </div>
    );
}
