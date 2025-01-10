import PropTypes from "prop-types";

const RightSideContent = ({ data }) => {
  return (
    <section className="text-right flex justify-end px-5 sm:px-10 lg:pr-20">
      <div className="w-full sm:w-3/4 lg:w-[45%] mt-24">
        <h1 className="text-3xl sm:text-4xl xl:text-6xl text-heroTitle font-tiltWarp">
          {data?.heading}
        </h1>
        <p className="text-sm sm:text-lg text-primaryText mt-6 font-actor ">
          {data?.description}
        </p>
        <button className="bg-btnBg w-full sm:w-[200px] lg:w-[280px] mt-5 rounded-full py-2 text-primaryText font-actor">
          {data?.button}
        </button>
      </div>
    </section>
  );
};

RightSideContent.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
};

export default RightSideContent;
