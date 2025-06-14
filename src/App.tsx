import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body, Login } from "./components";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<>testing</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
