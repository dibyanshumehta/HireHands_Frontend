import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserRegistrationData } from "../../data-access/api/user/user-auth-api";

const userRegiatrationHelper = () => {
  const initialState = {
    name: "",
    username: "",
    otp: "",
    phone: "",
    password: "",
  };
  const [userRegistrationFormData, setuserRegistrationFormData] = useState(initialState);
  const userAuthStore = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserRegistrationFormChange = (e) => {
    const { name, value } = e.target;
    setuserRegistrationFormData({ ...userRegistrationFormData, [name]: value });
    console.log("sign up helper: ", userAuthStore);
  };

  const handleUserRegistrationFormSubmit = (e) => {
    e.preventDefault();
    if (userRegistrationFormData.name === "") {
      alert("Please enter your name");
    }
    if (userRegistrationFormData.username === "") {
      alert("Please enter your username");
    }
    if (userRegistrationFormData.email === "") {
      alert("Please enter your email");
    }
    if (userRegistrationFormData.phone === "") {
      alert("Please enter your phone number");
    }
    if (userRegistrationFormData.password === "") {
      alert("Please enter your password");
    }
    dispatch(postUserRegistrationData(userRegistrationFormData));
  };


  useEffect(() => {
    if (userAuthStore?.status === 200) {
      navigate("/userpage");
    }
  }, [userAuthStore]);

  return {
    userRegistrationFormData,
    handleUserRegistrationFormChange,
    handleUserRegistrationFormSubmit
  };
};

export default userRegiatrationHelper;
