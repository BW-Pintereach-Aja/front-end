<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addArticle, greet } from '../../redux/actions/articlesActions'

const Articles = (props) => {
	useEffect(() => {
		props.addArticle()
		props.greet()
	}, [])
	console.log('GREET', props.message)
	return (
		<div>
			{/* {props.articles.map(article => {
        return <p>{article.articleTitle}</p>
      })} */}
			<button onClick={() => props.addArticle()}>CLICK</button>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		message: state.message,
		articles: state.articles
	}
}

export default connect(mapStateToProps, { addArticle, greet })(Articles)
=======
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../redux/actions/articlesActions";

import "./Articles.scss";

import ArticleCard from "../ArticleCard/ArticleCard";
import Category from "../Category/Category";

const Articles = (props) => {
  const [articleCard, setArticleCard] = useState(props.articles);
  console.log("Article Card: ", articleCard);

  useEffect(() => {
    props.fetchArticles();
  }, []);

  // if (props.isFetching) {
  //   return <h2 className="loading">*** Loading Articles ***</h2>;
  // }

  return (
    <>
    <div className="category">
      <Category />
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
  };
};
export default connect(mapStateToProps, { fetchArticles })(Articles);
>>>>>>> 3075c29a20d633ff2011db1dcdf27a7661bba241
