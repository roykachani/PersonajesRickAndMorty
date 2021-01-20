import { useState, useEffect } from 'react';

const BASE_URL = 'https://rickandmortyapi.com/api';

//CUSTOM HOOK - reutilizable -exports -exporta directo

export const useFetch = (endpoint, inicialState = {}) => {
  const [data, setData] = useState(inicialState);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const result = await fetch(`${BASE_URL}/${endpoint}`);
      const data = await result.json();
      setData(data);
      setFetching(false);
    } catch (e) {
      setData(inicialState);
      setFetching(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return [data, fetching, error];
};
