import React, { Fragment } from "react";
import sliderBg from "../../assets/img/slider-bg.jpg";
import { dataCarousel } from "../../utils/contants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import Services from "../../components/UI/Services";

const Index = () => {
  return (
    <Fragment>
      <section className="sect-banner relative">
        <div className="w-full h-screen z-[-5] top-0 left-0 flex items-center">
          <img
            src={sliderBg}
            alt="herro-banner"
            className="w-full h-full object-cover absolute object-right-top"
          />
          <div className="container mx-auto py-28 ">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              speed={1000}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className=""
            >
              {dataCarousel.map((item, index) => (
                <SwiperSlide key={index}>
                  <div class="w-[45%]">
                    <h1 className="text-7xl font-[playfair] font-bold text-blue mb-5">
                      {item.title}
                    </h1>
                    <p className="mb-4">{item.description}</p>
                    <button className="btn-blue mb-10">Shop Now</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Services />
    </Fragment>
  );
};

export default Index;
