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
      state.loadedPosts.push(action.payload);
    },
    modifyPost: (state, action) => {
      state.loadedPosts = state.loadedPosts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
  },
});

export const { fetchAllPosts, createPost, modifyPost } = postsSlice.actions;

export default postsSlice.reducer;

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(fetchAllPosts(data));
  } catch (error) {
    console.log(error);
  }
};

export const sendPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(createPost(data));
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log(data);
    dispatch(modifyPost(data));
  } catch (error) {
    console.log(error);
  }
};
