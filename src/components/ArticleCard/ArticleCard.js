import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteArticle, fetchSingleArticle, fetchCategories } from "../../redux/actions/articlesActions";

import "./ArticleCard.scss";

const ArticlesCard = ({
  id,
  url,
  articleTitle,
  articleDesc,
  category,
  aboutCategory,
  deleteArticle,
  categories
}) => {
  return (
    <div className="card-body">
        <h3>Title: {articleTitle}</h3>
        <p>Description: {articleDesc}</p>
        <p>Category: {category}</p>
        <p>About: {aboutCategory}</p>
        <select data-cy="moveCard" id="moveCard" name="moveCard">
            <option>  Change Category to...</option>

        </select>
      <div className="edit-delete-container">
        <Link
          to={`/article-update/${id}`}
          className="edit-btn"
          onClick={(e) => fetchSingleArticle(id)}
        >
          Edit
        </Link>
        <button className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteArticle(id);
            window.location.reload();
          }}
        >
          Delete
        </button>
      </div>

    <a href={url}>  
      <div className="article-btn">
      Go to article
      </div>
    </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  // article: state.articlesReducer.data
};

export default connect(mapStateToProps, { deleteArticle, fetchSingleArticle, fetchCategories })(ArticlesCard);
