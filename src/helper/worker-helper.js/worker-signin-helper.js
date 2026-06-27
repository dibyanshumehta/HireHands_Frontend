import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postworkerLoginData } from "../../data-access/api/worker/worker-auth-api";

const workerLoginHelper = () => {
  const initialState = {
    username: "",
    password: "",
  };
  const [workerLoginFormData, setWorkerLoginFormData] = useState(initialState);
  const workerAuthStore = useSelector((state) => state.workerAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleWorkerLoginFormChange = (e) => {
    const { name, value } = e.target;
    setWorkerLoginFormData({ ...workerLoginFormData, [name]: value });
    console.log(workerAuthStore);
  };

  const handleWorkerLoginFormSubmit = (e) => {
    e.preventDefault();
    if (workerLoginFormData.username === "") {
      alert("Please enter your username");
    }
    if (workerLoginFormData.password === "") {
      alert("Please enter your password");
    }
    dispatch(postworkerLoginData(workerLoginFormData));
  };

  useEffect(() => {
    if (workerAuthStore?.status === 201) {
      navigate("/workerpage");
    }
  }, [workerAuthStore]);

  return {
    workerLoginFormData,
    handleWorkerLoginFormChange,
    handleWorkerLoginFormSubmit,
  };
};

export default workerLoginHelper;
