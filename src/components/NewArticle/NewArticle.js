import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  addNewArticle,
  fetchCategories,
} from "../../redux/actions/articlesActions";

import "./NewArticle.scss";

const NewArticle = (props) => {
  const history = useHistory();

  const [newArticle, setNewArticle] = useState({
    url: "",
    title: "",
    desc: "",
    categoryID: "",
  });

  const userID = window.localStorage.getItem("userID");

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };
  console.log("NEW ARTICLES CATEGORIES ", props.categories);
  useEffect(() => {
    props.fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewArticle(userID, newArticle);
    history.push("/articles/");
  };

  return (
    
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="new-article">
        <h2 className="art-title">Add New Article</h2>
        <label>Title:
        <input
          className="new-input"
          type="text"
          name="title"
          value={newArticle.title}
          onChange={handleChange}
          placeholder="Title..."
        /></label>
        <label>Description:
        <input
          className="new-input"
          type="text"
          name="desc"
          value={newArticle.desc}
          onChange={handleChange}
          placeholder="Description..."
        /></label>
        <label>URL:
        <input
          className="new-input"
          type="text"
          name="url"
          value={newArticle.url}
          onChange={handleChange}
          placeholder="URL..."
        /></label>
        <select
          className="categoryID"
          name="categoryID"
          value={newArticle.categoryID}
          onChange={handleChange}
        >
          <option selected default>
            -- Select a Category --
          </option>
          {props.categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>
        <button className="add-btn" type="submit">Add Article</button>
      </div> 
      </form>
   
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.articlesReducer.categories || [],
  };
};

export default connect(mapStateToProps, { addNewArticle, fetchCategories })(
  NewArticle
);
