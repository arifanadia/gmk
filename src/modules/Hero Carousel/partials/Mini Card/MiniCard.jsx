import { urlFor } from "../../../../../lib/client";
import avatar from "../../../../assets/Avatar.png";
import PropTypes from "prop-types";

const MiniCardLine = ({ items }) => {
  return (
    <section className="relative ">
      {/* Horizontal connecting line */}
      <div className="absolute top-1/2 left-0 w-full ">
        <div
          className="h-[1px] bg-white"
          style={{
            width: `${(items.length - 1) * 107 + 100}%`,
            left: `0`,
          }}
        />
        {items?.map((_, index) => (
          <div
            key={`line-indicator-${index}`}
            className="absolute h-[5px] lg:h-[12px] bg-white "
            style={{
              left: `${(index / (items.length - 1)) * 100}%`,
              width: "107px",
              transform: "translate(-50%, -50%)",
              top: "50%",
            }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-between ">
        {items.map((item, index) => (
          <div key={item._key} className="relative">
            <div
              className={`
               bg-white rounded-2xl shadow-md
               ${index % 2 === 0 ? "mb-32" : "mt-32"}
             `}
            >
              <div className="flex items-center justify-end gap-5  w-[220px] lg:w-[290px] h-[97px]">
                <div className="space-y-1 text-end ml-4 lg:ml-8">
                  <h3 className="font-medium text-base lg:text-xl">
                    {item.name || "Unknown"}
                  </h3>
                  <p className="text-xs text-[#78858F]">
                    {item.designation || "N/A"}
                  </p>
                </div>
                <div className="w-[80px] lg:w-[107px] h-[97px] overflow-hidden rounded-r-2xl">
                  <img
                    src={item?.image ? urlFor(item.image) : avatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

MiniCardLine.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      designation: PropTypes.string,
      image: PropTypes.object, // Assuming it's an object or string
    })
  ).isRequired,
};

export default MiniCardLine;
