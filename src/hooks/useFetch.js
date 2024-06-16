import { useEffect, useState } from "react";



export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = "38c7bdcc97349a3f4e1828276bacf6149d9422689036013da3406f148eb4dd03d02ec0a35aea0512424f5ddbb708a5e830744d236988bb46ada9969fd6b8fbd58a4080d528e71fba93cafb2cf2ad6121a1190cc81c9b46c0bb3b916326f83e8666ee7c461abca8857d838b0b490758c66b5e7e0eccb001af9fdbf358edba5e98"

    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        try {
          const response = await fetch(url, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
      fetchData();
    }, [url]);

    return { data, loading, error };
}