import { useState, useEffect } from "react";
import NewsArticle from "../models/NewsArticle";
import { getData } from "../utils/api";

interface FetchStatus<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}

const useFetchNewsArticles = (): FetchStatus<NewsArticle[]> => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus<NewsArticle[]>>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        const response = await getData<NewsArticle[]>("/data/articles.json");
        setFetchStatus({
          loading: false,
          data: response,
          error: null,
        });
      } catch (error) {
        setFetchStatus({
          loading: false,
          data: null,
          error: error as Error,
        });
      }
    };

    fetchNewsArticles();
  }, []);

  return fetchStatus;
};

export default useFetchNewsArticles;
