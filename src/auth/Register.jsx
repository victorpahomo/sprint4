import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Invalid Mail");
          break;
        case "auth/weak-password":
          setError("Invalid Password");
          break;
        case "auth/email-already-in-use":
          setError("e-mail is already in use");
          break;
        default:
          setError("Incorrect email or password");
          break;
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-72 ">
        <svg
          className="classSVG"
          xmlns="http://www.w3.org/2000/svg"
          width="121"
          height="113"
          fill="none"
        >
          <rect width="121" height="113" fill="#fff" rx="10" />
          <path
            fill="#414141"
            d="M116.202 23.483H95.718a.798.798 0 1 0 0 1.596h20.484a.798.798 0 1 0 0-1.596ZM82.525 23.483H70.682a.798.798 0 0 0-.798.798v.035c0 .44.357.797.798.797h11.843c.44 0 .798-.357.798-.797v-.035a.798.798 0 0 0-.798-.798ZM90.32 23.483h-4.694a.798.798 0 1 0 0 1.596h4.694a.798.798 0 1 0 0-1.596Z"
          />
          <path
            fill="#414141"
            stroke="#414141"
            d="M92.256 96.322H13.638a.926.926 0 0 0 0 1.852h78.618a.926.926 0 0 0 0-1.852Z"
          />
          <path
            fill="#FFE031"
            stroke="#414141"
            d="M5.694 71.626h88.914v9.335a4.26 4.26 0 0 1-4.27 4.253H9.963a4.256 4.256 0 0 1-4.27-4.253v-9.335Z"
          />
          <path
            fill="#F2F2F2"
            stroke="#414141"
            d="M22.48 97.248a6.938 6.938 0 1 0 0-13.876 6.938 6.938 0 0 0 0 13.876ZM78.186 97.248a6.938 6.938 0 1 0 0-13.876 6.938 6.938 0 0 0 0 13.876Z"
          />
          <path
            fill="#FFE031"
            stroke="#414141"
            d="m62.467 20.437.014.729.699.209c19.104 5.716 32.384 24.289 30.845 44.737l-43.07-4.24L7.88 57.627c2.617-21.456 20.973-37.655 42.234-38.042l.73-.014.21-.698a5.83 5.83 0 0 1 11.412 1.564Z"
          />
          <path
            fill="#414141"
            d="M108.467 70h-8.551a.916.916 0 1 0 0 1.832h8.551a.916.916 0 1 0 0-1.832ZM112.501 96H98.499a1.5 1.5 0 0 0 0 3h14.002a1.5 1.5 0 0 0 0-3Z"
          />
          <path stroke="#414141" d="M64 27.5c6.333 1.667 19.9 9.7 23.5 28.5" />
        </svg>
        <p className="w-72 text-center text-sm text-gray-600">
          Create an account with your email to start ordering
        </p>
        {error && <Alert message={error} />}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-72">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="example@company.com"
          onChange={handleChange}
          className="w-full border-2 border-gray-100 rounded-xl p-1 bg-transparent hover:bg-yellow-50"
        />

        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          className="w-full border-2 border-gray-100 rounded-xl p-1 bg-transparent hover:bg-yellow-50"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-1 bg-yellow-1000 rounded-xl text-gray-800 font-bold text-sm hover:bg-yellow-400"
        >
          Register
        </button>
      </form>
      <p className="text-xs flex justify-between gap-1 mt-5">
        You have an account?
        <Link
          to="/login"
          className="text-blue-700 hover:text-blue-900 font-bold"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;