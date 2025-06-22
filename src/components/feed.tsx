import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import type { apiResponse, StoreType, User } from "../utils/types";
import { useEffect } from "react";
import { addFeed } from "../utils/feedSlice";
import { Card } from "./Card";

export const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store: StoreType) => store.feed);
  const getFeed = async () => {
    const feedData: apiResponse<User[]> = await axios.get(`${BASE_URL}/feed`, {
      withCredentials: true,
    });
    dispatch(addFeed(feedData.data));
  };

  useEffect(() => {
    if (!feed) {
      getFeed();
    }
  });
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "32px",
        flexWrap: "wrap",
      }}
    >
      {feed?.map((item) => <Card {...item} />)}
    </div>
  );
};
