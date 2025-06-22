import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body, Feed, Login } from "../components";
import { EditProfile } from "../components/EditProfile";

export const RouterProvider = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/profile" element={<>profile</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
