import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  fetchSingleArticle,
  updateSingleArticle,
} from "../../redux/actions/articlesActions";
import axiosWithAuth from "../../utils/axiosWithAuth";

const ArticleUpdate = ({ id, title, desc, url, ...props }) => {
  const [editArticle, setEditArticle] = useState({
    articleID: id,
    title: title,
    desc: desc,
    categoryID: 1,
    url: url,
  });

  useEffect(() => {
    // const id = props.match.params.id
    const id = editArticle.articleID;
    console.log("article id:", id);

    fetchSingleArticle(editArticle.articleID);
    axiosWithAuth()
      .get(`/api/articles/${id}`)
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
      <h2>Edit Your Article</h2>
      <form onSubmit={updateSingleArticle}>
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
        {/* <input
          type="text"
          name="category"
          value={editArticle.categoryID}
          onChange={handleChange}
          placeholder="Category..."
        /> */}
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

const mapDispatchToProps = () => {
  return {
    fetchSingleArticle,
  };
};

export default connect(null, {
  mapDispatchToProps,
})(ArticleUpdate);
