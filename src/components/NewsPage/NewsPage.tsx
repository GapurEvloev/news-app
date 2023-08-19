import axios from "axios";
import parse from "html-react-parser";
import React from 'react';
import { useParams } from "react-router-dom";
import { NewsArticle } from "../NewsOverview/NewsOverview";

const News = () => {
  const [data, setData] = React.useState<NewsArticle>({} as NewsArticle);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // articleId from the URL parameter
  const {id: articleId} = useParams();

  React.useEffect(() => {
    const fetchNewsArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/data/articles.json")
        const article = response.data.data.find((article: NewsArticle) => article.id === articleId) as NewsArticle;

        console.log({article})
        setData(article);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNewsArticles();
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.urlToImage} alt={data.title} />
      <p>{data.description}</p>
      <p>{parse(data.content)}</p>
    </div>
  )
}

export default News