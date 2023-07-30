import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (url) {
      setLoading(true);
      setData(null);
      setError(null);

      axios
        .get(`${process.env.REACT_APP_BASE_URL}/${url}`)
        .then((response) => {
          isMounted && setData(response.data);
        })
        .catch((error) => {
          isMounted && setError(error);
        })
        .finally(() => {
          isMounted && setLoading(false);
        });
    }
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
