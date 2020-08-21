import React from "react";

const ArticlesCard = ({
  url,
  articleTitle,
  articleDesc,
  category,
  aboutCategory,
}) => {
  return (
    <div>
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
