import guaranteeLogo from "../../assets/10 jaar garantie.png";
import badgeLogo from "../../assets/top_pro_10_2024 1.png";
import googleLogo from "../../assets/pngegg 1.png"; // Make sure to import this
import groupPhoto from "../../assets/Group 19.png";
import useAboutData from "../../../hooks/useAboutData";
import { urlFor } from "../../../lib/client";

const AboutUs = () => {
  const { aboutData, error } = useAboutData();

  if (error) {
    return <div>Error loading about data: {error.message}</div>;
  }

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  const aboutContent = Array.isArray(aboutData) ? aboutData[0] : aboutData;

  return (
    <section id="about">
      {/* Title */}
      <h1 className="text-[80px] lg:text-[200px] xl:text-[250px] 3xl:text-[347px] font-bold text-formTitle text-center font-nobile">
        {aboutContent?.title}
      </h1>
      {/* Content */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start lg:mt-16 gap-8 lg:gap-16 px-4 md:px-5 lg:px-20">
        {/* Left Content */}
        <div className="xl:w-2/5 space-y-5 text-justify px-4 lg:px-0">
          <p className="description">{aboutContent?.descriptionOne}</p>
          <p className="description">{aboutContent?.descriptionTwo}</p>
          {aboutContent?.logos && (
            <div className="flex justify-center lg:justify-start items-center gap-5 flex-wrap">
              {aboutContent.logos.map((logo, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0
                      ? "w-[120px] h-[40px] lg:w-[186px] lg:h-[63px]"
                      : index === 1
                      ? "w-[50px] h-[60px] lg:w-[69px] lg:h-[79px]"
                      : "w-[90px] h-[36px] lg:w-[115px] lg:h-[48px]"
                  }`}
                >
                  <img
                    className="w-full h-full object-contain"
                    src={
                      logo?.logoImage
                        ? urlFor(logo.logoImage) :"logo" }
                    alt={logo?.altText || `Logo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Right Content */}
        <div className="lg:w-3/5 px-4 lg:px-0">
          <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto mx-auto">
            <img
              className="w-full h-auto object-contain"
              src={
                aboutContent?.image ? urlFor(aboutContent.image) : groupPhoto
              }
              alt={aboutContent?.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
