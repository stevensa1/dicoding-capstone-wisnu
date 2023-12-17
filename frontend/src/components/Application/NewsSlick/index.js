import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewsSlick() {
    const sliderRef = useRef(null);

    const newsData = [
        { id: 1, image: "images/promo/Slide 16_9 - 1.svg" },
        { id: 2, image: "images/promo/Slide 16_9 - 2.svg" },
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
                        <img
                            src={news.image}
                            alt={`News ${news.id}`}
                            className="h-32 w-full object-cover md:h-64"
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
