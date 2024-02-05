import { useEffect, useState } from "react";
import baseUrlPublic from "../utils/baseUrlPublic";

const useGetUserInfo = () => {
  const axios = baseUrlPublic();
  const [user, setuser] = useState("");
  useEffect(() => {
    const data = async () => {
      const { data } = await axios.get("/user/user-info");
      setuser(data.data);
    };
    data();
  }, [axios]);

  return user;
};

export default useGetUserInfo;
