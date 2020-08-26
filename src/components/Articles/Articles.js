import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions/articlesActions";

import "./Articles.scss";

import ArticleCard from "../ArticleCard/ArticleCard";

const Articles = (props) => {
  const [articleCard, setArticleCard] = useState(props.articles);
  console.log("Article Card: ", articleCard);

  useEffect(() => {
    props.fetchArticles();
  }, []);

  if (props.isFetching) {
    return <h2 className="loading">*** Loading Articles ***</h2>;
  }

  return (
    <div className="card-list">
      {props.articles.map((article) => {
        return (
          <ArticleCard
            article={article}
            key={article.articleID}
            id={article.articleID}
            url={article.url}
            title={article.articleTitle}
            desc={article.articleDesc}
            category={article.category}
            aboutCategory={article.aboutCategory}
            articleCard={articleCard}
            setArticleCard={setArticleCard}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.data,
    isFetching: state.articlesReducer.isFetching,
  };
};
export default connect(mapStateToProps, { fetchArticles })(Articles);
