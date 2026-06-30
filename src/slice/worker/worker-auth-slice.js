import { createSlice } from "@reduxjs/toolkit";
import {
  postworkerLoginData,
  postworkerRegistrationData,
} from "../../data-access/api/worker/worker-auth-api";

const workerAuthSlice = createSlice({
  name: "workerAuth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    message: null,
    status: null,
  },
  reducers: {
    workerlogout: (state) => {
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
      .addCase(postworkerRegistrationData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(postworkerRegistrationData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.status = action.payload.status;
        state.message = "Regsitration Successful";
      })

      .addCase(postworkerRegistrationData.rejected, (satte, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to register";
      })

      // For User Login
      .addCase(postworkerLoginData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(postworkerLoginData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.status = action.payload.status;
        state.message = "Login Successful";
      })

      .addCase(postworkerLoginData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to Login";
      });
  },
});

export const { workerlogout } = workerAuthSlice.actions;
export default workerAuthSlice.reducer;
