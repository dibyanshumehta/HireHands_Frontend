import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postworkerRegistrationData } from "../../data-access/api/worker/worker-auth-api";

const workerRegiatrationHelper = () => {
    const initialState = {
        name : "",
        username : "",
        email : "",
        phone : "",
        password : "",
        skill : "",
        experience : "",
        location : "",
    };
    const [workerFormData, setworkerFormData] = useState(initialState);
    const workerAuthStore = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleWorkerFormChange = (e) => {
        const {name, value} = e.target;
        setworkerFromData({ ...workerFormData, [name] : value});
    };
    console.log(workerFormData);

    const handleWorkerFormSubmit = (e) => {
        e.preventDefault();
        if (workerFormData.name === ""){
            alert("Please enter your name");
        }
        if (workerFormData.username === ""){
            alert("Please enter your username");
        }
        if (workerFormData.email === ""){
            alert("Please enter your email");
        }
        if (workerFormData.phone === ""){
            alert("Please enter your phone number");
        }
        if (workerFormData.password === ""){
            alert("Please enter your password");
        }
        if (workerFormData.skill === ""){
            alert("Please choose your skill");
        }
        if (workerFormData.experience === ""){
            alert("Please enter your experience");
        }
        if (workerFormData.location === ""){
            alert("Please enter your location");
        }

        dispatch(postworkerRegistrationData(workerFormData));
    };

    useEffect(() => {
        if (workerAuthStore.status = 200){
            navigate("/workerdashboard");
        }
    },[workerAuthStore]);

    return { workerFormData, handleWorkerFormChange, handleWorkerFormSubmit };
};

export default workerRegiatrationHelper;