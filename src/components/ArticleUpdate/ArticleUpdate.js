import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  fetchSingleArticle,
  updateSingleArticle,
} from "../../redux/actions/articlesActions";
import axiosWithAuth from "../../utils/axiosWithAuth";

import "./ArticleUpdate.scss";

const ArticleUpdate = ({ id, title, desc, url, ...props }) => {
  const [editArticle, setEditArticle] = useState({
    articleID: id,
    title: title,
    desc: desc,
    categoryID: 1,
    url: url,
  });

  const articleID = props.match.params.id;

  useEffect(() => {
    // const id = props.match.params.id

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
  console.log("articles: ", props.article);

  console.log("Single Article ---> ", props.articles);

  useEffect(() => {
    fetchSingleArticle(id);
  }, []);

  const handleChange = (e) => {
    setEditArticle({
      ...editArticle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="new-article">
      <form onSubmit={updateSingleArticle(articleID, editArticle)}>
        <h2>Edit Your Article</h2>
        <input
          type="text"
          name="title"
          value={editArticle.title}
          onChange={handleChange}
          placeholder="Title..."
        />
        <input
          type="text"
          name="desc"
          value={editArticle.desc}
          onChange={handleChange}
          placeholder="Description..."
        />
        <input
          type="text"
          name="url"
          value={editArticle.url}
          onChange={handleChange}
          placeholder="URL..."
        />
        <button>Update Article</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = () => {
  return {
    fetchSingleArticle,
  };
};

export default connect(null, {
  mapDispatchToProps,
})(ArticleUpdate);
