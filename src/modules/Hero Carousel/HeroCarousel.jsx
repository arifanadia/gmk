import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RightSideContent from "./partials/Right Side Content/RightSideContent";
import FullBottomContent from "./partials/Full Bottom Content/FullBottomContent";
import BottomLeftContent from "./partials/Bottom Left Content/BottomLeftContent";
import CenterContent from "./partials/Center Content/CenterContent";
import FormContent from "./partials/Form Content/FormContent";
import guaranteeLogo from "../../assets/10 jaar garantie.png";
import badgeLogo from "../../assets/top_pro_10_2024 1.png";
import googleLogo from "../../assets/pngegg 1.png";
import handPhoto from "../../assets/image 4.png";
import Navbar from "../Navbar/Navbar";
import MiniCardLine from "./partials/Mini Card/MiniCard";
import Marquee from "react-fast-marquee";
import { urlFor } from "../../../lib/client";
import useHeroData from "../../../hooks/useHeroData";
import Loader from "../About Us/components/ui/loader";

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const { heroData, error } = useHeroData(); // Destructure the returned data

  if (error) {
    return <div>Error loading hero data: {error.message}</div>;
  }

  if (!heroData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const sortedHeroData = heroData.sort((a, b) => a.customId - b.customId);
  return (
    <section className="relative w-full min-h-screen">
      {/* Navbar */}
      <Navbar activeSlide={activeSlide} />

      {/* Hero Carousel */}
      <div className="absolute inset-0">
        {sortedHeroData?.length > 0 ? (
          <Swiper
            loop={true}
            className="h-full"
            onSlideChange={(swiper) => {
              const newActiveSlide = Number(
                heroData[swiper.realIndex]?.customId
              );
              setActiveSlide(isNaN(newActiveSlide) ? 0 : newActiveSlide);
            }}
          >
            {heroData.map((slide) => (
              <SwiperSlide key={slide._id}>
                <div
                  className="w-full h-full bg-cover bg-center flex items-center"
                  style={{
                    backgroundImage: slide?.image
                      ? `url(${urlFor(slide.image)})`
                      : "url('/default-image.jpg')",
                  }}
                >
                  <main className="w-full">
                    {Number(slide.customId) === 1 && (
                      <div>
                        <Marquee>
                          {slide?.miniCards?.length > 0 ? (
                            <MiniCardLine items={slide.miniCards} />
                          ) : (
                            <p>No mini cards available</p>
                          )}
                        </Marquee>
                        <div className="flex justify-between absolute bottom-5 left-0 right-0 gap-5">
                          <div className="flex gap-5 items-center">
                            {slide?.logos?.map((logo, index) => (
                              <div
                                key={index}
                                className="flex flex-col items-center"
                              >
                                <img
                                  className={`object-contain ${
                                    index === 0
                                      ? "w-[120px] h-[40px] lg:w-[186px] lg:h-[63px]"
                                      : index === 1
                                      ? "w-[50px] h-[60px] lg:w-[69px] lg:h-[79px]"
                                      : "w-[90px] h-[36px] lg:w-[115px] lg:h-[48px]"
                                  }`}
                                  src={urlFor(logo?.logoImage)}
                                  alt={logo?.altText || `Logo ${index + 1}`}
                                />
                              </div>
                            ))}
                          </div>
                          <div>
                            <img
                              className="lg:w-[463px] lg:h-[157px] w-[115px] h-[48px] object-contain"
                              src={handPhoto}
                              alt="Hand Photo"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {Number(slide.customId) === 2 && (
                      <BottomLeftContent data={slide} />
                    )}
                    {(Number(slide.customId) === 3 ||
                      Number(slide.customId) === 4) && (
                      <RightSideContent data={slide} />
                    )}
                    {Number(slide.customId) === 5 && (
                      <CenterContent data={slide} />
                    )}
                    {(Number(slide.customId) === 6 ||
                      Number(slide.customId) === 7) && (
                      <FullBottomContent data={slide} />
                    )}
                    {Number(slide.customId) === 8 && (
                      <FormContent data={slide} />
                    )}
                  </main>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Loading...</p> // Fallback content
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;
