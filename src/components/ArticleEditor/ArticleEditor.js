import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  fetchSingleArticle,
  updateSingleArticle,
} from "../../redux/actions/articlesActions";

import "./ArticleEditor.scss";

const ArticleEditor = (props) => {
  const [editArticle, setEditArticle] = useState({
    title: props.articleTitle,
    desc: props.articleDesc,
    categoryID: props.category,
    url: props.url,
  });

  console.log("editing article here:", editArticle);

  // const history = useHistory();

  useEffect(() => {
    fetchSingleArticle(props.article.id);
  }, []);

  const handleChange = (e) => {
    setEditArticle({
      ...editArticle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="edit-article">
      <h2>Edit Your Article</h2>
      <form onSubmit={updateSingleArticle}>
        <input
          type="text"
          name="articleTitle"
          value={props.articleTitle}
          onChange={handleChange}
          placeholder="Title..."
        />
        <input
          type="text"
          name="articleDesc"
          value={props.articleDesc}
          onChange={handleChange}
          placeholder="Description..."
        />
        <input
          type="text"
          name="category"
          value={props.category}
          onChange={handleChange}
          placeholder="Category..."
        />
        <input
          type="text"
          name="url"
          value={props.url}
          onChange={handleChange}
          placeholder="URL..."
        />

        <button>Add Article</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    article: state.articlesReducer.data,
  };
};

export default connect(mapStateToProps, {
  fetchSingleArticle,
  updateSingleArticle,
})(ArticleEditor);
