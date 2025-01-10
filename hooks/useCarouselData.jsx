import { useEffect, useState } from "react";
import { client } from "../lib/client";


const useCarouselData = () => {
  const [carouselData, setCarouselData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
         const result = await client.fetch(`*[_type == "carousel"]{ ... }`);
         setCarouselData(result);
      } catch (err) {
        setError(err);
      }
    };

    fetchCarouselData();
  }, []);

  return { carouselData, error };
};

export default useCarouselData;
