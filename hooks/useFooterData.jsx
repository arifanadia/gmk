import { useEffect, useState } from "react";
import { client } from "../lib/client";


const useFooterData = () => {
  const [footerData, setFooterData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
         const result = await client.fetch(`*[_type == "footer"]{ ... }`);
        setFooterData(result);
      } catch (err) {
        setError(err);
      }
    };

    fetchFooterData();
  }, []);

  return { footerData, error };
};

export default useFooterData;
