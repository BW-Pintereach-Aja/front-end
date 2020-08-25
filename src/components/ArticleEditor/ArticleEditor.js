import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const ArticleEditor = (props) => {
  const [editArticle, setEditArticle] = useState(props.articles);

  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/articles/${editArticle.articleID}`)
      .then((res) => {
        setEditArticle(res.data);
      })
      .catch((err) =>
        console.error(
          "could not bring the article you want to edit: ",
          err.message
        )
      );
  }, []);

  const submitArticleEdited = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/articles/${editArticle.userID}/user`, editArticle)
      .then((res) => {
        console.log(res.data);
        setEditArticle(res.data);
        history.push("/articles/");
      })
      .catch((err) =>
        console.error("could not add new article: ", err.message)
      );
    console.log(editArticle);
  };

  const handleChange = (e) => {
    setEditArticle({
      ...editArticle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="new-article">
      <h2>Article Editor</h2>
      <form onSubmit={submitArticleEdited}>
        <input
          type="text"
          name="articleTitle"
          value={editArticle.articleTitle}
          onChange={handleChange}
          placeholder="Title..."
        />
        <input
          type="text"
          name="articleDesc"
          value={editArticle.articleDesc}
          onChange={handleChange}
          placeholder="Description..."
        />
        <input
          type="text"
          name="category"
          value={editArticle.category}
          onChange={handleChange}
          placeholder="Category..."
        />
        <input
          type="text"
          name="url"
          value={editArticle.url}
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
    // articleID: state.articleID,
    // url: state.url,
    // articleTitle: state.articleTitle,
    // articleDesc: state.articleDesc,
    // category: state.category,
    // aboutCategory: state.aboutCategory,
    articles: state.articlesReducer.data,
  };
};

export default connect(mapStateToProps, {})(ArticleEditor);
