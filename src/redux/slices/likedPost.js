import { createSlice } from '@reduxjs/toolkit';

export const likedPosts = createSlice({
  name: 'likedPosts',
  initialState: {
    posts: []
  },
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, { ...action.payload }];
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    }
  }
});

export const { addPost, removePost } = likedPosts.actions;

export const selectPost = (state) => state.likedPosts.posts;
export const isLiked = (state, postId) => {
  return state.likedPosts.posts.some((post) => post._id === postId);
};

export default likedPosts.reducer;
