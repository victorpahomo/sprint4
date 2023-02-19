import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "", });
  const { login, loginWithGoogle,loginWithFacebook } = useAuth();
  const [error, setError] = useState("")
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }
  const handleFacebookSignin = async () => {
    try {
      await loginWithFacebook();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>

      <button onClick={handleGoogleSignin}>Google Login</button>
      <button onClick={handleFacebookSignin} >Facebook Login</button>
    </div>
  );
};

export default Login;
