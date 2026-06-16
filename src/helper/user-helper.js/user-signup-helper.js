import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserRegistrationData } from "../../data-access/api/user/user-auth-api";

const userRegiatrationHelper = () => {
    const initialState = {
        name : "",
        username : "",
        email : "",
        phone : "",
        password : "",
    };
    const [userFormData, setuserFormData] = useState(initialState);
    const userAuthStore = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUserFormChange = (e) => {
        const {name, value} = e.target;
        setuserFromData({ ...userFormData, [name] : value});
    };
    console.log(userFormData);

    const handleUserFormSubmit = (e) => {
        e.preventDefault();
        if (userFormData.name === ""){
            alert("Please enter your name");
        }
        if (userFormData.username === ""){
            alert("Please enter your username");
        }
        if (userFormData.email === ""){
            alert("Please enter your email");
        }
        if (userFormData.phone === ""){
            alert("Please enter your phone number");
        }
        if (userFormData.password === ""){
            alert("Please enter your password");
        }
        dispatch(postUserRegistrationData(userFormData));
    };

    useEffect(() => {
        if (userAuthStore.status = 200){
            navigate("/userdashboard");
        }
    },[userAuthStore]);

    return { userFormData, handleUserFormChange, handleUserFormSubmit };
};

export default userRegiatrationHelper;