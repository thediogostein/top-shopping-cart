import { useState, useEffect } from "react";

const URL = "https://fakestoreapi.com";

export function useFetch(endpoint) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${URL}/${endpoint}`)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        return response.json();
      })
      .then((myData) => {
        setData(myData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
}
