import React from "react";
import useFetchNewsArticles from "../../hooks/useFetchNewsArticles";
import usePagination from "../../hooks/usePagination";
import NewsArticle from "../../models/NewsArticle";
import { Loader } from "../Loader/Loader";
import NewsPreview from "../NewsPreview/NewsPreview";
import Pagination from "../Pagination/Pagination";
import styles from "./NewsOverview.module.scss";

const NewsOverview: React.FC = () => {
  const { loading, data, error } = useFetchNewsArticles();
  const { data: news, ...rest } = usePagination(data || []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <div className={styles.newsOverview}>
      <h1>News</h1>
      <div className={styles.newsList}>
        {news?.map((newsPreview: NewsArticle) => (
          <NewsPreview news={newsPreview} key={newsPreview.title} />
        ))}
      </div>
      <Pagination {...rest} />
    </div>
  );
};

export default NewsOverview;
