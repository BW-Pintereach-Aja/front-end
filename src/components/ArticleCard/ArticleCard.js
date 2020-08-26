import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteArticle, fetchSingleArticle } from "../../redux/actions/articlesActions";

import ArticleEditor from "../ArticleCard/ArticleCard";

import "./ArticleCard.scss";

const ArticlesCard = ({
  id,
  url,
  title,
  desc,
  category,
  aboutCategory,
  deleteArticle,
  ...props
}) => {
  return (
    <div className="card-body">
      <a href={url}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{category}</p>
        <p>{aboutCategory}</p>
        {/* <h2>Params: {props.params}</h2> */}
      </a>
      <div className="edit-delete-container">
        <Link
          to={`/article-update/${id}`}
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

// const mapStateToProps = (state) => {
//   // article: state.articlesReducer.data
// };

export default connect(null, { deleteArticle, fetchSingleArticle })(ArticlesCard);
