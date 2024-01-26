import { useContext } from "react";
import { AuthContextAll } from "./AuthProvider";

const GetAuth = () => {
  return useContext(AuthContextAll);
};

export default GetAuth;
