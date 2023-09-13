import { useAppContext } from "../contexts/AppContext";

const SearchCont = () => {
  const { setSearchOpen } = useAppContext();

  return (
    <section className="w-full h-screen bg-black/90 px-3 pt-[100px] flex justify-center fixed top-0 left-0 z-[999]">
      <div className="w-full md:w-[550px] h-fit bg-white p-5 rounded-sm relative">
        <div
          onClick={() => setSearchOpen(false)}
          className="w-fit h-fit p-2  bg-white rounded-full cursor-pointer mr-[25px] absolute top-[-50px] right-[-25px] md:right-[-100px]"
        >
          <img
            className="w-5 h-5  text-white"
            alt=""
            src="/images/icons8-close-50.png"
          />
        </div>
        <p className="text-[1.5rem] mb-3">Search the website</p>
        <div className="w-full flex gap-3 items-center">
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-sm focus:ring-[#86198f] focus:border-[#86198f] block w-full p-3 dark:border-[#86198f] dark:placeholder-gray-400 dark:focus:ring-[#86198f] dark:focus:border-[#86198f]"
            placeholder="City, town or address"
            required
            // value={regForm.first_name || ""}
            // onChange={handleRegChange}
          />
          <button
            // onClick={() => navigate("/service")}
            className="w-fit bg-[#d946ef] hover:bg-white hover:text-[#86198f] px-5 md:px-8 py-2 md:py-3 rounded-sm text-white font-medium transition-all duration-300"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchCont;
