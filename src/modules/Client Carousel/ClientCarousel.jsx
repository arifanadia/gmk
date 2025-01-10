import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import useCarouselData from "../../../hooks/useCarouselData";
import { urlFor } from "../../../lib/client";

const getZValue = () => {
  const width = window.innerWidth;
  return width <= 480 ? 200 : width <= 768 ? 300 : width <= 992 ? 400 : 600;
};

const ClientCarousel = () => {
  const [z, setZ] = useState(getZValue());
  const { carouselData, error } = useCarouselData();

  useEffect(() => {
    const handleResize = () => {
      setZ(getZValue());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carousel = (slider) => {
    function rotate() {
      const deg = 360 * slider.track.details.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }

    slider.on("created", () => {
      const deg = 360 / slider.slides.length;
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
      });
      rotate();
    });

    slider.on("detailsChanged", rotate);
  };

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  const carouselContent = Array.isArray(carouselData)
    ? carouselData[0]
    : carouselData;

  if (error) {
    return <p>Error loading carousel data.</p>;
  }

  if (!carouselContent?.carousels?.length) {
    return <p>No carousel items available.</p>;
  }

  return (
    <section className="py-20 font-actor">
      <div className="wrapper">
        <div className="scene">
          <div
            className="carousel keen-slider"
            ref={sliderRef}
            aria-label="Client Testimonials Carousel"
          >
            {carouselContent.carousels.map((image, imgIdx) => (
              <div key={image._key} className="carousel__cell">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src={urlFor(image)}
                  alt={`Carousel Image ${imgIdx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-40 xl:mt-80 md:px-20 px-5 space-y-5 max-w-6xl mx-auto">
        <p className="description">{carouselContent.descriptionOne}</p>
        <p className="description">{carouselContent.descriptionTwo}</p>
      </div>
    </section>
  );
};

export default ClientCarousel;
