import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import paginationReducer from './features/pagination/paginationSlice';
import commentExpanderReducer from './features/collapseExpandComment/commentExpand';

const store = configureStore<RootState>({
  reducer: {
    theme: themeReducer,
    pagination: paginationReducer,
    commentExpander: commentExpanderReducer,
  },
})

export interface RootState {
  theme: ThemeState;
  pagination: PaginationState;
  commentExpander: CommentExpander;
}

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

export default store;