import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import NewsArticle from "../../models/NewsArticle";
import styles from "./NewsPreview.module.scss";

interface Props {
  news: NewsArticle;
}

const NewsPreview = ({news}: Props) => {
  const { title, urlToImage, description, id } = news;
  return (
    <Link to={`/news/${id}`} className={styles.newsLink}>
      <div key={title} className={styles.newsItem}>
        <img src={urlToImage} alt={title} />
        <h2>{title}</h2>
        <p>{parse(description)}</p>
      </div>
    </Link>
  );
}

export default NewsPreview;