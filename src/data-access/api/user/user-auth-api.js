import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserRegistrationData = createAsyncThunk(
    "auth/postUserRegistrationData",
    async (FormUserData, thunkAPI) => {
        try{
            let userdata = await axios.post("http://localhost:3000/auth/usersignup", FormUserData);
            return thunkAPI. fulfillWithValue(userdata);
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong", error);
        }
    }
);

export const postUserLoginData = createAsyncThunk(
    "auth/postuserLoginData",
    async (FormUserData, thunkAPI) => {
        try {
            let userdata = await axios.post("http://localhost:3000/auth/userlogin", FormUserData);
            if (userdata.status === 200){
                localStorage.setItem( "authToken", userdata.data.token);
            }
            return thunkAPI.fulfillWithValue(usedata);
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong", error);
        }
    }
);