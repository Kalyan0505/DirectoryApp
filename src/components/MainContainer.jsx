/* eslint-disable react/prop-types */
import AddPerson from "./AddPerson";
import SearchInfo from "./searchInfo";

const MainContainer = ({ heading, flag }) => {
  return (
    <div className="border-black border w-[95%] m-auto h-[77%]">
      <p className="py-3 px-12 border-black border text-xl w-fit">{heading}</p>
      {flag ? <AddPerson /> : <SearchInfo />}
    </div>
  );
};
export default MainContainer;
