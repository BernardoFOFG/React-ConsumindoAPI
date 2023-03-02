import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogTech from "../axios/config";

export const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogTech.post("/posts"),
      {
        body: post,
      };
      alert("Post created successfully")
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-center mb-1">Inserir novo Post:</h2>
      <form
        className="max-w-[500px] w-full my-0 mx-auto"
        onSubmit={(e) => createPost(e)}
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="m-2">
            Título:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite um título"
            className="p-2 rounded-[5px] border-none text-black"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="body" className="m-2">
            Conteúdo:
          </label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite um conteúdo"
            className="p-2 rounded-[5px] border-none text-black"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Criar post"
          className="p-2 rounded-[5px] border-none bg-white text-[#0e1217] cursor-pointer hover:bg-[#0e1217] hover:ring-1 hover:ring-white hover:text-white"
        />
      </form>
    </div>
  );
};
