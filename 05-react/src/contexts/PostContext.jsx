import { createContext, useContext, useReducer } from "react";

// const INITIAL_POST_STATE = [];

const INITIAL_POST_STATE = [
  {
    title: "Welcome to Our Blog!",
    description: "This is our very first post. Stay tuned for more updates!",
    visibility: "public", // or "private" based on your application's needs
    postTime: new Date(), // Current time in ISO format
  },
];

const postReducer = (currPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currPostList];
    case "DEL_POST":
      return currPostList.filter((_, index) => index != action.payload);
    default:
      return currPostList;
  }
};

export const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

export default function PostProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postReducer,
    INITIAL_POST_STATE
  );

  const addPost = (title, description, visibility) => {
    if (!title || !description || !visibility) {
      console.error(
        "Title, description and visibility are required to add a post."
      );
      return;
    }

    const validVisibilities = ["public", "private"];
    if (!validVisibilities.includes(visibility)) {
      console.error("Invalid visibility. Must be 'public' or 'private'.");
      return;
    }

    const postTime = new Date();
    dispatchPostList({
      type: "ADD_POST",
      payload: { title, description, visibility, postTime },
    });
  };

  const deletePost = (postIndex) => {
    dispatchPostList({
      type: "DEL_POST",
      payload: postIndex,
    });
  };

  return (
    <PostContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  return useContext(PostContext);
}
