import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({ email: "", password: "" });
  const { login, loginWithGoogle, loginWithFacebook } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
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

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
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
  const handleFacebookSignin = async () => {
    try {
      await loginWithFacebook();
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 0.8 segundos

    return () => clearTimeout(timeout);
  }, []);
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
          Login or create an account with your email to start ordering
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
          Login
        </button>
      </form>
    <div className="flex justify-between mt-2 w-64 h-8 border-red-400">
      <button
        onClick={handleGoogleSignin}
        className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform pr-2 pl-2 pt-1 pb-1  rounded-xl text-gray-700 font-semibold text-sm border-2 border-gray-100 hover:bg-blue-100 "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
            fill="#EA4335"
          />
          <path
            d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
            fill="#34A853"
          />
          <path
            d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
            fill="#4A90E2"
          />
          <path
            d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
            fill="#FBBC05"
          />
        </svg>
        Google
      </button>
      <button
        onClick={handleFacebookSignin}
        className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform rounded-xl text-gray-700 font-semibold text-sm border-2 border-gray-100 hover:bg-blue-100 pr-2 pl-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33px"
          height="33px"
        >
          <path fill="#1877F2" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
          <path
            fill="#fff"
            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
          />
        </svg>
        Facebook
      </button>
      </div>
      <p className="text-xs flex justify-between gap-1 mt-2">
        Don't have an account?
        <Link to="/register" className="text-blue-700 hover:text-blue-900 font-bold">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;