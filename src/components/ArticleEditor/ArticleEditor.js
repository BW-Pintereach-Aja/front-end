import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  fetchSingleArticle,
  updateSingleArticle,
  ARTICLE_UPDATE_SUCCESS,
} from "../../redux/actions/articlesActions";
import axiosWithAuth from "../../utils/axiosWithAuth";

import "./ArticleEditor.scss";

const ArticleUpdate = ({ id, title, desc, url, ...props }) => {
  const history = useHistory();

  const [editArticle, setEditArticle] = useState({
    title: title,
    desc: desc,
    categoryID: 1,
    url: url,
  });

  const articleID = props.match.params.id;

  useEffect(() => {
    console.log("article id:", articleID);

    fetchSingleArticle(editArticle.articleID);
    axiosWithAuth()
      .get(`/api/articles/${articleID}`)
      .then((res) => {
        setEditArticle(res.data[0]);
        console.log("Single Article ---> ", props.articles);
      })
      .catch((err) => console.error(err.response));
  }, []);

  console.log("editing article here:", editArticle);

  const handleChange = (e) => {
    setEditArticle({
      ...editArticle,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdate = (e) => {
    e.preventDefault();
    props.updateSingleArticle(articleID, editArticle);
    history.push("/articles/");
  };

  return (
    
      <form onSubmit={submitUpdate}>
        <div className="edit-article">
        <h2>Edit Your Article</h2>
        <label>Title:
        <input
          className="edit-input" 
          type="text"
          name="title"
          value={editArticle.title}
          onChange={handleChange}
          placeholder="Title..."
        /></label>
        <label>Description:
        
        <input
          className="edit-input"
          type="text"
          name="desc"
          value={editArticle.desc}
          onChange={handleChange}
          placeholder="Description..."
        /></label>
        <label>URL:
        <input
          className="edit-input"
          type="text"
          name="url"
          value={editArticle.url}
          onChange={handleChange}
          placeholder="URL..."
        /></label>
        <button className="edit-btn">Update Article</button>     
    </div>
    </form>
  );
};

// const mapDispatchToProps = (dispatch) => {
// 	console.log("*****************")
//   return {

//     fetchSingleArticle,
//     updateSingleArticle: () => dispatch({ type: ARTICLE_UPDATE_SUCCESS }),
//   };
// };

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { updateSingleArticle })(ArticleUpdate);
