const ContactForm = () => {
  return (
    <form className="w-full md:w-[60%] flex flex-col gap-4 mt-5">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 p-3 outline-none"
          placeholder="Enter email"
        />
      </div>
      <div>
        <label htmlFor="phone1">Phone Number 1</label>
        <input
          type="number"
          id="phone1"
          className="w-full border border-gray-300 p-3 outline-none"
          placeholder="Enter phone number"
        />
      </div>
      <div>
        <label htmlFor="phone2">Phone Number 2</label>
        <input
          type="number"
          id="phone2"
          className="w-full border border-gray-300 p-3 outline-none"
          placeholder="Enter phone number"
        />
      </div>
      <button
        // disabled={loading}
        // onClick={() => logout()}
        className={` w-fit bg-[#912656] hover:bg-[#912656]/80 px-5 md:px-8 py-2 md:mt-3 rounded-sm text-white font-medium transition-all duration-300`}
      >
        Save
      </button>{" "}
    </form>
  );
};

export default ContactForm;
