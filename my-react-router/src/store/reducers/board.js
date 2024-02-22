import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBoardList as reqFetchBoardList } from "~/lib/apis/board";

const initialState = {
  boards: [],
  loading: "idle",
};

const fetchBoardList = createAsyncThunk(
  "boards/fetchBoardList",
  async (data, thunkAPI) => {
    const response = await reqFetchBoardList();
    return response.data;
  }
);

const fetchABoard = createAsyncThunk(
  "boards"
);


const boardSlice = createSlice({
  name: "boards",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoardList.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.loading = "fulfilled";
      state.boards = action.payload;
    });
    builder
      .addCase(fetchBoardList.pending, (state, action) => {
        state.loading = "pending";

        console.log(action);
      })
      .addCase(fetchBoardList.rejected, (state, action) => {
        state.loading = "rejected";

        console.log(action);
      });
  },
});

export { fetchBoardList };
export default boardSlice.reducer;
