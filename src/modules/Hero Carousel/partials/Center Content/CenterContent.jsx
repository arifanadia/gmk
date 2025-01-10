import PropTypes from "prop-types";

const CenterContent = ({ data }) => {
  return (
    <section className="px-5 sm:px-10 lg:px-20 flex items-center min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl xl:text-6xl w-full lg:w-1/2 text-heroTitle text-center lg:text-left font-tiltWarp">
          {data?.heading || "Default Heading"}
        </h1>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-left font-actor">
          {data?.addressForm && (
            <div className="mb-6">
              <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-primaryText">
                {data.addressForm.title || "Default Form Title"}
              </h4>
              <p className="text-sm sm:text-lg text-primaryText pb-2 mt-2">
                {data.addressForm.description || "Default description goes here."}
              </p>
              <input
                placeholder={data.addressForm.placeholder || "Enter your address"}
                className="rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-btnBg"
              />
            </div>
          )}
          <div className="flex justify-center lg:justify-end">
            <button className="bg-btnBg w-full sm:w-[200px] lg:w-[280px] mt-5 rounded-full py-2 text-primaryText">
              {data?.button || "Submit"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

CenterContent.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    button: PropTypes.string,
    addressForm: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      placeholder: PropTypes.string,
    }),
  }),
};

export default CenterContent;
