import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { Auth } from "./context/auth";
import SignUp from "./pages/signUp/SignUp";

function App() {
  const { token, sign } = useContext(Auth);
  return (
    <BrowserRouter>
      <Routes>
        {sign ? "" : <Route path="/signUp" element={<SignUp />} />}

        <>
          {token ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </>

        <Route path="*" element={"error"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
