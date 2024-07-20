import React, { useRef } from "react";
import { usePost } from "../contexts/PostContext";

function PostForm() {
  const { addPost } = usePost();

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, visibility } = formRef.current;
    addPost(title.value.trim(), description.value.trim(), visibility.value);
    title.value = "";
    description.value = "";
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white w-full shadow rounded-lg p-5 space-y-6"
    >
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Write Post Title"
        className="bg-gray-200 w-full rounded-lg shadow border p-2"
      />
      <textarea
        name="description"
        id="description"
        className="bg-gray-200 w-full rounded-lg shadow border p-2"
        rows={5}
        placeholder="Write Post Description"
      />
      <div className="flex gap-4 mt-3">
        <select
          className=" p-2 rounded-lg bg-gray-200 shadow border float-left"
          id="visibility"
          name="visibility"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>

        <button
          type="submit"
          className="float-right bg-indigo-600 hover:bg-indigo-900 text-white px-2 py-1 text-sm rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PostForm;
