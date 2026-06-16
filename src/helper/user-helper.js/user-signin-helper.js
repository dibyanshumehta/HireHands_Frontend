import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserLoginData } from "../../data-access/api/user/user-auth-api";

const userLoginHelper = () => {
    const initialState = {
        username : "",
        password : "",
    };
    const [userFormData, setuserFormData] = useState(initialState);
    const userAuthStore = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(userAuthStore);
    const handleUserFormChange = (e) => {
        const {name, value} = e.target;
        setuserFormData({ ...userFormData, [name] : value});
    };

    const handleUserFormSubmit = (e) => {
        e.preventDefault();
        if (userFormData.username === ""){
            alert("Please enter your username");
        }
        if (userFormData.password === ""){
            alert("Please enter your password");
        }
        dispatch(postUserLoginData(userFormData));
    };

    useEffect(() => {
        if(userAuthStore.status === 200){
            navigate("/userdashboard");
        }
    },[userAuthStore])

    return {userFormData, handleUserFormChange, handleUserFormSubmit};
};

export default userLoginHelper;