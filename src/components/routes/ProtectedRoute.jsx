import isTokenExpired from "../../utils/decode-token";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("authToken");
    if(!token || isTokenExpired(token)) {
        localStorage.removeItem("authToken");
        return <Navigate to="/" replace/>
    }
    return children;
}

export default ProtectedRoute;