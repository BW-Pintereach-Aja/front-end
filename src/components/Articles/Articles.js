import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchArticles, fetchCategories } from "../../redux/actions/articlesActions";
import { Route, Switch, NavLink} from 'react-router-dom';

import "./Articles.scss";

import ArticleCard from "../ArticleCard/ArticleCard";
import Category from "../Category/Category";
import CategoryList from "../CategoryList/CategoryList";
import ArticlesbyCategory from "../ArticlesbyCategory/ArticlesbyCategory";

const Articles = (props) => {
  const [articleCard, setArticleCard] = useState(props.articles);
  console.log("ArticleCard from Articles: ", articleCard);

  useEffect(() => {
    props.fetchArticles();
    props.fetchCategories();
   }, [fetchArticles, fetchCategories])
 
  // if (props.isFetching) {
  //   return <h2 className="loading">*** Loading Articles ***</h2>;
  // }
  const catID = props.category
   console.log("THESE ARE THE CATEGORY IDS", catID)
  console.log("THESE ARE THE ARTICLES:", props.articles);
  return (
    <div className="dashboard-display">
      <div className="dashboard-header">
        <h1 className="articles-title">All Articles:</h1>
        <Category categories={props.category} />
      </div>
      <CategoryList categories={props.category} />
      <Switch>
      <Route path="/articles/:name">
        <div className="cat-list">
          {props.category.map((c) => {
            if (c.id == catID){
              return (
                <ArticleCard                 
                article={c}
                key={c.articleID}
                id={c.articleID}
                url={c.url}
                articleTitle={c.articleTitle}
                articleDesc={c.articleDesc}
                category={c.category}
                aboutCategory={c.aboutCategory}
                articleCard={articleCard}
                setArticleCard={setArticleCard}
                />
              );
        }})}
        </div>
      </Route>
      <Route path="/articles">
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
      </Route>
      </Switch>
    </div>
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
