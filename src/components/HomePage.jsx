import { useState } from "react";
import MainContainer from "./MainContainer";

const HomePage = () => {
  const [heading, setHeading] = useState(true);

  return (
    <div className="w-screen h-screen">
      <h1 className="bg-blue-700 p-4 text-3xl font-extrabold text-white text-center">
        Directory App
      </h1>
      <div className="flex gap-8 py-4 px-10">
        <button
          onClick={() => setHeading(true)}
          className="bg-blue-700 py-2 px-4 text-white font-bold"
        >
          Add New Person
        </button>
        <button
          onClick={() => setHeading(false)}
          className="bg-blue-700 py-2 px-4 text-white font-bold"
        >
          Retrieve Infromation
        </button>
      </div>
      <MainContainer
        heading={heading ? "Add New Person" : "Retrieve Infromation"}
        flag={heading}
      />
    </div>
  );
};
export default HomePage;
