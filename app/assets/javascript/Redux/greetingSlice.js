import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGreetings = createAsyncThunk(
  "greetings/fetchGreetings",
  async () => {
    const response = await fetch("/api/v1/greetings");
    const data = await response.json();
    return data.message;
  }
);

const options = {
  name: "greeting",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchGreetings.fulfilled]: (state, action) => action.payload,
  },
};

const greetingSlice = createSlice(options);

export const selectGreeting = (state) => state.greeting;

export default greetingSlice.reducer;
