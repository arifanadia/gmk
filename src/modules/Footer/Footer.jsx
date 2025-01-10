import useFooterData from "../../../hooks/useFooterData";
import { data } from "./config/constant";

const Footer = () => {
  const { footerData, loading, error } = useFooterData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!footerData) {
    return <div>No footer data available.</div>;
  }
  const footerContent = Array.isArray(footerData) ? footerData[0] : footerData;
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center md:justify-between items-center px-5">
        <h3 className="text-[50px] md:text-[60px] xl:text-[96px] font-actor leading-none">
          {footerContent?.leftTitle}
        </h3>
        <h1 className="text-[150px] md:text-[200px] 3xl:text-[347px] font-bold font-nobile uppercase">
          {footerContent?.rightTitle}
        </h1>
      </div>
      <hr />
      <div className="flex flex-wrap justify-between text-lg p-5 font-actor gap-10">
      <div>
          <p>{footerContent?.brand}</p>
          <p>{footerContent?.address}</p>
        </div>
        <div>
          <p>{footerContent?.email}</p>
          <p>{footerContent?.phone}</p>
        </div>
        <div>
          <p>{footerContent?.legacy1}</p>
          <p>{footerContent?.legacy2}</p>
        </div>
        <div>
          <p>{footerContent?.legacy3}</p>
          <p>{footerContent?.concept}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
