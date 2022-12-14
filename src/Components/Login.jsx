import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import './users.css'
export const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === "foo" && password === "bar") {
      handleAuth();
      navigate("/home");
    }
  };

  return (
    <div id='login'>
      <input
      
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
};
