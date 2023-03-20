import { useEffect, useState } from "react";

const useFetch = (initialUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(initialUrl);
        const json = await response.json();

        setData(json);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [initialUrl]);
  return { data, isLoading, error };
};
export default useFetch;
