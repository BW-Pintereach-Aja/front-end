import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addArticle, greet } from "../../redux/actions/articlesActions";

import "./Articles.scss";

import ArticleCard from "../ArticleCard/ArticleCard";
import Category from "../Category/Category";

const Articles = (props) => {
  useEffect(() => {
    props.addArticle();
  }, []);
  return (
    <>
    <div className="category">
      <Category />
    </div>
    <div className="card-list">
      {props.articles.map((article) => {
        return (
          <ArticleCard
            key={article.articleID}
            url={article.url}
            articleTitle={article.articleTitle}
            articleDesc={article.articleDesc}
            category={article.category}
            aboutCategory={article.aboutCategory}
          />
        );
      })}
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.articlesReducer.message,
    articles: state.articlesReducer.data,
  };
};
export default connect(mapStateToProps, { addArticle, greet })(Articles);
