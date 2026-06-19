import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postUserRegistrationData = createAsyncThunk(
    "userAuth/postUserRegistrationData",
    async (FormUserData, thunkAPI) => {
        try{
            let userdata = await axios.post("http://localhost:9000/auth/usersignup", FormUserData);
            console.log(userdata);
            return thunkAPI. fulfillWithValue(userdata);
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong", error);
        }
    }
);

export const postUserLoginData = createAsyncThunk(
    "userAuth/postUserLoginData",
    async (FormUserData, thunkAPI) => {
        try {
            let  data  = await axios.post("http://localhost:9000/auth/usersignin", FormUserData);
           
            if (data.status === 201){
                localStorage.setItem( "authToken", data.data.token);
            }
            return thunkAPI.fulfillWithValue(data);
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong", error);
        }
    }
);