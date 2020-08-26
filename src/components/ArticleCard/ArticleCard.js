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
        <h3>{articleTitle}</h3>
        <p>{articleDesc}</p>
        <p>{category}</p>
        <p>{aboutCategory}</p>
        <select data-cy="moveCard" id="moveCard" name="moveCard">
            <option>  Move to...</option>
            {/* need to map categories here */}
        </select>
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

    <a href={url}>  
      <div className="article-btn">
      Go to article
      </div>
    </a>

      {/* <Modali.Modal {...modal}>
        <ArticleEditor articleID={articleID} toggleModal={toggleModal} />
      </Modali.Modal> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  // article: state.articlesReducer.data
};

export default connect(mapStateToProps, { deleteArticle, fetchSingleArticle })(ArticlesCard);
