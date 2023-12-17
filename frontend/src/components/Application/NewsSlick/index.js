import React, { useRef } from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewsSlick() {
    const sliderRef = useRef(null);

    const newsData = [
        {
            id: 1,
            image: "images/promo/Slide 16_9 - 1.jpg",
            placeholder: "images/promo/Slide 16_9 - 1-min.jpg",
        },
        {
            id: 2,
            image: "images/promo/Slide 16_9 - 2.jpg",
            placeholder: "images/promo/Slide 16_9 - 2-min.jpg",
        },
    ];

    const miniBoxClick = (id) => {
        // Find the index of the news item with the given ID
        const newsIndex = newsData.findIndex((news) => news.id === id);

        // Slide to the corresponding news slide
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(newsIndex);
        }
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings} ref={sliderRef}>
                {newsData.map((news) => (
                    <div key={news.id}>
                        <LazyLoadImage
                            src={news.image}
                            alt={`News ${news.id}`}
                            width="100%"
                            height={256}
                            className="w-full object-cover md:h-64"
                            effect="blur"
                        />
                    </div>
                ))}
            </Slider>
            <div className="mt-2 hidden md:flex">
                {newsData.map((news) => (
                    <div
                        key={news.id}
                        onClick={() => miniBoxClick(news.id)}
                        className="mr-2 h-9 w-16 cursor-pointer"
                    >
                        <img
                            src={news.image}
                            alt={`News ${news.id}`}
                            className="h-9 w-16 object-cover"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewsSlick;
