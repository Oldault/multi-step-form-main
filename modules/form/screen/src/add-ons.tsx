import { FunctionComponent } from "react";

export const ChosenAddOns: FunctionComponent = () => {
  return (
    <div className="my-8 mx-10">
      <div>
        <h1 className="mb-3 text-3xl font-semibold">Pick add-ons</h1>
        <p className="mb-5 text-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="mt-12">
        <label className="my-4 flex border py-4 px-5 w-full justify-between items-center rounded-lg hover:border-purplish-blue transition border-cool-gray cursor-pointer">
          <div className="flex items-center">
            <input type="checkbox" className="h-5 w-5 mr-5 bg-strawberry-red" />
            <span>
              <h2 className="font-semibold text-marine-blue">Online service</h2>
              <p className="font-normal text-cool-gray text-sm">
                Acces to multiplayer games
              </p>
            </span>
          </div>
          <span className="text-purplish-blue font-normal">+$1/mo</span>
        </label>
        <label className="my-4 flex border py-4 px-5 w-full justify-between items-center rounded-lg hover:border-purplish-blue transition border-cool-gray cursor-pointer">
          <div className="flex items-center">
            <input type="checkbox" className="h-5 w-5 mr-5 bg-strawberry-red" />
            <span>
              <h2 className="font-semibold text-marine-blue">Larger storage</h2>
              <p className="font-normal text-cool-gray text-sm">
                Extra 1TB of cloud save
              </p>
            </span>
          </div>
          <span className="text-purplish-blue font-normal">+$2/mo</span>
        </label>
        <label className="my-4 flex border py-4 px-5 w-full justify-between items-center rounded-lg hover:border-purplish-blue transition border-cool-gray cursor-pointer">
          <div className="flex items-center">
            <input type="checkbox" className="h-5 w-5 mr-5 bg-strawberry-red" />
            <span>
              <h2 className="font-semibold text-marine-blue">
                Customizable profile
              </h2>
              <p className="font-normal text-cool-gray text-sm">
                Custom theme on your profile
              </p>
            </span>
          </div>
          <span className="text-purplish-blue font-normal">+$2/mo</span>
        </label>
      </div>
    </div>
  );
};
