import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slice/user/user-auth-slice.js";
import workerAuthReducer from "./slice/worker/worker-auth-slice.js";

const store = configureStore({
    reducer: {
        userAuth: userAuthReducer,
        workerAuth: workerAuthReducer, 
    },
});

export default store;