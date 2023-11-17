/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

const ContactForm = ({ data }) => {
  const { saveEdit, saving, saved } = useAppContext();

  const [info, setInfo] = useState({
    email: data?.contact_info?.email || "",
    phone1: data?.contact_info?.phone1 || 0,
    phone2: data?.contact_info?.phone2 || 0,
  });

  function handleChange(e) {
    const { value, id } = e.target;
    setInfo((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  function handleSubmit() {
    saveEdit(info, "contact_info", "homepage");
  }

  return (
    <form className="w-full md:w-[60%] flex flex-col gap-4 mt-5">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 p-3 outline-none"
          placeholder="Enter email"
          value={info?.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone1">Phone Number 1</label>
        <input
          type="number"
          id="phone1"
          className="w-full border border-gray-300 p-3 outline-none"
          placeholder="Enter phone number"
          value={info?.phone1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone2">Phone Number 2</label>
        <input
          type="number"
          id="phone2"
          className="w-full border border-gray-300 p-3 outline-none"
          placeholder="Enter phone number"
          value={info?.phone2}
          onChange={handleChange}
        />
      </div>
      {saved && <p className="bg-green-100 mt-3 p-2">Saved successfully!</p>}
      <button
        disabled={saving}
        onClick={handleSubmit}
        className={` w-fit bg-[#912656] hover:bg-[#912656]/80 px-5 md:px-8 py-2 md:mt-3 rounded-sm text-white font-medium transition-all duration-300`}
      >
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default ContactForm;
