import { data } from "./config/constant";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper/modules";

import "./styles.css";

const ProductCarousel = () => {
  return (
    <section id="services" className="mb-72">
      <h1 className="text-[80px] lg:text-[200px] xl:text-[250px] 3xl:text-[347px] font-bold text-formTitle text-center font-nobile">
        {data?.title}
      </h1>
      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data?.carousels?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="swiperSlideProduct relative overflow-hidden font-actor"
          >
            <div className="relative w-full h-80">
              <img
                src={item?.image}
                alt={item?.name}
                className="w-full h-full object-cover rounded-xl"
              />

              <div className="absolute bottom-5 md:bottom-0 left-0 w-full bg-black bg-opacity-40 p-4 backdrop-blur-lg">
                <h2 className="text-white text-xl font-medium">{item?.name}</h2>
                <p className="text-red-600 text-sm font-medium">
                  {item?.singer}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
};

export default ProductCarousel;
