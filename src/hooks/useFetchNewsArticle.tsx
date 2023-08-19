import { useState, useEffect } from "react";
import NewsArticle from "../models/NewsArticle";
import { getData } from "../utils/api";


interface FetchStatus<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}

const useFetchNewsArticle = (articleId: string): FetchStatus<NewsArticle> => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus<NewsArticle>>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchNewsArticle = async () => {
      try {
        const articles = await getData<NewsArticle[]>("/data/articles.json");
        const article = articles.find((article) => article.id === articleId);
        setFetchStatus({
          loading: false,
          data: article || null,
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

    fetchNewsArticle();
  }, [articleId]);

  return fetchStatus;
};

export default useFetchNewsArticle;
