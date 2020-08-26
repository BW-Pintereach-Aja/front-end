import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteArticle, fetchSingleArticle } from "../../redux/actions/articlesActions";

import ArticleEditor from "../ArticleCard/ArticleCard";

import "./ArticleCard.scss";

const ArticlesCard = ({
  id,
  url,
  articleTitle,
  articleDesc,
  category,
  aboutCategory,
  deleteArticle,
}) => {
  return (
    <div className="card-body">
      <a href={url}>
        <h3>{articleTitle}</h3>
        <p>{articleDesc}</p>
        <p>{category}</p>
        <p>{aboutCategory}</p>
      </a>
      <div className="edit-delete-container">
        <Link
          to="/article-editor/"
          className="edit-btn"
          onClick={(e) => fetchSingleArticle(id)}
        >
          Edit
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteArticle(id);
            window.location.reload();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // article: state.articlesReducer.data
};

export default connect(mapStateToProps, { deleteArticle, fetchSingleArticle })(ArticlesCard);
