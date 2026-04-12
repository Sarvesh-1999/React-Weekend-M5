import { useEffect, useState } from "react";

export const useApi = (URL) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  async function getData() {
    setLoading(true);
    try {
      let resp = await fetch(URL);
      let data = await resp.json();
      setDbData(data);
    } catch (error) {
      setError({ message: "API call failed", data: error });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [URL]);

  return { dbData, loading, error };
};
