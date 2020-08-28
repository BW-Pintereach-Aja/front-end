import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteArticle, fetchSingleArticle } from "../../redux/actions/articlesActions";

import ArticleEditor from "../ArticleEditor/ArticleEditor";

import "./ArticleCard.scss";

const ArticlesCard = ({
  id,
  url,
  articleTitle,
  articleDesc,
  category,
  aboutCategory,
  deleteArticle,
  ...props
}) => {
  return (
    <div className="card-body">
        <select data-cy="moveCard" id="moveCard" name="moveCard">
            <option>  Move to...</option>
            {/* need to map categories here */}
        </select>      
        <h3 className="article-title">{articleTitle}</h3>
        <p className="article-desc">{articleDesc}</p>
        <label>Category:</label>
        <p className="category">{category}</p>
        <a href={url}>  
          <div className="article-btn">
          Go to article
          </div>
        </a>
      <div className="edit-delete-container">
        <Link
          to="/article-update/:id"
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
    </div>
  );
};

const mapStateToProps = (state) => {
  // article: state.articlesReducer.data
};

export default connect(mapStateToProps, { deleteArticle, fetchSingleArticle })(ArticlesCard);
