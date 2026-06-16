import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postworkerRegistrationData = createAsyncThunk(
    "auth/postworkerRegistrationData",
    async (ForWorkerrData, thunkAPI) => {
        try{
            let workerdata = await axios.post("http://localhost:3000/auth/workersignup", FormWorkerData);
            return thunkAPI. fulfillWithValue(workerdata);
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong", error);
        }
    }
);

export const postworkerLoginData = createAsyncThunk(
    "auth/postworkerLoginData",
    async (FormWorkerData, thunkAPI) => {
        try {
            let workerdata = await axios.post("http://localhost:3000/auth/userlogin", FormWorkerData);
            if (workerdata.status === 200){
                localStorage.setItem( "authToken", workerdata.data.token);
            }
            return thunkAPI.fulfillWithValue(workerdata);
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong", error);
        }
    }
);