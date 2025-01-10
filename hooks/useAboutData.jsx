import { useState, useEffect } from "react";
import { client } from "../lib/client";

const useAboutData = () => {
  const [aboutData, setAboutData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const result = await client.fetch(`*[_type == "about"]{ ... }`);
        setAboutData(result);
      } catch (err) {
        setError(err);
      }
    };

    fetchAboutData();
  }, []);

  return { aboutData, error };
};

export default useAboutData;
