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

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

const initialState = token
  ? { isLoggedIn: true, token, error: null }
  : { isLoggedIn: false, token: null, error: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.error = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
