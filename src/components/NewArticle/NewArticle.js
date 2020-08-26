import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { addNewArticle } from "../../redux/actions/articlesActions";

const NewArticle = (props) => {
  const history = useHistory();

  const [newArticle, setNewArticle] = useState({
    url: "",
    title: "",
    desc: "",
    categoryID: 1,
  });

  const userID = window.localStorage.getItem("userID");

  const handleChange = (e) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="new-article">
      <h2>Add New Article</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("SUBMIT", newArticle);
          props.addNewArticle(userID, newArticle);
          history.push("/articles/")
          // window.location.reload();
        }}
      >
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={newArticle.title}
          onChange={handleChange}
          placeholder="Title..."
        />
        <label>Description</label>
        <input
          type="text"
          name="desc"
          value={newArticle.desc}
          onChange={handleChange}
          placeholder="Description..."
        />
        <label>Article Link</label>
        <input
          type="text"
          name="url"
          value={newArticle.url}
          onChange={handleChange}
          placeholder="URL..."
        />
        <button>Add Article</button>
      </form>
    </div>
  );
};

export default connect(null, { addNewArticle })(NewArticle);
