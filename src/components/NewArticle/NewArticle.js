import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initial_state = {
  articleID: new Date(),
  articleTitle: "",
  articleDesc: "",
  category: "",
  url: "",
  user: "",
  userID: "",
};

const NewArticle = () => {
  const [newArticle, setNewArticle] = useState(initial_state);

  const history = useHistory();

  const submitNewArticle = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/articles/${newArticle.userID}/user`, newArticle)
      .then((res) => {
        console.log(res.data);
        setNewArticle(res.data);
        history.push("/articles/");
      })
      .catch((err) =>
        console.error("could not add new article: ", err.message)
      );
    console.log(newArticle);
  };

  const handleChange = (e) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="new-article">
      <h2>Add New Article</h2>
      <form onSubmit={submitNewArticle}>
        <input
          type="text"
          name="articleTitle"
          value={newArticle.articleTitle}
          onChange={handleChange}
          placeholder="Title..."
        />
        <input
          type="text"
          name="articleDesc"
          value={newArticle.articleDesc}
          onChange={handleChange}
          placeholder="Description..."
        />
        <input
          type="text"
          name="category"
          value={newArticle.category}
          onChange={handleChange}
          placeholder="Category..."
        />
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

export default NewArticle;
