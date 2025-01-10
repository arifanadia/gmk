import { useState, useEffect } from "react";
import { client } from "../lib/client";

const useHeroData = () => {
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "hero"] { ... }`);
        setHeroData(result);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { heroData, error };
};

export default useHeroData;
