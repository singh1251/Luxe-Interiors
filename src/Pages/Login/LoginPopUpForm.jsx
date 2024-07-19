import { useForm } from "react-hook-form";

export default function LoginForm({ isActive, currState, setCurrState }) {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  const { errors } = formState;

  const formSubmit = (formData) => {
    console.log("Form Submitted", formData);
  };

  const validtionOptions = {
    firstName: {
      required: {
        value: true,
        message: "First Name is required",
      },
    },

    lastName: {
      required: {
        value: true,
        message: "Last Name is required",
      },
    },

    loginEmail: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid Format",
      },
    },

    loginPassword: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters long",
      },
      pattern: {
        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/,
        message:
          "Password must have at least: one number and one of the special characters !@#$%^&*",
      },
    },

    confirmPassword: {
      required: {
        value: true,
        message: "Password is required",
      },

      validate: (fieldValue) => {
        return (
          fieldValue === loginpassword || "Passwords do not match, Try again"
        );
      },
    },

    loginPhone: {
      required: {
        value: true,
        message: "Pnone number is Required",
      },
      pattern: {
        value: /^(?:\+91|91)?[6-9]\d{9}$/,
        message: "Invalid Phone number",
      },
    },

    loginOtp: {
      required: {
        value: true,
        message: "OTP is Required",
      },
      pattern: {
        value: /^\d{6}$/,
        message: "Enter the 6-digit OTP",
      },
    },
  };

  return (
    <form
      action="#nowhere"
      onSubmit={handleSubmit(formSubmit)}
      noValidate
      className="w-full"
    >
      <section>
        {isActive.email ? (
          <div className="w-full">
            {currState === "Login" ? (
              <></>
            ) : (
              <>
                <div className="w-full mb-5">
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", validtionOptions.firstName)}
                    placeholder="First Name"
                    className="rounded-full bg-gray-100 w-full px-3 py-1"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-[#774000]">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="w-full mb-5">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", validtionOptions.lastName)}
                    placeholder="last Name"
                    className="rounded-full bg-gray-100 w-full px-3 py-1"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-[#774000]">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </>
            )}
            <div className="w-full mb-5">
              <input
                type="email"
                id="loginEmail"
                {...register("loginEmail", validtionOptions.loginEmail)}
                placeholder="Enter email"
                className="rounded-full bg-gray-100 w-full px-3 py-1"
              />
              {errors.loginEmail && (
                <p className="text-xs text-[#774000]">
                  {errors.loginEmail.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <input
                type="password"
                id="loginPassword"
                {...register("loginPassword", validtionOptions.loginPassword)}
                placeholder="Enter password"
                className="rounded-full bg-gray-100 w-full px-3 py-1"
              />
              {errors.loginPassword && (
                <p className="text-xs text-[#774000]">
                  {errors.loginPassword.message}
                </p>
              )}
            </div>

            {currState === "Login" ? (
              <>
                <div className="flex justify-end w-full">
                  <a
                    href="#forgotPassword"
                    className="underline text-xs text-[#774000] font-bold"
                  >
                    Forgot password?
                  </a>
                </div>
              </>
            ) : (
              <div className="w-full my-5">
                <input
                  type="password"
                  id="confirmPassword"
                  {...register(
                    "confirmPassword",
                    validtionOptions.confirmPassword
                  )}
                  placeholder="Re-Enter password"
                  className="rounded-full bg-gray-100 w-full px-3 py-1"
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-[#774000]">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full">
            {currState === "Login" ? (
              <></>
            ) : (
              <>
                <div className="w-full mb-3">
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName", validtionOptions.firstName)}
                    placeholder="First Name"
                    className="rounded-full bg-gray-100 w-full px-3 py-1"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-[#774000]">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="w-full mb-3">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", validtionOptions.lastName)}
                    placeholder="last Name"
                    className="rounded-full bg-gray-100 w-full px-3 py-1"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-[#774000]">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </>
            )}

            <div className="w-full mb-3">
              <input
                type="tel"
                id="loginPhone"
                {...register("loginPhone", validtionOptions.loginPhone)}
                placeholder="Enter phone number"
                className="rounded-full bg-gray-100 w-full px-3 py-1"
              />
              {errors.loginPhone && (
                <p className="text-xs text-[#774000]">
                  {errors.loginPhone.message}
                </p>
              )}
            </div>

            <div className="flex justify-center mb-5">
              <button className="border-1 border-[#774000] bg-[#774000] text-[#FFECD5] w-1/3 px-2 py-1 rounded-full">
                Get OTP
              </button>
            </div>

            <div className="w-full mb-5">
              <input
                type="text"
                id="loginOtp"
                {...register("loginOtp", validtionOptions.loginOtp)}
                placeholder="Enter OTP"
                className="rounded-full bg-gray-100 w-full px-3 py-1"
              />
              {errors.loginOtp && (
                <p className="text-xs text-[#774000]">
                  {errors.loginOtp.message}
                </p>
              )}
              <div className="flex justify-end w-full">
                <a
                  href="#ResendOTP"
                  className="underline text-xs text-[#774000] font-bold"
                >
                  Resend OTP?
                </a>
              </div>
            </div>
          </div>
        )}
        <button className="border-1 border-[#774000] bg-[#774000] text-[#FFECD5] w-full px-3 py-1 mt-3 rounded-full">
          {currState === "Login" ? "Login" : "Register"}
        </button>
        {currState === "Register" && (
          <p className="text-xs mt-1">
            By clicking Register you agree to our{" "}
            <a href="#termsOfUse" className="text-[#774000] font-bold">
              Terms of use
            </a>{" "}
            and{" "}
            <a href="#privacyPolicy" className="text-[#774000] font-bold">
              privacy policy
            </a>
          </p>
        )}
      </section>
    </form>
  );
}
