import { useState } from "react";
import { useForm } from "react-hook-form";

import { Resources } from "../assets/Resources";

export default function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  const { errors } = formState;

  const formSubmit = (formData) => {
    setIsSubscribed(true);
    console.log("submitted", formData);
  };

  const validtionOptions = {
    email: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid Format",
      },
    },
  };

  return (
    <footer id="footer" className="my-5 flex flex-wrap justify-center">
      <div className="w-full my-5 flex justify-center">
        <div className="bg-gray-200 h-px flex-1 sm:self-stretch"></div>
      </div>
      <section className="w-[90%] flex flex-wrap tablet:flex-nowrap tablet:justify-between">
        <div className="w-full tablet:w-[25%]">
          <p className="text-2xl font-bold">LuxeInteriors</p>
          <p className="text-gray-500 my-4 text-base">
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website
          </p>
          <ul>
            <li className="text-gray-500 my-4 text-base">
              <img
                src={Resources.locationIcon}
                alt="icon"
                className="w-[20px] h-[20px] inline"
              />{" "}
              New York, USA
            </li>
            <li className="text-gray-500 my-4 text-base">
              <img
                src={Resources.phoneIcon}
                alt="icon"
                className="w-[20px] h-[20px] inline"
              />{" "}
              +1 408 XXX XXXX
            </li>
            <li className="text-gray-500 my-4 text-base">
              <img
                src={Resources.globeIcon}
                alt="icon"
                className="w-[20px] h-[20px] inline"
              />{" "}
              www.luxeinteriors.com
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-wrap tablet:w-[50%] tablet:justify-evenly">
          <div className="w-full my-4 tablet:w-[25%]">
            <p className="font-bold text-lg">Sitemap</p>
            <ul>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Products</a>
              </li>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Services</a>
              </li>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Articles</a>
              </li>
              <li className="text-gray-500 mt-4 mb-2">
                <a href="#">Contact-Us</a>
              </li>
            </ul>
          </div>

          <div className="w-full my-4 tablet:w-[25%]">
            <p className="font-bold text-lg">Category</p>
            <ul>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Living Room</a>
              </li>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Bed Room</a>
              </li>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Kitchen</a>
              </li>
              <li className="text-gray-500 mt-4 mb-2 text-base">
                <a href="#">Bath Room</a>
              </li>
            </ul>
          </div>

          <div className="w-full my-4 tablet:w-[25%]">
            <p className="font-bold text-lg">Our Company</p>
            <ul>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">About Us</a>
              </li>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Vaccancies</a>
              </li>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-gray-500 my-4 text-base">
                <a href="#">Return Policy</a>
              </li>
              <li className="text-gray-500 mt-4 mb-2 text-base">
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full my-4 tablet:w-[25%]">
          <p className="font-bold mb-4 text-lg">Stay Updated</p>
          <form action="#nowhere" onSubmit={handleSubmit(formSubmit)}>
            <input
              type="email"
              {...register("email", validtionOptions.email)}
              placeholder="Enter email"
              className="p-1 pl-3 mb-3 w-full rounded-full bg-gray-100 focus:outline-none focus:scale-[1.05]"
            />
            {errors.email && (
              <p className="text-sm mb-3 text-[#774000]">
                {errors.email.message}
              </p>
            )}
            <button
              className={`bg-[#774000] text-[#ffecd5] rounded-full w-1/2 px-4 py-1 ${
                isSubscribed ? "" : "hover:scale-[1.05]"
              }`}
            >
              {isSubscribed ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>
      <div className=" my-5 flex justify-center w-full">
        <div className="bg-gray-200 h-px flex-1 sm:self-stretch"></div>
      </div>
      <p className="text-sm text-gray-500 w-[90%]">
        © 2023 by Luxe Interiors all rights reserved.
      </p>
    </footer>
  );
}
