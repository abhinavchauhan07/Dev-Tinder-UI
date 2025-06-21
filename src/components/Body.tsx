import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import type {
  apiResponse,
  CustomAxiosError,
  StoreType,
  User,
} from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

export const Body = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: StoreType) => state.user);
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const res: apiResponse<User> = await axios.get(
        `${BASE_URL}/profile/view`,
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
    } catch (e: unknown) {
      const err = e as CustomAxiosError;
      if (err.status === 401) navigate("/login");
      console.log(e);
    }
  };
  useEffect(() => {
    if (!user) fetchUser();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
