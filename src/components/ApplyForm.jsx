import { useRef, useState } from "react";

const ApplyForm = () => {
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxR5BuH07aT66Hppi8nNZaN4vjvWUdgD9hfmHPql-AD0KjSN_gGIucnI_JJrdISm7TRCg/exec";

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then(() => {
        // console.log("SUCCESSFULLY SUBMITTED", res);
        setLoading(false);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          window.location.reload();
        }, 5000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      method="post"
      ref={formRef}
      name="google-sheet"
      onSubmit={handleSubmit}
      className="w-full md:w-[70%] min-h-[600px] bg-gray-200 rounded-sm border border-purple-200 mt-5 p-4 md:p-5 flex flex-col gap-4"
    >
      <div className="w-full flex gap-4 md:flex-row flex-col">
        <div className="w-full">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium"
          >
            First name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-sm focus:ring-[#86198f] focus:border-[#86198f] block w-full p-3 dark:border-[#86198f] dark:placeholder-gray-400 dark:focus:ring-[#86198f] dark:focus:border-[#86198f]"
            placeholder="John"
            required
            // value={regForm.first_name || ""}
            // onChange={handleRegChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium">
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-sm focus:ring-[#86198f] focus:border-[#86198f] block w-full p-3 dark:border-[#86198f] dark:placeholder-gray-400 dark:focus:ring-[#86198f] dark:focus:border-[#86198f]"
            placeholder="Doe"
            required
            // value={regForm.last_name || ""}
            // onChange={handleRegChange}
          />
        </div>
      </div>

      <div className="w-full flex gap-4 md:flex-row flex-col">
        <div className="w-full">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-sm focus:ring-[#86198f] focus:border-[#86198f] block w-full p-3 dark:border-[#86198f] dark:placeholder-gray-400 dark:focus:ring-[#86198f] dark:focus:border-[#86198f]"
            placeholder="John"
            required
            // value={regForm.first_name || ""}
            // onChange={handleRegChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="number" className="block mb-2 text-sm font-medium">
            Phone number
          </label>
          <input
            type="text"
            name="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-sm focus:ring-[#86198f] focus:border-[#86198f] block w-full p-3 dark:border-[#86198f] dark:placeholder-gray-400 dark:focus:ring-[#86198f] dark:focus:border-[#86198f]"
            placeholder="1234567890"
            required
            // value={regForm.last_name || ""}
            // onChange={handleRegChange}
          />
        </div>
      </div>
      <div className="w-full flex gap-4 md:flex-row flex-col">
        <div className="w-full">
          <label htmlFor="city" className="block mb-2 text-sm font-medium">
            City/town
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-sm focus:ring-[#86198f] focus:border-[#86198f] block w-full p-3 dark:border-[#86198f] dark:placeholder-gray-400 dark:focus:ring-[#86198f] dark:focus:border-[#86198f]"
            placeholder="City"
            required
            // value={regForm.first_name || ""}
            // onChange={handleRegChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="post_code" className="block mb-2 text-sm font-medium">
            Post code
          </label>
          <input
            type="number"
            name="post_code"
            id="post_code"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-sm focus:ring-[#86198f] focus:border-[#86198f] block w-full p-3 dark:border-[#86198f] dark:placeholder-gray-400 dark:focus:ring-[#86198f] dark:focus:border-[#86198f]"
            placeholder="12345"
            required
            // value={regForm.last_name || ""}
            // onChange={handleRegChange}
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="enquiry" className="block mb-2 text-sm font-medium">
          Please tell us about your enquiry
        </label>
        <textarea
          name="enquiry"
          id="enquiry"
          className="bg-gray-50 h-[200px] border border-gray-300 text-gray-900 text-[.75em] sm:text-sm rounded-sm focus:ring-[#86198f] focus:border-[#86198f] block w-full p-3 dark:border-[#86198f] dark:placeholder-gray-400 dark:focus:ring-[#86198f] dark:focus:border-[#86198f]"
          placeholder="Enquiry"
          required
          // value={regForm.last_name || ""}
          // onChange={handleRegChange}
        />
      </div>
      <div className="w-full flex justify-end">
        <button
          //   onClick={() => navigate(`/service/${item?.title}`)}
          className="w-fit bg-[#86198f] border border-[#86198f] mt-4 hover:bg-white hover:text-[#86198f] px-8 py-2 rounded-sm text-white font-medium transition-all duration-300"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
      {submitted && (
        <div className="w-full p-3 border border-green-500 bg-green-500/10 rounded-sm">
          Application Submitted Successfully
        </div>
      )}
    </form>
  );
};

export default ApplyForm;
