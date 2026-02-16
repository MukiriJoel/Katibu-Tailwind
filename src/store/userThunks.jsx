import userAxiosInstance from "./userAxiosInstance";

export const postUserInfo = 
  async ({name,email,company,message}) => {
    try {
      const res = await userAxiosInstance.post("/contact/user/katibu",{
        name,
        email,
        company,
        message
      });
    console.log("userres",res)
      return res?.data;
    } catch (error) {
     console.log(error.response?.data || "Fetching failed") 
      return 
        
      ;
    }
  }
;