/** @format */
import React from "react";
import { useHistory } from "react-router";

import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      <h3>Blog details</h3>
      {isLoading && <div>Loading content...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Escrito por {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
