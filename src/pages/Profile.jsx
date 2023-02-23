import React from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../layout/Navbar";


const Profile = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleClick = () => {

  }

  return (
    <div className="flex w-screen h-screen items-center justify-center pb-28 md:pb-11">
      <div className="flex w-full h-full flex-col items-center p-2 md:w-1/2  gap-1 md:justify-center">
        {!user.photoURL ? (
          <div className="w-28 h-28">
            <svg
              className="w-full h-full fill-slate-300 object-cover"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="inherit"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <img className="rounded-full" src={user.photoURL} alt="photoUser" />
        )}
        {!user.displayName ? (
          <h3 className="text-xl font-bold text-center mb-4 md:mb-1">
            {user.email}
          </h3>
        ) : (
          <h3 className="text-xl font-bold text-center mb-4 md:mb-1">
            {user.displayName}
          </h3>
        )}
        {/* Primer boton */}
        <div onClick={handleClick} className="w-full h-16 rounded-xl bg-stone-100 flex items-center pl-2 pr-2 justify-between hover:bg-slate-200 md:w-full cursor-pointer">
          <div className="flex gap-4 items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16C17.3845 16 18.7378 15.5895 19.889 14.8203C21.0401 14.0511 21.9373 12.9579 22.4672 11.6788C22.997 10.3997 23.1356 8.99224 22.8655 7.63437C22.5954 6.2765 21.9287 5.02922 20.9497 4.05026C19.9708 3.07129 18.7235 2.4046 17.3656 2.13451C16.0078 1.86441 14.6003 2.00303 13.3212 2.53285C12.0421 3.06266 10.9489 3.95987 10.1797 5.11101C9.41054 6.26216 9 7.61553 9 9C9 10.8565 9.7375 12.637 11.0503 13.9497C12.363 15.2625 14.1435 16 16 16ZM16 4C16.9889 4 17.9556 4.29325 18.7779 4.84265C19.6001 5.39206 20.241 6.17296 20.6194 7.08659C20.9978 8.00022 21.0969 9.00555 20.9039 9.97545C20.711 10.9454 20.2348 11.8363 19.5355 12.5355C18.8363 13.2348 17.9454 13.711 16.9755 13.9039C16.0055 14.0969 15.0002 13.9978 14.0866 13.6194C13.173 13.241 12.3921 12.6001 11.8427 11.7779C11.2932 10.9556 11 9.98891 11 9C11 7.67392 11.5268 6.40215 12.4645 5.46447C13.4021 4.52679 14.6739 4 16 4Z"
                fill="inherit"
              />
              <path
                d="M17 18H15C12.0826 18 9.28473 19.1589 7.22183 21.2218C5.15893 23.2847 4 26.0826 4 29C4 29.2652 4.10536 29.5196 4.29289 29.7071C4.48043 29.8946 4.73478 30 5 30H27C27.2652 30 27.5196 29.8946 27.7071 29.7071C27.8946 29.5196 28 29.2652 28 29C28 26.0826 26.8411 23.2847 24.7782 21.2218C22.7153 19.1589 19.9174 18 17 18ZM6.06 28C6.3059 25.8006 7.35351 23.769 9.00268 22.2932C10.6518 20.8175 12.7869 20.0011 15 20H17C19.2131 20.0011 21.3482 20.8175 22.9973 22.2932C24.6465 23.769 25.6941 25.8006 25.94 28H6.06Z"
                fill="inherit"
              />
            </svg>
            <p className="text-2xl md:text-lg">Account edit</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 stroke-1 md:stroke-0 stroke-black"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="w-full h-16 rounded-xl bg-stone-100 flex items-center pl-2 pr-2 justify-between hover:bg-slate-200 md:w-full cursor-pointer">
          <div className="flex gap-4 items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>

            <p className="text-2xl md:text-lg">Account edit</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-1 md:stroke-0 stroke-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full h-16 rounded-xl bg-stone-100 flex items-center pl-2 pr-2 justify-between hover:bg-slate-200 md:w-full cursor-pointer">
          <div className="flex gap-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_436_887)">
                <path
                  d="M12 14.5H4C3.33696 14.5 2.70107 14.2366 2.23223 13.7678C1.76339 13.2989 1.5 12.663 1.5 12V5C1.5 4.86739 1.55268 4.74021 1.64645 4.64645C1.74021 4.55268 1.86739 4.5 2 4.5H12C12.663 4.5 13.2989 4.76339 13.7678 5.23223C14.2366 5.70107 14.5 6.33696 14.5 7V12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5ZM2.5 5.5V12C2.5 12.3978 2.65804 12.7794 2.93934 13.0607C3.22064 13.342 3.60218 13.5 4 13.5H12C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12V7C13.5 6.60218 13.342 6.22064 13.0607 5.93934C12.7794 5.65804 12.3978 5.5 12 5.5H2.5Z"
                  fill="black"
                />
                <path
                  d="M13.0001 5.50011C12.8674 5.50011 12.7403 5.44743 12.6465 5.35366C12.5527 5.25989 12.5001 5.13271 12.5001 5.00011V3.62511C12.5096 3.44995 12.4795 3.27489 12.412 3.11299C12.3445 2.9511 12.2413 2.80654 12.1101 2.69011C11.9922 2.60178 11.8557 2.54147 11.711 2.51375C11.5663 2.48603 11.4172 2.49162 11.2751 2.53011L2.89006 4.43511C2.77726 4.46051 2.67676 4.52421 2.60565 4.61537C2.53455 4.70654 2.49723 4.81952 2.50006 4.93511C2.50006 5.06771 2.44738 5.19489 2.35361 5.28866C2.25984 5.38243 2.13266 5.43511 2.00006 5.43511C1.86745 5.43511 1.74027 5.38243 1.6465 5.28866C1.55273 5.19489 1.50006 5.06771 1.50006 4.93511C1.49712 4.5933 1.61102 4.26075 1.82288 3.99251C2.03474 3.72427 2.33187 3.53643 2.66506 3.46011L11.0551 1.55511C11.3436 1.48214 11.645 1.4762 11.9362 1.53774C12.2274 1.59927 12.5007 1.72665 12.7351 1.91011C12.9829 2.12043 13.1803 2.38373 13.3127 2.68057C13.4451 2.97741 13.5091 3.3002 13.5001 3.62511V5.00011C13.5001 5.13271 13.4474 5.25989 13.3536 5.35366C13.2598 5.44743 13.1327 5.50011 13.0001 5.50011Z"
                  fill="black"
                />
                <path
                  d="M14 11.5H10.5C9.96957 11.5 9.46086 11.2893 9.08579 10.9142C8.71071 10.5391 8.5 10.0304 8.5 9.5C8.5 8.96957 8.71071 8.46086 9.08579 8.08579C9.46086 7.71071 9.96957 7.5 10.5 7.5H14C14.1326 7.5 14.2598 7.55268 14.3536 7.64645C14.4473 7.74021 14.5 7.86739 14.5 8V11C14.5 11.1326 14.4473 11.2598 14.3536 11.3536C14.2598 11.4473 14.1326 11.5 14 11.5ZM10.5 8.5C10.2348 8.5 9.98043 8.60536 9.79289 8.79289C9.60536 8.98043 9.5 9.23478 9.5 9.5C9.5 9.76522 9.60536 10.0196 9.79289 10.2071C9.98043 10.3946 10.2348 10.5 10.5 10.5H13.5V8.5H10.5Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_436_887">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-2xl md:text-lg">Payment edit</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 stroke-1 md:stroke-0 stroke-black"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full h-16 rounded-xl bg-stone-100 flex items-center pl-2 pr-2 justify-between hover:bg-slate-200 md:w-full cursor-pointer">
          <div className="flex gap-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_437_494)">
                <path
                  d="M8 0C3.58187 0 0 3.58187 0 8C0 12.4181 3.58187 16 8 16C12.4181 16 16 12.4181 16 8C16 3.58187 12.4181 0 8 0ZM14.9822 7.5H12.2922C12.2891 7.26937 12.2771 7.03917 12.2563 6.80937C12.1667 5.84829 11.928 4.90701 11.5487 4.01937C12.1757 3.90098 12.7945 3.74317 13.4016 3.54688C14.3281 4.66732 14.8808 6.04962 14.9822 7.5ZM5.53375 4.04906C6.18454 4.15985 6.84096 4.23455 7.5 4.27281V7.5H4.70844C4.71135 7.30333 4.72177 7.10729 4.73969 6.91187C4.83563 5.81406 5.15438 4.84813 5.53375 4.04906ZM8.5 1.29406C9.08633 1.87265 9.59829 2.52202 10.0241 3.22719C9.70781 3.25781 9.38854 3.27865 9.06625 3.28969C8.87875 3.29656 8.69 3.3 8.5 3.3V1.29406ZM7.5 1.29406V3.27063C7.01583 3.24104 6.53 3.1899 6.0425 3.11719C6.15969 2.92781 6.27656 2.75406 6.38844 2.59687C6.72 2.13092 7.09196 1.69507 7.5 1.29437V1.29406ZM7.5 8.5V11.7275C6.9375 11.76 6.3724 11.8199 5.80469 11.9072C5.22531 10.7628 4.87521 9.6274 4.75437 8.50094L7.5 8.5ZM7.5 12.7291V14.5C7.07506 13.973 6.68366 13.4198 6.32812 12.8438C6.71979 12.7915 7.11042 12.7532 7.5 12.7291ZM8.5 12.6978C8.68917 12.6978 8.87792 12.7013 9.06625 12.7081C9.28906 12.7159 9.51031 12.7294 9.73 12.7466C9.35944 13.3577 8.94853 13.9435 8.5 14.5V12.6978ZM9.10219 11.7087C8.90198 11.7017 8.70125 11.698 8.5 11.6978V8.5H11.2456C11.1296 9.58729 10.7989 10.6843 10.2534 11.7909C9.87385 11.7509 9.4901 11.7238 9.10219 11.7094V11.7087ZM8.5 7.5V4.30156C8.70083 4.30156 8.90156 4.29792 9.10219 4.29063C9.58344 4.27333 10.0585 4.23573 10.5275 4.17781C10.9246 5.03667 11.1724 5.95693 11.2603 6.89906C11.2784 7.09906 11.2889 7.29938 11.2916 7.5H8.5ZM12.6187 2.74031C12.1176 2.88229 11.6092 2.99704 11.0956 3.08406C10.887 2.70337 10.6554 2.33571 10.4022 1.98312C10.2003 1.70187 10.0012 1.45187 9.81594 1.23719C10.8537 1.51528 11.813 2.02974 12.6187 2.74031ZM6.18406 1.23781C5.99875 1.45375 5.79969 1.70312 5.59781 1.98375C5.37926 2.28779 5.17669 2.60301 4.99094 2.92812C4.52156 2.82875 4.05135 2.70979 3.58031 2.57125C4.34403 1.94743 5.23152 1.49292 6.18406 1.23781ZM2.75625 3.36281C3.34583 3.55406 3.9351 3.71615 4.52406 3.84906C4.10376 4.78645 3.83984 5.78635 3.74281 6.80906C3.72198 7.03823 3.71 7.26844 3.70688 7.49969H1.01781C1.12491 5.96677 1.73615 4.51235 2.75625 3.36313V3.36281ZM1.01781 8.5H3.75C3.86313 9.69333 4.2074 10.8912 4.78281 12.0938C4.09883 12.2389 3.423 12.4201 2.75813 12.6366C1.73734 11.4876 1.12544 10.0331 1.01781 8.5ZM3.58031 13.4288C4.14281 13.2621 4.70531 13.1245 5.26781 13.0159C5.63533 13.6497 6.04478 14.2583 6.49344 14.8375C5.42538 14.6031 4.42752 14.1205 3.58063 13.4288H3.58031ZM9.50688 14.8375C9.9901 14.2143 10.4274 13.5569 10.8153 12.8703C11.4241 12.9616 12.0265 13.0917 12.6187 13.2597C11.7322 14.0412 10.6612 14.5841 9.50688 14.8375ZM13.4016 12.4531C12.7122 12.2303 12.0078 12.0572 11.2937 11.935C11.8235 10.7871 12.1428 9.64208 12.2516 8.5H14.9822C14.8808 9.95038 14.3281 11.3327 13.4016 12.4531Z"
                  fill="#000"
                />
              </g>
              <defs>
                <clipPath id="clip0_437_494">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-2xl md:text-lg">Language</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 stroke-1 md:stroke-0 stroke-black"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full h-16 rounded-xl bg-stone-100 flex items-center pl-2 pr-2 justify-between hover:bg-slate-200 md:w-full cursor-pointer">
          <div className="flex gap-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.222 6.54515C14.222 3.24773 11.5785 0.592285 8.29604 0.592285C5.01354 0.592285 2.37012 3.24773 2.37012 6.54515C2.37012 9.84257 8.29604 15.9997 8.29604 15.9997C8.29604 15.9997 14.222 9.84257 14.222 6.54515ZM5.53642 6.42842C5.53642 4.91103 6.78551 3.65626 8.29604 3.65626C9.80657 3.65626 11.0557 4.88185 11.0557 6.42842C11.0557 7.94582 9.83562 9.20059 8.29604 9.20059C6.78551 9.20059 5.53642 7.94582 5.53642 6.42842Z"
                fill="#000"
              />
            </svg>

            <p className="text-2xl md:text-lg">Location</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 stroke-1 md:stroke-0 stroke-black"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full h-16 rounded-xl bg-stone-100 flex items-center pl-2 pr-2 justify-between hover:bg-slate-200 md:w-full cursor-pointer">
          <div className="flex gap-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_437_521)">
                <path
                  d="M7.99984 0.666504C6.54944 0.666504 5.13162 1.0966 3.92566 1.90239C2.7197 2.70819 1.77977 3.8535 1.22472 5.19349C0.669681 6.53348 0.524457 8.00797 0.807415 9.4305C1.09037 10.853 1.78881 12.1597 2.81439 13.1853C3.83998 14.2109 5.14665 14.9093 6.56918 15.1923C7.99171 15.4752 9.4662 15.33 10.8062 14.775C12.1462 14.2199 13.2915 13.28 14.0973 12.074C14.9031 10.8681 15.3332 9.45023 15.3332 7.99984C15.3309 6.05562 14.5575 4.19169 13.1828 2.81692C11.808 1.44215 9.94406 0.668798 7.99984 0.666504ZM7.99984 13.9998C6.81315 13.9998 5.65311 13.6479 4.66642 12.9887C3.67972 12.3294 2.91069 11.3923 2.45656 10.2959C2.00244 9.19958 1.88362 7.99318 2.11513 6.8293C2.34664 5.66541 2.91808 4.59631 3.7572 3.7572C4.59632 2.91808 5.66541 2.34664 6.8293 2.11513C7.99319 1.88361 9.19958 2.00243 10.2959 2.45656C11.3923 2.91069 12.3294 3.67972 12.9887 4.66642C13.6479 5.65311 13.9998 6.81315 13.9998 7.99984C13.9979 9.59054 13.3651 11.1155 12.2403 12.2403C11.1155 13.3651 9.59054 13.9979 7.99984 13.9998ZM8.66651 10.9998V12.3332H7.33317V10.9998H8.66651ZM10.6665 6.33317C10.6672 6.73299 10.5777 7.12781 10.4045 7.4882C10.2314 7.84858 9.9791 8.16522 9.66651 8.4145C9.16156 8.8058 8.82011 9.37084 8.70851 9.99984H7.35384C7.41279 9.48586 7.57405 8.98888 7.82812 8.53822C8.08219 8.08756 8.42393 7.69233 8.83317 7.37584C8.99741 7.24439 9.12821 7.07596 9.2149 6.88429C9.30158 6.69262 9.34169 6.48317 9.33193 6.27304C9.32218 6.0629 9.26285 5.85806 9.15878 5.67525C9.05472 5.49243 8.90888 5.33684 8.73318 5.22117C8.53735 5.09317 8.31203 5.0174 8.07865 5.00106C7.84527 4.98473 7.61159 5.02837 7.39984 5.12784C7.17397 5.2361 6.98442 5.40765 6.85423 5.62163C6.72404 5.83562 6.65882 6.08281 6.66651 6.33317C6.66651 6.50998 6.59627 6.67955 6.47125 6.80457C6.34622 6.9296 6.17665 6.99984 5.99984 6.99984C5.82303 6.99984 5.65346 6.9296 5.52844 6.80457C5.40341 6.67955 5.33317 6.50998 5.33317 6.33317C5.32326 5.82079 5.46463 5.31687 5.73961 4.88442C6.01459 4.45197 6.41097 4.11019 6.87917 3.90184C7.29421 3.71635 7.74927 3.63837 8.20238 3.67507C8.65549 3.71177 9.09207 3.86198 9.47184 4.11184C9.83881 4.35477 10.1399 4.68474 10.3484 5.07233C10.5569 5.45992 10.6661 5.89308 10.6665 6.33317Z"
                  fill="#000"
                />
              </g>
              <defs>
                <clipPath id="clip0_437_521">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-2xl md:text-lg">FAQ</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 stroke-1 md:stroke-0 stroke-black"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full h-16 rounded-xl bg-stone-100 flex items-center pl-2 pr-2 justify-between hover:bg-slate-200 md:w-full cursor-pointer">
          <div className="flex gap-4 items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_437_530)">
                <path
                  d="M11.7881 16.0038C11.4182 16.0035 11.0508 15.9437 10.7001 15.8264C8.25055 15.0057 6.02424 13.6291 4.19541 11.8044C2.37081 9.97598 0.994416 7.74983 0.174075 5.30045C-0.0429815 4.65577 -0.0619505 3.96085 0.119614 3.3053C0.301179 2.64974 0.674952 2.0636 1.19274 1.62245L2.45941 0.537112C2.68712 0.341905 2.95179 0.194534 3.23766 0.10378C3.52352 0.0130265 3.82473 -0.0192527 4.12334 0.00886599C4.42195 0.0369847 4.71184 0.124926 4.97574 0.26745C5.23964 0.409973 5.47214 0.604162 5.65941 0.838445L7.26674 2.84978C7.52357 3.17216 7.67486 3.56583 7.70003 3.97724C7.7252 4.38865 7.62303 4.79783 7.40741 5.14911L6.67407 6.33911C6.59522 6.46677 6.56173 6.61729 6.57903 6.76634C6.59633 6.91539 6.66341 7.05425 6.76941 7.16045L8.83607 9.22711C8.94215 9.33306 9.08084 9.40016 9.22974 9.41758C9.37865 9.435 9.52908 9.40172 9.65674 9.32311L10.8474 8.58978C11.1986 8.37378 11.6078 8.27139 12.0193 8.29656C12.4308 8.32174 12.8245 8.47326 13.1467 8.73044L15.1581 10.3398C15.3923 10.5271 15.5864 10.7596 15.7289 11.0235C15.8713 11.2874 15.9592 11.5773 15.9874 11.8759C16.0155 12.1745 15.9832 12.4756 15.8925 12.7615C15.8018 13.0473 15.6545 13.312 15.4594 13.5398L14.3741 14.8064C14.0552 15.1811 13.6589 15.4821 13.2124 15.6888C12.766 15.8955 12.28 16.003 11.7881 16.0038ZM3.91274 1.33311C3.69799 1.33297 3.49031 1.40984 3.32741 1.54978L2.06008 2.63511C1.74422 2.90416 1.51617 3.26163 1.40531 3.66146C1.29445 4.06129 1.30586 4.48516 1.43808 4.87844C2.19324 7.13165 3.45961 9.17952 5.13807 10.8618C6.82059 12.5401 8.86869 13.8062 11.1221 14.5611C11.5153 14.6934 11.9391 14.7049 12.3389 14.5942C12.7388 14.4834 13.0963 14.2555 13.3654 13.9398L14.4501 12.6731C14.5288 12.5813 14.5882 12.4746 14.6247 12.3593C14.6613 12.244 14.6742 12.1226 14.6629 12.0022C14.6515 11.8818 14.616 11.765 14.5584 11.6586C14.5009 11.5522 14.4226 11.4585 14.3281 11.3831L12.3167 9.77378C12.2094 9.68788 12.0781 9.63729 11.9408 9.62894C11.8036 9.62059 11.6671 9.65487 11.5501 9.72711L10.3601 10.4604C9.97743 10.6981 9.52551 10.7991 9.0781 10.7467C8.63069 10.6944 8.21424 10.492 7.89674 10.1724L5.83007 8.10578C5.51005 7.78787 5.30732 7.37082 5.25501 6.92277C5.20269 6.47473 5.3039 6.02219 5.54207 5.63911L6.27541 4.44911C6.34764 4.33211 6.38193 4.19563 6.37358 4.05838C6.36523 3.92113 6.31464 3.78982 6.22874 3.68245L4.61674 1.67178C4.53255 1.56587 4.42548 1.4804 4.30356 1.42175C4.18164 1.36309 4.04803 1.33279 3.91274 1.33311Z"
                  fill="#000"
                />
              </g>
              <defs>
                <clipPath id="clip0_437_530">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-2xl md:text-lg">Support</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 stroke-1 md:stroke-0 stroke-black"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

      </div>
      <div className="fixed top-5 right-5">
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Profile;