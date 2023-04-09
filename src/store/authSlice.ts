import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

export interface UserInfo {
  isLogin: boolean;
  avatarUrl: string;
  email: string;
  name: string;
}


const initialState = {
  isLogin: false,
  avatarUrl: "",
  email: "",
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
    updateUser: (state, action) => {
      state = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const selectAuth = (state: AppState) => state.auth.isLogin;
export const { logout, updateUser } = authSlice.actions;
export default authSlice.reducer;