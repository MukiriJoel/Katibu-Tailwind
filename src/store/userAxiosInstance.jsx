import axios from "axios";

const userAxiosInstance = axios.create({
    baseURL:"https://keshonect.co.ke/api/",
    withCredentials:true,
    headers:{
        //  "Content-Type": "application/json",
        // "X-PLATFORM-KEY": process.env.NEXT_PUBLIC_X_API_KEY,
        // "X-API-KEY": process.env.NEXT_PUBLIC_X_API_KEY,
    }
});

userAxiosInstance.interceptors.request.use(
    async (config) => {
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor (Global error handling)
userAxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error)
        // if (error.response?.status === 401) {
        //     console.error("Unauthorized, redirecting...");
        //     window.location.href = "/login";
        // }
        return Promise.reject(error);
    }
);

export default userAxiosInstance;