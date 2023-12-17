import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function DestinationSlick({ destinationData }) {
    const sliderRef = useRef(null);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        centerPadding: "60px",
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <Slider {...settings} ref={sliderRef}>
                {destinationData.map((img) => (
                    <div key={img.alt}>
                        <LazyLoadImage
                            effect="blur"
                            width="100%"
                            src={`https://${process.env.REACT_APP_BUCKET_URL}${img.imageAddress}`}
                            alt={`${img.alt}`}
                            className="aspect-video h-64 w-full object-cover object-center"
                        />
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default DestinationSlick;
