import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
    if(!token) return true;
    try {
        const decodeToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodeToken.exp < currentTime;
    } catch (error) {
        console.error("Error Decoding Token:", error);
        return true;
    }
}

export default isTokenExpired;