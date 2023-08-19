import React from "react";
import axios from "axios";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

import styles from "./NewsOverview.module.scss";

export interface NewsArticle {
  id: string;
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}


const NewsOverview: React.FC = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/data/articles.json")
        console.log(response.data)
        setData(response.data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNewsArticles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.newsOverview}>
      <h1>News Overview</h1>
      <div className={styles.newsList}>
        {data?.map(({
          title,
          urlToImage,
          description,
          id,
                    }: NewsArticle) => (
          <Link to={`/news/${id}`} key={id} className={styles.newsLink}>
            <div key={title} className={styles.newsItem}>
              <img src={urlToImage} alt={title} />
              <h2>{title}</h2>
              <p>{parse(description)}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default NewsOverview;
