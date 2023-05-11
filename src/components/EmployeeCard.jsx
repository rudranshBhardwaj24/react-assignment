import { useDispatch } from "react-redux";
import { addMember } from "../utils/teamSlice";

const EmployeeCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddMember = (data) => {
    dispatch(addMember(data));
  };
  return (
    <div className="border border-black md:w-[30vw] w-[90vw] m-[auto] flex flex-col items-center justify-center rounded-3xl shadow-md bg-slate-600">
      <img
        src={data.avatar}
        className="w-1/3 border border-black p-2 rounded-lg bg-gray-100"
      ></img>
      <div className="text-gray-100 items-center flex flex-col justify-center">
        <h1 className="">ID: {data.id}</h1>
        <h1>Name: {data.first_name + " " + data.last_name}</h1>
        <h1>Email: {data.email}</h1>
        <h1>Gender: {data.gender}</h1>
        <h1>Domain: {data.domain}</h1>
        <h1>Available: {data.available ? <>Yes</> : <>No</>}</h1>
        {data.available ? (
          <button
            className="p-2 bg-blue-400 border border-gray-100"
            onClick={() => {
              data.available = false;
              handleAddMember(data);
            }}
          >
            Add to team
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default EmployeeCard;
