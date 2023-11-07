import { useState } from "react";
import { searchMovies } from "../service";
import { useRef, useMemo, useCallback } from "react";
export function useMovies({ search, sort, setIsSearching }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusSearch = useRef(search);

  const getMovies = useCallback((search) => {
    if (search === previusSearch.current) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setIsSearching(true);
      previusSearch.current = search;
      const newmovies = searchMovies({ search });
      setMovies(newmovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, getMovies, loading };
}
