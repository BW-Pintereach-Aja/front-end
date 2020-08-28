import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchArticles, fetchCategories } from "../../redux/actions/articlesActions";

import "./Articles.scss";

import ArticleCard from "../ArticleCard/ArticleCard";
import Category from "../Category/Category";

const Articles = (props) => {
  const [articleCard, setArticleCard] = useState(props.articles);
  console.log("Article Card: ", articleCard);

  useEffect(() => {
    props.fetchArticles();
    props.fetchCategories();
   }, [fetchArticles, fetchCategories])
 
  // if (props.isFetching) {
  //   return <h2 className="loading">*** Loading Articles ***</h2>;
  // }

  console.log("ARTICLES", props.articles);
  return (
    <>
      <div className="category">
        <Category categories={props.category} />
      </div>
      <div className="card-list">
        {props.articles.map((article) => {
          return (
            <ArticleCard
              article={article}
              key={article.articleID}
              id={article.articleID}
              url={article.url}
              articleTitle={article.articleTitle}
              articleDesc={article.articleDesc}
              category={article.category}
              aboutCategory={article.aboutCategory}
              articleCard={articleCard}
              setArticleCard={setArticleCard}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.data,
    isFetching: state.articlesReducer.isFetching,
    category: state.articlesReducer.categories,
  };
};
export default connect(mapStateToProps, { fetchArticles, fetchCategories})(Articles);
