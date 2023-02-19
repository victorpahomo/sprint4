import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
const Login = () => {
  const [user, setUser] = useState({email: "",password: "",});
  const [error, setError] = useState()
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await login(user.email, user.password)
      navigate("/")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@company.com"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
