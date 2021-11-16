import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
    const [slideIndex, setSlideIndex] = useState(1);
    useEffect(async () => {
        await showSlides(slideIndex);
    });

    const plusSlides = (n) => {
        setSlideIndex(slideIndex + n);
        showSlides(slideIndex);
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
        showSlides(slideIndex);
    };

    const showSlides = (index) => {
        var i;

        var myslides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        if (index > myslides.length) {
            setSlideIndex(1);
            index = 1;
        }
        if (index < 1) {
            setSlideIndex(myslides.length);
            index = myslides.length;
        }
        for (i = 0; i < myslides.length; i++) {
            myslides[i].style.display = "none";
            // console.log(myslides[i]);
        }
        console.log("index", index);

        myslides[index - 1].style.display = "block";
        setTimeout(() => showSlides(index + 1 > 3 ? 1 : index + 1), 5000);
    };
    return (
        <div className="m-2 w-screen h-full">
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img
                        src="img1.jpg"
                        style={{ width: "100%" }}
                        className="w-screen h-96"
                    />
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img
                        src="img2.jpg"
                        style={{ width: "100%" }}
                        className="w-screen h-96"
                    />
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img
                        src="img3.jpg"
                        style={{ width: "100%" }}
                        className="w-screen h-96"
                    />
                    <div className="text">Caption Three</div>
                </div>

                <a className="prev" onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>
            <br />

            <div className="flex items-center justify-center">
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </div>
    );
}
