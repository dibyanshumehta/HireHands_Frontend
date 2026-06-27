import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postworkerRegistrationData } from "../../data-access/api/worker/worker-auth-api";

const workerRegiatrationHelper = () => {
  const initialState = {
    name: "",
    username: "",
    // otp: "",
    phone: "",
    password: "",
    skill: "",
    experience: "",
    location: "",
  };

  const [workerRegistrationFormData, setWorkerRegistrationFormData] =
    useState(initialState);
  const workerAuthStore = useSelector((state) => state.workerauth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleWorkerRegistrationFormChange = (e) => {
    const { name, value } = e.target;
    setWorkerRegistrationFormData({
      ...workerRegistrationFormData,
      [name]: value,
    });
    console.log(workerRegistrationFormData);
  };

  const handleWorkerRegistrationFormSubmit = (e) => {
    e.preventDefault();
    if (workerRegistrationFormData.name === "") {
      alert("Please enter your name");
    }
    if (workerRegistrationFormData.username === "") {
      alert("Please enter your username");
    }
    // if (workerRegistrationFormData.otp === "") {
    //   alert("Please enter your otp");
    // }
    if (workerRegistrationFormData.phone === "") {
      alert("Please enter your phone number");
    }
    if (workerRegistrationFormData.password === "") {
      alert("Please enter your password");
    }
    if (workerRegistrationFormData.skill === "") {
      alert("Please choose your skill");
    }
    if (workerRegistrationFormData.experience === "") {
      alert("Please enter your experience");
    }
    if (workerRegistrationFormData.location === "") {
      alert("Please enter your location");
    }

    dispatch(postworkerRegistrationData(workerRegistrationFormData));
  };

  useEffect(() => {
    if (workerAuthStore?.status === 200) {
      navigate("/workerpage");
    }
  }, [workerAuthStore]);

  return {
    workerRegistrationFormData,
    handleWorkerRegistrationFormChange,
    handleWorkerRegistrationFormSubmit,
  };
};

export default workerRegiatrationHelper;
