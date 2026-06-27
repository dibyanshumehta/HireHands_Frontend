import { useState } from "react"

const OtpGenerator = () => {
    const [otp, setOtp] = useState('');

    const handleGetUserOtp = () => {
        const length = 6;
        let generatedOTP = "";

        for (let i = 0; i<length; i++){
            generatedOTP += Math.floor(Math.random() * 10);
        }

        setOtp(generatedOTP);
    };
    return {
        otp,
        handleGetUserOtp
    }
};

export default OtpGenerator;