import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../features/quotesSlice";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export default store;
