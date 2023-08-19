import React from 'react';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import { useParams } from "react-router-dom";
import useFetchNewsArticle from "../../hooks/useFetchNewsArticle";
import { Loader } from "../Loader/Loader";

import styles from "./NewsPageContent.module.scss";

const NewsPageContent = () => {
  const {id: articleId} = useParams();
  const { loading, data, error } = useFetchNewsArticle(articleId as string);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error?.message}</p>;
  }

  return (
    <div
      className={styles.newsPage}
    >
      <Helmet>
        {/* OpenGraph Tags */}
        <meta property="og:title" content={data?.title}/>
        <meta property="og:description" content={data?.description} />
        <meta property="og:image" content={data?.urlToImage} />
        {/* SEO Relevant Tags */}
        <meta name="description" content={data?.description} />
      </Helmet>
      {
        data && (
          <>
            <button
              onClick={() => window.history.back()}
              className={styles.backBtn}
            >
              {'<'} Back
            </button>
            <h1
              className={styles.title}
            >{data.title}</h1>
            <div className={styles.data}>
              <time dateTime={data.publishedAt}>{
                new Date(data.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }</time>
            </div>
            <img src={data.urlToImage} alt={data.title} className={styles.img} />
            <p>{data.description}</p>
            <p>{parse(data.content)}</p>
          </>
        )
      }
    </div>
  )
}

export default NewsPageContent