import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body, Login } from "../components";

export const RouterProvider = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<>testing</>} />
          <Route path="/profile" element={<>profile</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
