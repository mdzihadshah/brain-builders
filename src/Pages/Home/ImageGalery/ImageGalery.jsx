import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageGalery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 40,
    });
  }, []);

  return (
    <div className="py-16 w-11/12 mx-auto">
      <div
        data-aos="fade-up-right"
        className="mb-10 pl-4 border-l-4  border-green-600">
        <h1 className="font-bold text-2xl md:text-3xl text-green-600">
          Welcome Our Gallery
        </h1>
        <p className="lg:max-w-sm">
          Take a visual journey through the incredible moments and experiences
          we've captured.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div
          data-aos="fade-up-right"
          className=" bg-slate-100 rounded-lg md:p-5 shadow-md">
          <div className="grid grid-cols-2 gap-5 ">
            <div
              data-aos="zoom-in"
              className="border-4 border-slate-100 rounded-lg p-5 shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/8143wgce78L._AC_SX679_.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              className="border-4 border-slate-100 rounded-lg p-3 shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/816JgA5Ow+L._AC_SX679_.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              className="border-4 border-slate-100 rounded-lg p-5 shadow-md">
              <img
                src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/82/909226/1.jpg?0620"
                alt=""
              />
            </div>
            <div
              data-aos="zoom-in"
              className="border-4 border-slate-100 rounded-lg p-5 shadow-md">
              <img
                src="https://m.media-amazon.com/images/I/81zhM7RSBCL._AC_SX679_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-up-left" className="grid grid-cols-2 gap-5 ">
          <div className="border-4 border-slate-100 rounded-lg p-5 shadow-md">
            <img
              src="https://m.media-amazon.com/images/I/81piopB8wiL._AC_SX522_.jpg"
              alt=""
            />
          </div>
          <div className="border-4 border-slate-100 rounded-lg p-5 shadow-md">
            <img
              src="https://m.media-amazon.com/images/I/8143wgce78L._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div className="border-4 border-slate-100 rounded-lg p-5 shadow-md">
            <img
              src="https://m.media-amazon.com/images/I/8143wgce78L._AC_SX679_.jpg"
              alt=""
            />
          </div>
          <div className="border-4 border-slate-100 rounded-lg p-5 shadow-md">
            <img
              src="https://m.media-amazon.com/images/I/8143wgce78L._AC_SX679_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGalery;
