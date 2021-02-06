import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../../api/index";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loadedPosts: [],
  },
  reducers: {
    fetchAllPosts: (state, action) => {
      state.loadedPosts = action.payload;
    },
    createPost: (state, action) => {
      state.loadedPosts = action.payload;
    },
  },
});

export const { fetchAllPosts, createPost } = postsSlice.actions;

export default postsSlice.reducer;

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(fetchAllPosts(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const sendPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(createPost(data));
  } catch (error) {
    console.log(error.message);
  }
};
