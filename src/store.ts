import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import paginationReducer from './features/pagination/paginationSlice';
import commentExpanderReducer from './features/collapseExpandComment/commentExpand';

export interface ThemeState {
  color: string;
  foreground: string;
  background: string;
}

export interface PaginationState {
  skip: number;
  take: number;
  hasNext: boolean;
}

export interface CommentExpander {
  [key: string]: string;
}

export interface RootState {
  theme: ThemeState;
  pagination: PaginationState;
  commentExpander: CommentExpander;
}

const store = configureStore<RootState>({
  reducer: {
    theme: themeReducer,
    pagination: paginationReducer,
    commentExpander: commentExpanderReducer,
  },
});

export default store;
