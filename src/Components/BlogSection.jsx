import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NextArrow = ({ onClick }) => (
    <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-l-lg hover:bg-white transition-colors"
        onClick={onClick}
        aria-label="Next slide"
    >
        Next
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button className="hidden" onClick={onClick} aria-label="Previous slide">
        Prev
    </button>
);

const data = [
    {
        slideNo: 1,
        bgColor: "bg-black",
        title: "Lorem",
        description:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
        slideNo: 2,
        bgColor: "bg-pink-500",
        title: "Amet",
        description:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
        slideNo: 3,
        bgColor: "bg-blue-500",
        title: "Ipsum",
        description:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
    {
        slideNo: 4,
        bgColor: "bg-gray-500",
        title: "Dolor",
        description:
            "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    },
];

export default function BlogSection() {
    const sectionRef = useRef(null);
    const textContainerRef = useRef(null);
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const animationRef = useRef(null);

    useEffect(() => {
        const textContainer = textContainerRef.current;
        const section = sectionRef.current;

        if (!section || !textContainer) return;

        const st = ScrollTrigger.create({
            trigger: section,
            start: "top 70%",
            end: "top 10%",
            // markers: true,
            scrub: true,
            onUpdate: (self) => {
                if (animationRef.current) {
                    animationRef.current.progress(self.progress);
                }
            },
        });

        animationRef.current = gsap.fromTo(
            textContainer,
            { y: 0 },
            {
                y: -60,
                ease: "power1.in",
                paused: true,
            }
        );

        return () => {
            if (st) st.kill();
            if (animationRef.current) animationRef.current.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: (index) => {
            if (animationRef.current) {
                const currentProgress = animationRef.current.progress();
                animationRef.current.pause();
                setCurrentSlide(index);
                animationRef.current.progress(currentProgress);
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                },
            },
        ],
    };

    return (
        <div
            ref={sectionRef}
            className="relative bg-red-200 rounded-lg"
            aria-label="Blog carousel section"
        >
            <div className="relative py-6 md:py-10 px-4 md:px-32 translate-x-0 md:translate-x-16">
                <Slider
                    ref={sliderRef}
                    {...settings}
                    className="w-full max-w-[90rem] mx-auto"
                >
                    {data.map((elem) => (
                        <div
                            key={elem.slideNo}
                            className={`aspect-[2/1] md:aspect-[3/1] w-full ${elem.bgColor} rounded-lg transition-colors duration-300`}
                            aria-label={`Slide ${elem.slideNo}`}
                        />
                    ))}
                </Slider>
            </div>

            <div
                ref={textContainerRef}
                className="absolute top-1/2 -translate-y-1/2 left-4 md:left-[7%] flex flex-col justify-center items-start max-w-[90%] md:max-w-[50%] z-10"
            >
                <h2 className="pl-3 text-4xl md:text-6xl lg:text-[7rem] font-semibold tracking-wider text-[#003588] transition-all duration-300">
                    {data[currentSlide].title}
                </h2>
                <p className="w-full md:w-96 pt-3 text-sm md:text-base font-semibold text-[#003588] transition-all duration-300">
                    {data[currentSlide].description}
                </p>
            </div>
        </div>
    );
}
