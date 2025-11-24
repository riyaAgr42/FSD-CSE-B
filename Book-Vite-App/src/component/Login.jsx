import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email === "admin@gmail.com" || password === "manager") {
      navigate("/admin");
    } else if (email === "user@gmail.com" || password === "user") {
      navigate("/user");
    } else {
      setEmail("");
      setPassword("");
      setError("Invalid Credentials");
      // alert("Invalid Credentials");
    }
    console.log({ email, password });
  }
  return (
    <div>
      <h1>Login Here</h1>
      {error && <h3 style={{ color: "red" }}>Error:{error}</h3>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
