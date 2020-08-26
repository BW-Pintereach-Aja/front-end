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
<<<<<<< HEAD
      <a href={url}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{category}</p>
        <p>{aboutCategory}</p>
        <h2>Params: {props.params}</h2>
      </a>
=======
      
        <h3>{articleTitle}</h3>
        <p>{articleDesc}</p>
        <p>{category}</p>
        <p>{aboutCategory}</p>
        <select data-cy="moveCard" id="moveCard" name="moveCard">
            <option>  Move to...</option>
            {/* need to map categories here */}
        </select>
>>>>>>> feature/categories
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
