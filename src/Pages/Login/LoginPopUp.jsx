import { useState } from "react";
import { Resources } from "../../assets/Resources";

import LoginPopUpForm from "./LoginPopUpForm";

export default function LoginPage({ showLogin, setShowLogin }) {
  const [isActive, setIsActive] = useState({ email: true, phone: false });

  const [currState, setCurrState] = useState("Login");

  const activeState =
    "text-sm border-b-[1.5px] border-[#774000] text-[#774000] font-bold px-2 py-1 mr-4";
  const inActiveState = "text-sm text-gray-400 px-2 py-1 mr-4";

  const handleClickEmailPhone = (evt) => {
    console.log("function called");
    if (evt.target.textContent === "Email") {
      setIsActive({ email: true, phone: false });
    } else {
      setIsActive({ email: false, phone: true });
    }
  };

  return (
    <section className="bg-[#000000a8] z-50 w-full absolute h-full flex justify-center items-center">
      <section className="bg-white w-[80%] tablet:w-[35%] rounded-3xl flex justify-center items-center">
        <div className="w-[85%]">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold py-3 ">{currState}</h1>
            <img
              onClick={() => setShowLogin(false)}
              src={Resources.removeIcon}
              alt="icon"
              className="w-[30px] cursor-pointer"
            />
          </div>

          <div className="mb-8 ">
            <button
              onClick={handleClickEmailPhone}
              className={isActive.email ? activeState : inActiveState}
            >
              Email
            </button>
            <button
              onClick={handleClickEmailPhone}
              className={isActive.phone ? activeState : inActiveState}
            >
              Phone
            </button>
          </div>
          <LoginPopUpForm
            isActive={isActive}
            currState={currState}
            setCurrState={setCurrState}
          />
          <div className=" my-6 flex justify-center">
            <div className="bg-gray-200 mt-3 h-px flex-1 sm:self-stretch"></div>
            <p className="text-gray-400">Or</p>
            <div className="bg-gray-200 mt-3 h-px flex-1 sm:self-stretch"></div>
          </div>

          <div className="flex justify-between  mb-8">
            <button className="border border-gray-300 w-[30%] p-1 rounded-lg flex justify-center items-center hover:shadow-md">
              <img src={Resources.appleLogo} alt="logo" />
            </button>

            <button className="border border-gray-300 w-[30%] p-1 rounded-lg flex justify-center items-center hover:shadow-md">
              <img src={Resources.googleLogo} alt="logo" />
            </button>
            <button className="border border-gray-300 w-[30%] p-1 rounded-lg flex justify-center items-center hover:shadow-md">
              <img src={Resources.facebookLogo} alt="logo" />
            </button>
          </div>
          <p className="mt-1 mb-4 text-xs text-gray-500">
            {currState === "Login" ? (
              <span>
                New to LuxeInteriors?{" "}
                <span
                  onClick={() => setCurrState("Register")}
                  className="underline text-[#774000] font-bold cursor-pointer"
                >
                  Register
                </span>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <span
                  onClick={() => setCurrState("Login")}
                  className="underline text-[#774000] font-bold cursor-pointer"
                >
                  Login
                </span>
              </span>
            )}
          </p>
        </div>
      </section>
    </section>
  );
}
