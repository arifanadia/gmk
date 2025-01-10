import PropTypes from "prop-types";
import logo from "./../../assets/Logo.png";

const Navbar = ({ activeSlide }) => {
  // Determine if the logo should be hidden
  const shouldHideLogo = activeSlide === 3 ;

  return (
    <nav className="absolute top-0 left-0 w-full z-10 text-white font-tiltWarp">
      <div className="flex justify-between items-center px-4 sm:px-10 lg:px-[60px] pt-4 sm:pt-6 lg:pt-[60px]">
        {/* Left Section - Logo & Website Name */}
        <div
          className={`flex items-center space-x-2 sm:space-x-4 justify-start ${
            shouldHideLogo ? "hidden" : "block"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-6 h-6 sm:w-10 sm:h-10 lg:w-[60px] lg:h-[60px]"
          />
          <span className="text-sm sm:text-2xl lg:text-3xl xl:text-4xl">
            GMK Dakonderhoud
          </span>
        </div>
        {/* Center Links - Only visible on Slide 5 */}
        <div className="justify-center ml-5 sm:ml-20 ">
          {activeSlide === 5 && (
            <div className="hidden lg:flex space-x-4 sm:space-x-8 lg:space-x-12 xl:space-x-20">
              <a
                href="#services"
                className="text-xs sm:text-sm lg:text-base hover:text-yellow-500 transition"
              >
                Diensten
              </a>
              <a
                href="#about"
                className="text-xs sm:text-sm lg:text-base hover:text-yellow-500  transition"
              >
                Over Ons
              </a>
              <a
                href="#services"
                className="text-xs sm:text-sm lg:text-base hover:text-yellow-500  transition"
              >
                Contact
              </a>
            </div>
          )}
        </div>
        {/* Right Section - Simple Sentence */}
        <div className="justify-end ml-5 sm:ml-20">
          {activeSlide === 5 && (
            <div className=" text-xs sm:text-sm lg:text-base">
              <span className="text-[#E7E7E7]">
                Spoed? Bel 020 1234567 of klik hier | Chat
              </span>
            </div>
          )}
        </div>

        {/* Logo Reorder for Slide 3 and 4 */}
        {activeSlide === 3 && (
          <div className="flex items-center space-x-2 sm:space-x-4 justify-start">
            <span className="text-sm sm:text-2xl lg:text-3xl xl:text-4xl">
              GMK Dakonderhoud
            </span>
            <img
              src={logo}
              alt="Logo"
              className="w-6 h-6 sm:w-10 sm:h-10 lg:w-[60px] lg:h-[60px]"
            />
          </div>
        )}
      </div>

      {/* Mobile Navigation - Links for Slide 5 */}
      {activeSlide === 5 && (
        <div className="flex lg:hidden justify-around mt-4">
          <a
            href="#home"
            className="text-xs sm:text-sm hover:text-gray-300 transition"
          >
            Diensten
          </a>
          <a
            href="#about"
            className="text-xs sm:text-sm hover:text-gray-300 transition"
          >
            Over Ons
          </a>
          <a
            href="#services"
            className="text-xs sm:text-sm hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  activeSlide: PropTypes.number.isRequired,
};

export default Navbar;
