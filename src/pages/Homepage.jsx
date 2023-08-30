import ScrollToTop from "../ScrollToTop";

export default function Homepage() {
  return (
    <>
      {/* <Header /> */}
      <main className="bg-white text-black">
        <section className="w-full h-[400px] md:h-[500px] bg-hero bg-cover bg-center relative">
          <div className="w-full h-full absolute top-0 left-0 bg-slate-800/50 px-3 py-[100px] lg:px-[350px] lg:py-[150px]">
            <div className="flex flex-col gap-3 mt-[50px] md:mt-0">
              <h1 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight">
                Trade Stocks, Forex <br /> and Crypto
              </h1>
              <button
                //   onClick={() => navigate("/register")}
                className="w-fit bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white font-medium"
              >
                Get Started
              </button>
              {/* {!user?.accessToken ? (
                <button
                  onClick={() => navigate("/register")}
                  className="w-fit bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white font-medium"
                >
                  Get Started
                </button>
              ) : (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-fit bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white font-medium"
                >
                  Dashboard
                </button>
              )} */}
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] px-3 py-[70px] lg:px-[350px]">
          <h1 className="text-[1.5rem] lg:text-[2rem] text-center text-sky-900">
            Start Making Profits in 3 Steps
          </h1>
          <p className="text-center tracking-wider mt-3 font-light">
            Embark on Profitable Ventures with Ease: Achieve financial success
            in just three straightforward steps. Our streamlined process
            empowers you to begin generating profits swiftly and efficiently.
            Take the first step towards a lucrative future today!
          </p>
          <div className="w-full flex flex-col md:flex-row gap-5 mt-7">
            <div className="w-full h-[200px] bg-slate-100 p-3 shadow-md rounded-lg flex flex-col justify-center items-center gap-3">
              <img
                className="w-8 h-8"
                alt=""
                src="/images/icons8-register-50.png"
              />
              <p className="text-[1.25rem] text-sky-900">1. Register</p>
              <p className="tracking-wider text-center font-light">
                Open an account for free in just a few minutes
              </p>
            </div>
            <div className="w-full h-[200px] bg-slate-100 p-3 shadow-md rounded-lg flex flex-col justify-center items-center gap-3">
              <img
                className="w-8 h-8"
                alt=""
                src="/images/icons8-login-64.png"
              />
              <p className="text-[1.25rem] text-sky-900">2. Login</p>
              <p className="tracking-wider text-center font-light">
                Login to your dashboard, to manage your account
              </p>
            </div>
            <div className="w-full h-[200px] bg-slate-100 p-3 shadow-md rounded-lg flex flex-col justify-center items-center gap-3">
              <img
                className="w-8 h-8"
                alt=""
                src="/images/icons8-deposit-50.png"
              />
              <p className="text-[1.25rem] text-sky-900">3. Deposit</p>
              <p className="tracking-wider text-center font-light">
                Minimum deposit of $10 for optimal trading
              </p>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[300px] px-3 py-[70px] lg:px-[350px] bg-hero2 bg-cover bg-center relative">
          <div className="w-full h-full absolute bg-slate-950/80 top-0 left-0 flex flex-col justify-center items-center">
            <h1 className="text-[1.5rem] lg:text-[2rem] text-center text-white">
              Online Trading Platform
            </h1>
            <button
              //   onClick={() => navigate("/dashboard")}
              className={`px-10 py-2 mt-4 bg-transparent border-2 uppercase text-[.85rem] font-medium hover:bg-orange-500/80 hover:text-white text-white border-white rounded-md`}
            >
              Get Started
            </button>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
      <ScrollToTop />
    </>
  );
}
