import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../helpers/auth.helper";
const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

export const login = createAsyncThunk(
  "auth/login",
  async ({ userName, password }, thunkAPI) => {
    try {
      const res = await authService.login(userName, password);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = token
  ? { isLoggedIn: true, token }
  : { isLoggedIn: false, token: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
