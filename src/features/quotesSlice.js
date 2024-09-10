import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const responce = await axios.get("https://api.quotable.io/random");
  return responce.data;
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    id: '',
    content: '',
    author: '',
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.content = action.payload.content;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;