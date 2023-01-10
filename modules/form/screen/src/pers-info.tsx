import { FunctionComponent } from "react";

export const PersoInfo: FunctionComponent = () => {
  return (
    <div className="m-1O">
      <div>
        <h1 className="my-2 text-lg">Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div>
        <form className="">
          <label>Name</label>
          <input type="text" className="border-2" />
        </form>
        <form>
          <label>Email Address</label>
          <input type="email" name="email" className="border-2" />
        </form>
        <form>
          <label>Phone Number</label>
          <input type="tel" name="tel" id="" className="border-2" />
        </form>
      </div>
    </div>
  );
};
