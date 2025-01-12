/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ContextData } from "../App";
const AddPersonDetails = ({ name, dob, aadhar, number, age, idx }) => {
  const ctx = useContext(ContextData);
  const deleteItem = () => {
    const copy = ctx.arrayOfPerson.filter((ele, index) => index != idx);
    ctx.setArrayOsPerson(copy);
  };
  return (
    <div className="flex ">
      <p className="border w-[20%] text-center text-xl py-2 border-black">
        {name}
      </p>
      <p className="border w-[15%] text-center text-xl py-2 border-black">
        {dob}
      </p>
      <p className="border w-[20%] text-center text-xl py-2 border-black">
        {aadhar}
      </p>
      <p className="border w-[20%] text-center text-xl py-2 border-black">
        {number}
      </p>
      <p className="border w-[10%] text-center text-xl py-2 border-black">
        {age}
      </p>
      <button
        onClick={deleteItem}
        className="border w-[15%] text-center text-xl py-2 border-black"
      >
        Delete
      </button>
    </div>
  );
};
export default AddPersonDetails;
