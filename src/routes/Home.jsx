import React, { useEffect, useState } from "react";
import blogTech from "../axios/config";
import { Link } from "react-router-dom";
export const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogTech.get("/posts");
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="flex flex-col">
      <h1 className="uppercase text-center mb-6">Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div
            className="flex flex-col justify-center mb-6 py-6 border-b-[1px] border-[#777]"
            key={post.id}
          >
            <h2 className="mb-4 first-letter:uppercase">{post.title}</h2>
            <p className="mb-4">{post.body}</p>
            <Link
              to={`/posts/${post.id}`}
              className="flex items-center justify-center rounded-lg text-black border-[1px] bg-white py-2 px-4 w-24 h-10 hover:bg-[#0e1217] hover:text-white transition-all"
            >
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
