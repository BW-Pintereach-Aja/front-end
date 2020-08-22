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
      <a href={url}>
        <h3>{articleTitle}</h3>
        <p>{articleDesc}</p>
        <p>{category}</p>
        <p>{aboutCategory}</p>
      </a>
    </div>
  );
};

export default ArticlesCard;
