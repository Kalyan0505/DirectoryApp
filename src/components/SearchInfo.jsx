import { useContext, useRef, useState } from "react";
import { ContextData } from "../App";
import SearchList from "./SearchList";

const SearchInfo = () => {
  const ctx = useContext(ContextData);
  const [dataArray, setDataArray] = useState([]);
  // const [togle ,setTogle] = useState(false);
  const aadharRef = useRef("");
  const findTheValue = () => {
    if (aadharRef.current.value === "") {
      // setTogle(true);
      return;
    } else {
      const ulta = ctx.arrayOfPerson.filter(
        (ele) => ele.aadhar === aadharRef.current.value
      );
      setDataArray(ulta);
    }
  };
  return (
    <div className=" w-[95%] h-[80%] mt-8 m-auto flex flex-col gap-2">
      <div className="flex gap-4">
        <input
          ref={aadharRef}
          className="border border-black w-[40%] p-3 outline-none"
          type="text"
          placeholder="Enter Aadhar Number..."
        />
        <button
          onClick={findTheValue}
          className="py-1 px-8 bg-blue-700 text-white font-bold"
        >
          Find
        </button>
      </div>
      {/* {togle && <p className="text-xl text-red-700">Enter Aadhar Number Proper</p>} */}
      <div className="flex gap-8 flex-wrap">
        {dataArray.map((ele, idx) => (
          <SearchList
            key={idx}
            name={ele.name}
            dob={ele.dob}
            aadhar={ele.aadhar}
            number={ele.number}
            age={ele.age}
          />
        ))}
      </div>
    </div>
  );
};
export default SearchInfo;
