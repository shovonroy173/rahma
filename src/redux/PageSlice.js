import { createSlice } from "@reduxjs/toolkit";

const TOTAL_PAGES = 42;

const pageSlice = createSlice({
  name: "page",
  initialState: { currentPage: 1, totalPages: TOTAL_PAGES },
  reducers: {
    nextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    // setPage: (state, action) => {
    //   state.currentPage = Math.min(Math.max(action.payload, 1), state.totalPages);
    // },
  },
});

export const { nextPage, prevPage } = pageSlice.actions;
export default pageSlice.reducer;
