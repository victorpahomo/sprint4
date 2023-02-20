import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-screen text-center">
      <div className="bg-white flex justify-evenly items-center p-4">
        <Link to="/" className="flex flex-col justify-center items-center">
          <svg
            className="fill-current text-black hover:text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
          >
            <path d="M30 15a1 1 0 0 1-.58-.19L16 5.23 2.58 14.81a1 1 0 0 1-1.16-1.62l14-10a1 1 0 0 1 1.16 0l14 10A1 1 0 0 1 30 15ZM5 9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6v3a1 1 0 0 1-1 1Z" />
            <path d="M25 29h-5a1 1 0 0 1-1-1v-7h-6v7a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V16a1 1 0 1 1 2 0v10a1 1 0 0 0 1 1h4v-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h4a1 1 0 0 0 1-1V16a1 1 0 0 1 2 0v10a3 3 0 0 1-3 3Z" />
          </svg>
        </Link>

        <Link
          to="/search"
          className="flex flex-col justify-center items-center"
        >
          <svg
            className="fill-current text-black hover:text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
          >
            <path d="M18.793 3.224A10.936 10.936 0 0 0 11.008 0c-2.94 0-5.705 1.145-7.784 3.224A10.936 10.936 0 0 0 0 11.008c0 2.94 1.145 5.705 3.224 7.785a10.936 10.936 0 0 0 7.784 3.224c2.94 0 5.705-1.145 7.785-3.224a10.936 10.936 0 0 0 3.224-7.785c0-2.94-1.145-5.705-3.224-7.784Zm-7.785 16.692c-4.911 0-8.907-3.996-8.907-8.908 0-4.911 3.996-8.907 8.907-8.907 4.912 0 8.908 3.996 8.908 8.907 0 4.912-3.996 8.908-8.908 8.908Z" />
            <path d="m24.098 24.382-6.23-6.23a.948.948 0 0 0-1.34 1.34l6.23 6.23a.945.945 0 0 0 1.34 0c.37-.37.37-.97 0-1.34Z" />
          </svg>
        </Link>

        <Link
          to="/orders"
          className="flex flex-col justify-center items-center"
        >
          <svg
            className="fill-current text-black hover:text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
          >
            <path d="M17 28a1 1 0 1 1 0-2 10 10 0 1 0-8.18-4.25 1 1 0 0 1-.99 1.562 1 1 0 0 1-.65-.412A12 12 0 1 1 17 28Z" />
            <path d="M9 24H4a1 1 0 0 1 0-2h4v-4a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1ZM14 20a1 1 0 0 1-.71-1.71l2.71-2.7V11a1 1 0 0 1 2 0v5a.998.998 0 0 1-.29.71l-3 3A1 1 0 0 1 14 20Z" />
          </svg>
        </Link>

        <Link
          to="/profile"
          className="flex flex-col justify-center items-center"
        >
          <svg
            className="fill-current text-black hover:text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
          >
            <path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-12a5 5 0 1 1 0 10 5 5 0 0 1 0-10ZM17 18h-2A11 11 0 0 0 4 29a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1 11 11 0 0 0-11-11ZM6.06 28A9 9 0 0 1 15 20h2a9 9 0 0 1 8.94 8H6.06Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
