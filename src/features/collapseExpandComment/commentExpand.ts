import { createSlice } from "@reduxjs/toolkit"
import { CommentExpander } from "../../store"

const commentExpander = createSlice({
  initialState: {} as CommentExpander,
  name: "comment-expander",
  reducers: {
    toggleByKey(state, { payload }) {
      const { parent, id } = payload;
      const newState = { ...state }

      newState[parent] = newState[parent] !== id.toString() ? id.toString() : '';
      return newState
    }
  }
})

export const { toggleByKey } = commentExpander.actions;

export default commentExpander.reducer;