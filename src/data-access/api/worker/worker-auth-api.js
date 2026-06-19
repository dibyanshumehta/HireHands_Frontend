import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postworkerRegistrationData = createAsyncThunk(
    "workerAuth/postworkerRegistrationData",
    async (FormWorkerData, thunkAPI) => {
        try{
            let workerdata = await axios.post("http://localhost:9000/auth/workersignup", FormWorkerData);
            return thunkAPI. fulfillWithValue(workerdata);
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong", error);
        }
    }
);

export const postworkerLoginData = createAsyncThunk(
    "workerAuth/postworkerLoginData",
    async (FormWorkerData, thunkAPI) => {
        try {
            let data = await axios.post("http://localhost:9000/auth/workersignin", FormWorkerData);
            if (data.status === 201){
                localStorage.setItem( "authToken", data.data.token);
            }
            return thunkAPI.fulfillWithValue(data);
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong", error);
        }
    }
);