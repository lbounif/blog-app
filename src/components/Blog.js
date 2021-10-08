import React from "react";
import Article from "./Article";

const Blog = ({articles}) => {
  return (
    <div className="blog">
      {articles.map((article) => (
        <Article 
            title={article.title} 
            body={article.text} />
      ))}
    </div>
  );
};

export default Blog;
