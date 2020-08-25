import React from "react";

import "./ArticleCard.scss";

const ArticlesCard = ({
  url,
  articleTitle,
  articleDesc,
  category,
  aboutCategory,
}) => {
  return (
    <div className="card-body">
      
        <h3>{articleTitle}</h3>
        <p>{articleDesc}</p>
        <p>{category}</p>
        <p>{aboutCategory}</p>
        <select data-cy="moveCard" id="moveCard" name="moveCard">
            <option>  Move to...</option>
            {/* need to map categories here */}
        </select>

    <a href={url}>  
      <div className="article-btn">
      Go to article
      </div>
    </a>
    </div>
  );
};

export default ArticlesCard;
