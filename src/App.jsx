import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchData } from "./api/fetchData";

export default function App() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetchPost();
  });

  const fetchPost = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setPost(res.data);
  };

  return (
    <div>
      <h1>Users</h1>
      {posts ? (
        <>
          {posts.map((data, index) => {
            return (
              <h3 key={index}>
                <span style={{ padding: "1rem" }}>{data.id})</span>
                {data.name}
              </h3>
            );
          })}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
