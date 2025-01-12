/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import AddPersonDetails from "./AddPersonDetails";
import { ContextData } from "../App";

const AddPerson = () => {
  const [form, setForm] = useState(false);
  const ctx = useContext(ContextData);
  const [arrayOfPerson, setArrayOsPerson] = useState([]);
  const name = useRef("");
  const dob = useRef("");
  const aadhar = useRef("");
  const number = useRef("");
  const age = useRef("");

  const savePerson = () => {
    if (
      name.current.value === "" ||
      age.current.value === "" ||
      dob.current.value === "" ||
      aadhar.current.value === "" ||
      number.current.value === ""
    )
      return;
    if (
      aadhar.current.value.length !== 12 ||
      number.current.value.length !== 10
    )
      return;
    ctx.setArrayOsPerson([
      ...ctx.arrayOfPerson,
      {
        name: name.current.value,
        dob: dob.current.value,
        aadhar: aadhar.current.value,
        number: number.current.value,
        age: age.current.value,
      },
    ]);
    setForm(!form);
  };

  return (
    <div className="w-[95%] h-[80%] mt-8 m-auto  relative">
      <div className="flex flex-col">
        <div className="flex bg-blue-600  text-white">
          <p className="border w-[20%] text-center text-xl py-2 border-black">
            Name
          </p>
          <p className="border w-[15%] text-center text-xl py-2 border-black">
            Date of Birth
          </p>
          <p className="border w-[20%] text-center text-xl py-2 border-black">
            Aadhar Number
          </p>
          <p className="border w-[20%] text-center text-xl py-2 border-black">
            Mobile Number
          </p>
          <p className="border w-[10%] text-center text-xl py-2 border-black">
            Age
          </p>
          <p className="border w-[15%] text-center text-xl py-2 border-black">
            Actions
          </p>
        </div>
        {ctx.arrayOfPerson.map((ele, idx) => (
          <AddPersonDetails
            key={idx}
            name={ele.name}
            dob={ele.dob}
            aadhar={ele.aadhar}
            number={ele.number}
            age={ele.age}
            idx={idx}
          />
        ))}
        {/* <input type="text" /> */}
        {form && (
          <div className="flex bg-blue-700 p-2">
            <input
              ref={name}
              type="text"
              placeholder="Name..."
              className="border w-[20%] text-center text-xl py-2 outline-none"
            />
            <input
              ref={dob}
              type="date"
              className="border w-[15%] text-center text-xl py-2 outline-none"
            />
            <input
              ref={aadhar}
              type="number"
              placeholder="Enter Aadhar..."
              className="border w-[20%] text-center text-xl py-2 outline-none"
            />
            <input
              ref={number}
              type="number"
              placeholder="Enter number..."
              className="border w-[20%] text-center text-xl py-2 outline-none"
            />
            <input
              ref={age}
              type="number"
              placeholder="Enter age..."
              className="border w-[10%] text-center text-xl py-2 outline-none"
            />
            <button
              onClick={savePerson}
              className="bg-sky-400 text-black   w-[15%] text-center text-xl py-2 "
            >
              Save
            </button>
          </div>
        )}
      </div>
      <button
        onClick={() => setForm(!form)}
        className="bg-blue-700 px-4 py-2 rounded text-white absolute right-0 bottom-0"
      >
        Add Person
      </button>
    </div>
  );
};
export default AddPerson;
