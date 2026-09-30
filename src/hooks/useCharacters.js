import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();
      setCharacters(data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { characters, loading, error, refetch: fetchCharacters };
}
