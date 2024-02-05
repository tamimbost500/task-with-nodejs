import { useEffect, useState } from "react";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setCurrentUser(token);
  }, []);

  return currentUser;
};

export default useCurrentUser;
