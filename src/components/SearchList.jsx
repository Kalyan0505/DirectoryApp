/* eslint-disable react/prop-types */
const SearchList = ({ name, dob, aadhar, number, age }) => {
  return (
    <div className="border border-black flex flex-col gap-4 p-4 w-[250px]">
      <p>NAME : {name}</p>
      <p>DOB : {dob}</p>
      <p>AADHAR : {aadhar}</p>
      <p>NUMBER : {number}</p>
      <p>AGE : {age}</p>
    </div>
  );
};
export default SearchList;
