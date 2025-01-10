import PropTypes from "prop-types";

const FullBottomContent = ({ data }) => {
  return (
    <section className="px-4 sm:px-8 lg:px-20 flex items-center md:items-end min-h-screen pb-8 sm:pb-16 lg:pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-20 w-full">
        {/* Title Section */}
        <h1 className="text-3xl lg:text-5xl xl:text-6xl text-heroTitle text-center sm:text-left sm:w-2/3 2xl:w-3/4 font-tiltWarp leading-tight">
          {data?.heading}
        </h1>

        {/* Description and Button Section */}
        <div className="text-center sm:text-right sm:w-1/2 2xl:w-11/12 font-actor">
          <p className="text-base lg:text-lg text-primaryText leading-relaxed">
            {data?.description}
          </p>
          <button className="bg-btnBg w-full sm:w-auto px-6 py-2 sm:py-3 mt-4 sm:mt-5 rounded-full text-base lg:text-lg text-primaryText">
            {data?.button}
          </button>
        </div>
      </div>
    </section>
  );
};

FullBottomContent.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }),
};

export default FullBottomContent;
