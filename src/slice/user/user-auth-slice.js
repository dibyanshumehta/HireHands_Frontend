import { createSlice } from "@reduxjs/toolkit";
import {
  postUserLoginData,
  postUserRegistrationData,
} from "../../data-access/api/user/user-auth-api";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    message: null,
    status: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.message = null;
      state.status = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder

      // For User Registration
      .addCase(postUserRegistrationData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postUserRegistrationData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.status = action.payload.data.status;
        status.message = "Regsitration Successful";
      })
      .addCase(postUserRegistrationData.rejected, (satte, action) => {
        status.loading = false;
        state.error = action.payload || "Failed to register";
      })

      // For User Login
      .addCase(postUserLoginData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(postUserLoginData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.status = action.payload.data.status;
        state.message = "Login Successful";
      })

      .addCase(postUserLoginData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to Login";
      });
  },
});
export const { logout } = userAuthSlice.actions;  
export default userAuthSlice.reducer;
