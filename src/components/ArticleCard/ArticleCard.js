import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteArticle } from "../../redux/actions/articlesActions";

import ArticleEditor from "../ArticleCard/ArticleCard";

import "./ArticleCard.scss";

const initial_state = {
  article: "",
};

const ArticlesCard = ({
  id,
  url,
  articleTitle,
  articleDesc,
  category,
  aboutCategory,
  articleCard,
  setArticleCard,
  article,
  deleteArticle
}) => {
  const [articleToEdit, setArticleToEdit] = useState(article);

  // const deleteArticle = (articleID) => {
  //   axiosWithAuth()
  //     .delete(
  //       `/api/articles/${articleToEdit.articleID}/remove-article`,
  //       articleToEdit
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setArticleCard(
  //         initial_state.article.filter(
  //           (item) => item.id !== articleToEdit.articleID
  //         )
  //       );
  //     })
  //     .catch((err) => console.error(err.message));
  // };
  return (
    <div className="card-body">
      <a href={url}>
        <h3>{articleTitle}</h3>
        <p>{articleDesc}</p>
        <p>{category}</p>
        <p>{aboutCategory}</p>
      </a>
      <div className="edit-delete-container">
        <Link to="/article-editor/"
        // onClick={toggleModal} 
        className="edit-btn">
          Edit
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteArticle(id);
            console.log(articleCard);
          }}
        >
          Delete
        </button>
      </div>
      {/* <Modali.Modal {...modal}>
        <ArticleEditor articleID={articleID} toggleModal={toggleModal} />
      </Modali.Modal> */}
    </div>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { deleteArticle })(ArticlesCard);
