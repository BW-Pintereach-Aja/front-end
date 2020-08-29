import React from "react";
import { connect } from "react-redux";
import { Link, NavLink} from "react-router-dom";

import "./CategoryList.scss"

import { fetchCategories } from "../../redux/actions/articlesActions";


const CategoryList = ({categories}) => {
    console.log("CategoryList:", categories)

    return(
      <div className="cat-list">
        <h3>Your Categories:</h3>
        {categories.map((c) => (
            <NavLink
                key={c.id}
                to={`/articles/${c.name}`}
                className="category-name">
                    {c.name}
                </NavLink>
        ))}
      </div>
  );
  }
const mapStateToProps = (state) => {
    // article: state.articlesReducer.data
    return {
      categories: state.articlesReducer.categories
    }
  };

export default connect(mapStateToProps, { fetchCategories })(CategoryList);