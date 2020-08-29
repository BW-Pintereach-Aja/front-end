import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  deleteArticle,
  fetchSingleArticle,
  fetchCategories,
  updateSingleArticle,
} from "../../redux/actions/articlesActions";

import "./ArticleCard.scss";

const ArticlesCard = ({
  id,
  url,
  articleTitle,
  articleDesc,
  category,
  deleteArticle,
  categories,
  updateSingleArticle,
}) => {
  const handleChange = (e) => {
    const catID = categories.filter(
      (c) => c.name.toLowerCase() === e.target.value.toLowerCase()
    );
    const newArticle = {
      url,
      title: articleTitle,
      desc: articleDesc,
      categoryID: catID[0].id,
      articleID: id,
    };
    updateSingleArticle(id, newArticle);
    console.log("These are categories from ArticleCard", catID);
    window.location.reload();
  };
  return (
    <div className="card-body">
      <select
        onChange={handleChange}
        data-cy="moveCard"
        id="moveCard"
        name="moveCard"
      >
        <option> Move to...</option>
        {categories.map((c) => {
          return <option key={c.id}>{c.name}</option>;
        })}
      </select>
      <h3 className="article-title">{articleTitle}</h3>
      <p className="article-desc">{articleDesc}</p>
      <label>Category:</label>
      <p className="category">{category}</p>
      <a href={url}>
        <div className="article-btn">Go to article</div>
      </a>
      <div className="edit-delete-container">
        <Link
          to={`/article-update/${id}`}
          className="edit-btn"
          onClick={(e) => fetchSingleArticle(id)}
        >
          Edit
        </Link>
        <button
          className="delete-btn"
          onClick={(e) => {
            e.stopPropagation();
            deleteArticle(id);
            window.location.reload();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.articlesReducer.categories,
  };
};

export default connect(mapStateToProps, {
  deleteArticle,
  fetchSingleArticle,
  fetchCategories,
  updateSingleArticle,
})(ArticlesCard);
