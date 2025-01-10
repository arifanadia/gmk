import PropTypes from "prop-types";

const BottomLeftContent = ({ data, slideImage }) => {

  return (
    <div
      style={{
        backgroundImage: `url(${slideImage})`,
      }}
      className="hero-carousel-wrapper"
    >
      <div className="flex flex-1 flex-col lg:flex-row justify-between  items-start  lg:items-end">
        <div>
        <h1 className="text-3xl md:text-4xl xl:text-6xl text-heroTitle text-center sm:text-left sm:w-2/3 xl:w-[70%] font-tiltWarp leading-tight">
          {data?.heading}
        </h1>
          <p className="text-sm sm:text-lg text-primaryText mt-6 font-actor lg:max-w-[600px] xl:max-w-[650px] 2xl:max-w-[710px]">
            {data?.description}
          </p>
        </div>
        <div className="w-full lg:w-1/2  lg:text-right ">
          <button className="bg-btnBg w-full sm:w-[200px] lg:w-[280px]  mt-3 rounded-full py-2 text-primaryText font-actor">
            {data?.button}
          </button>
        </div>
      </div>
    </div>
  );
};

BottomLeftContent.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
};

export default BottomLeftContent;
