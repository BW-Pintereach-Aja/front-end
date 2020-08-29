import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ArticleCard from '../ArticleCard/ArticleCard'

import { fetchCategories } from "../../redux/actions/articlesActions";


const ArticlesbyCategory = ({
    id,
    url,
    articleTitle,
    articleDesc,
    category,
    categories,
    article
}) => {

    const [articleCard, setArticleCard] = useState(article);
    const params = useParams();
    const catID = categories
    const categoryID = params.id;
    console.log("This is catID from ArticlesbyCategory", catID)
    console.log("This is params from ArticlesbyCategory", categoryID)
    



    return(
        <div>
            <div className="category-list">
                <p>hi, i'm articles by category</p>
                {categories.map((c) => {
                    console.log('ArticlesbyCategory-c.id:', c.id)
                    // console.log('ArticlesbyCategory-category ID:', categoryID)
                    if (c.id == catID){
                        return (
                            <ArticleCard
                            article={article}
                            key={article.articleID}
                            id={article.articleID}
                            url={article.url}
                            articleTitle={article.articleTitle}
                            articleDesc={article.articleDesc}
                            category={article.category}
                            aboutCategory={article.aboutCategory}
                            articleCard={articleCard}
                            setArticleCard={setArticleCard}
                          />
                            );
            }})}
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    // article: state.articlesReducer.data
    return {
      categories: state.articlesReducer.categories
    }
  };

export default connect(mapStateToProps, { fetchCategories })(ArticlesbyCategory);