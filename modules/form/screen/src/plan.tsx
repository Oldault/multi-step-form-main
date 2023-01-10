import { FunctionComponent } from "react";
import Image from "next/image";
import arcadeIcon from "../../../../assets/images/icon-arcade.svg"
import advancedIcon from "../../../../assets/images/icon-advanced.svg"
import proIcon from "../../../../assets/images/icon-pro.svg"

export const PlanInfo: FunctionComponent = () => {
  return (
    <div>
      <div>
        <h1 className="my-2">Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="flex">
        <div className="border-2 p-6 m-4">
            <Image src={arcadeIcon} alt="arcadeIcon"/>
            <h2>Arcade</h2>
            <p>$9/mo</p>
        </div>
        <div className="border-2">
            <Image src={advancedIcon} alt="advancedIcon"/>
            <h2>Advanced</h2>
            <p>$12/mo</p>
        </div>
        <div className="border-2">
            <Image src={proIcon} alt="proIcon"/>
            <h2>Pro</h2>
            <p>$15/mo</p>
        </div>
      </div>
    </div>
  );
};
