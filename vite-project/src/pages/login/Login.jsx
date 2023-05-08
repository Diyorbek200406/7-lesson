// style import
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./login.css";
import { Auth } from "../../context/auth";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setToken } = useContext(Auth);

  const userNameHandle = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const signHandle = () => {
    localStorage.removeItem("sign");
  };
  const submitHandle = (e) => {
    e.preventDefault();

    const data = {
      email: userName,
      password: password,
    };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          alert("Error: " + response.status + " : Malumotni hato kiritdingiz!");
        }
        return response.json();
      })
      .then((responseData) => {
        if (responseData.token) {
          setToken(responseData.token);
          localStorage.setItem("token", responseData.token);
          navigate("/");
        }
      });
  };
  return (
    <div className="wrapper">
      <Link className="px-5" to={"/"}>
        Home
      </Link>
      <Link onClick={signHandle} className="px-5" to={"/signUp"}>
        SignOut
      </Link>
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          alt="twitter image"
        />
      </div>
      <div className="text-center mt-4 name">Twitter</div>
      <form className="p-3 mt-3" onSubmit={submitHandle}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            onChange={userNameHandle}
            value={userName}
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            onChange={passwordHandle}
            value={password}
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn mt-3">
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
