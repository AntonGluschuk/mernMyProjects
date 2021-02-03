import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../../api/index";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loadedPosts: [],
  },
  reducers: {
    fetchAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    createPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { fetchAllPosts, createPost } = postsSlice.actions;

export default postsSlice.reducer;

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(fetchAllPosts(data));
  } catch (error) {}
};