import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

const AdminLogin = () => {
  const {
    setSendError,
    setFormData,
    setIsValidEmail,
    formData,
    isValidEmail,
    sendError,
    loading,
    login,
  } = useAppContext();

  function handleChange(e) {
    setSendError("");
    const { value, id } = e.target;
    let isValidEmail = true;

    if (id === "email") {
      // Define a regex pattern for email validation
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      isValidEmail = emailPattern.test(value);
    }

    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
    setIsValidEmail(isValidEmail);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await login();
  }

  const isFormDataValid = Object.values(formData).every((value) =>
    Boolean(value)
  );

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full  flex md:flex-row flex-col font-mont">
      <div className="w-full h-[250px] md:h-screen bg-caro3 bg-no-repeat bg-cover bg-center relative">
        <div className="w-full h-full absolute top-0 left-0 p-5 md:p-10 bg-slate-600/50 flex flex-col">
          {/* <img
            alt=""
            src="/images/logo.png"
            className="w-[130px] h-auto md:w-[200px] md:h-[180px] rounded-sm md:rounded-b-lg"
          /> */}
          <p className="text-[1.75rem] md:text-[2.75rem] mb-auto md:mt-[100px] text-white font-bold first-section-text">
            Lona Care
            <br /> Admin Login
          </p>
        </div>
      </div>
      <div className="w-full h-full md:min-h-screen bg-white p-5 md:p-14 flex items-center">
        <div className="w-full">
          <h2 className="text-[1.75rem] md:text-[2em] font-bold">Login</h2>

          <form className="mt-8 flex flex-col gap-3">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                value={formData?.email}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none ${
                  isValidEmail ? "border-black/30" : "border-red-500"
                }`}
                required
              />
              {!isValidEmail && (
                <p className="text-red-500">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handleChange}
                value={formData?.password}
                className={`w-full px-3 py-4 border border-black/30 mt-2 outline-none`}
                required
              />
              <p
                onClick={() => setShowPassword((prev) => !prev)}
                className="w-fit absolute top-[53%] right-3 font-medium px-2 py-1 bg-[#912656]/20 rounded-lg cursor-pointer text-[.75rem]"
              >
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>

            {sendError && <p className="text-red-500">{sendError}</p>}

            <div className="w-full flex justify-center mt-7 md:mt-14">
              <button
                disabled={!isFormDataValid || !isValidEmail}
                onClick={(e) => handleSubmit(e)}
                className={`w-[200px] min-w-fit bg-[#912656] hover:bg-[#912656]/80 px-5 md:px-8 py-2 md:py-3 md:mt-3 rounded-sm text-white font-medium transition-all duration-300 ${
                  !isFormDataValid || (!isValidEmail && "cursor-not-allowed")
                }`}
              >
                {loading ? "Processing" : "Login"}
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
