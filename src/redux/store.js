import { configureStore } from '@reduxjs/toolkit';
import likedPost from './slices/likedPost';

export default configureStore({
  reducer: {
    likedPosts: likedPost
  }
});
