import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserLoginData } from "../../data-access/api/user/user-auth-api";

const userLoginHelper = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const [userLoginFormData, setuserLoginFormData] = useState(initialState);
  const userAuthStore = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserLoginFormChange = (e) => {
    const { name, value } = e.target;
    setuserLoginFormData({ ...userLoginFormData, [name]: value });
    console.log(userAuthStore);
  };

  const handleUserLoginFormSubmit = (e) => {
    e.preventDefault();
    if (userLoginFormData.username === "") {
      alert("Please enter your username");
    }
    if (userLoginFormData.password === "") {
      alert("Please enter your password");
    }
    dispatch(postUserLoginData(userLoginFormData));
  };

  useEffect(() => {
    if (userAuthStore?.status === 201) {
      navigate("/userpage");
    }
  }, [userAuthStore]);
 
  return {
    userLoginFormData,
    handleUserLoginFormChange,
    handleUserLoginFormSubmit,
  };
};

export default userLoginHelper;
