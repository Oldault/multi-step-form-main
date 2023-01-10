import { FunctionComponent, useState } from "react";
import Image from "next/image";
import arcadeIcon from "../../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../../assets/images/icon-advanced.svg";
import proIcon from "../../../../assets/images/icon-pro.svg";

export const PlanInfo: FunctionComponent = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const yearlyTextActive = active
    ? "mx-3 text-l font-semibold text-marine-blue dark:text-gray-300 transition"
    : "mx-3 text-l font-semibold text-cool-gray  dark:text-gray-300 transition";
  const monthlyTextActive = active
    ? "mx-3 text-l font-semibold text-cool-gray dark:text-gray-300 transition"
    : "mx-3 text-l font-semibold text-marine-blue dark:text-gray-300 transition";

  return (
    <div className=" my-8 mx-10">
      <div>
        <h1 className="mb-3 text-3xl font-semibold">Select your plan</h1>
        <p className="mb-5 text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="w-full max-w-l flex space-x-10">
        <div className="border-2 p-4 rounded-lg hover:border-purplish-blue transition border-cool-gray cursor-pointer">
          <Image src={arcadeIcon} alt="arcadeIcon" className="pb-10 mr-16" />
          <h2 className="font-semibold text-marine-blue">Arcade</h2>
          <p className="font-light text-cool-gray">$9/mo</p>
        </div>
        <div className="border-2 p-4 rounded-lg hover:border-purplish-blue transition border-cool-gray cursor-pointer">
          <Image
            src={advancedIcon}
            alt="advancedIcon"
            className="pb-10 mr-16"
          />
          <h2 className="font-semibold text-marine-blue">Advanced</h2>
          <p className="font-light text-cool-gray">$12/mo</p>
        </div>
        <div className="border-2 p-4 rounded-lg hover:border-purplish-blue transition border-cool-gray cursor-pointer">
          <Image src={proIcon} alt="proIcon" className="pb-10 mr-16" />
          <h2 className="font-semibold text-marine-blue">Pro</h2>
          <p className="font-light text-cool-gray">$15/mo</p>
        </div>
      </div>
      <div className="w-full my-6 bg-light-purple rounded-md py-4">
        <div>
          <label className="flex items-center justify-center relative cursor-pointer my-full h-full">
            <span className={monthlyTextActive}>Monthly</span>
            <input type="checkbox" value="" className="sr-only peer"></input>
            <div
              onClick={handleClick}
              className="w-14 h-7 bg-marine-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:ml-[3px] after:flex after:bg-alabaster after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 border"
            ></div>
            <span className={yearlyTextActive}>Yearly</span>
          </label>
        </div>
      </div>
    </div>
  );
};
