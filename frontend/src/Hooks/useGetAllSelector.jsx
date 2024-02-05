import { useEffect, useState } from "react";
import baseUrlPublic from "../utils/baseUrlPublic";

const useGetAllSelector = () => {
  const axios = baseUrlPublic();
  const [selectors, setSelectors] = useState([]);
  useEffect(() => {
    const data = async () => {
      const { data } = await axios.get("/user/all-selectors");
      setSelectors(data?.data);
    };
    data();
  }, [axios]);

  return selectors;
};

export default useGetAllSelector;
