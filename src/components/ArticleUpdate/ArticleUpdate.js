import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  fetchSingleArticle,
  updateSingleArticle,
} from "../../redux/actions/articlesActions";
import axiosWithAuth from "../../utils/axiosWithAuth";

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

    axiosWithAuth()
      .get(`/api/articles/${articleID}`)
      .then((res) => {
        setEditArticle(res.data[0]);
        console.log("Single Article ---> ", editArticle.articleID);
      })
      .catch((err) => console.error(err.response));
  }, []);

  useEffect(() => {
    fetchSingleArticle(id);
  }, []);

  const handleChange = (e) => {
    setEditArticle({
      ...editArticle,
      [e.target.name]: e.target.value,
    });
  };

  const submitUpdateArticle = (e) => {
    e.preventDefault();
    updateSingleArticle(articleID, editArticle);
    history.push("/articles/");
  };

  return (
    <div className="new-article">
      <h2>Edit Your Article</h2>
      <form onSubmit={submitUpdateArticle}>
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

const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.data,
    isFetching: state.articlesReducer.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleArticle,
    updateSingleArticle,
  };
};

export default connect(mapStateToProps, {
  mapDispatchToProps,
})(ArticleUpdate);
