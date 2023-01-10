import { FunctionComponent } from "react";
import { useHandleChange } from "../../hooks/useCustomForm";

export const PersoInfo: FunctionComponent = () => {
  const handleChange = useHandleChange();
  return (
    <div className="my-8 mx-10">
      <div>
        <h1 className="mb-3 text-3xl font-semibold">Personal info</h1>
        <p className="mb-5 text-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div>
        <form className="w-full max-w-m flex flex-col" action="">
          <label className="text-gray-700 font-semibold py-1" htmlFor="name">
            Name
          </label>
          <input
            className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-4 mb-3 focus:border-purplish-blue transition"
            type="text"
            id="name"
            name="name"
            minLength={4}
            placeholder="e.g. Stephen King"
            required
            onChange={handleChange}
          ></input>
          <label className="text-gray-700 font-semibold py-1" htmlFor="email">
            Email address
          </label>
          <input
            className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-4 mb-3 focus:border-purplish-blue transition"
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            required
            onChange={handleChange}
          ></input>
          <label className="text-gray-700 font-semibold py-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-4 mb-3 focus:border-purplish-blue transition"
            type="tel"
            name="phoneNumber"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            required
            onChange={handleChange}
          ></input>
          <button
            type="submit"
            className="w-28 h-12 mt-12 border center rounded-lg bg-purplish-blue text-alabaster font-medium "
          >
            Next Step
          </button>
        </form>
      </div>
    </div>
  );
};
