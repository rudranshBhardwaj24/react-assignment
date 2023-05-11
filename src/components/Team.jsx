import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import EmployeeCard from "./EmployeeCard";
import TeamCard from "./TeamCard";
import { clearTeam, removeMember } from "../utils/teamSlice";

const Team = () => {
  const team = useSelector((store) => store.team.members);
  const dispatch = useDispatch();
  const handleClearTeam = () => {
    dispatch(clearTeam());
  };
  const handleRemoveMember = (item) => {
    dispatch(removeMember(item));
  };
  return (
    <div>
      <button
        className=" bg-gray-600 borde text-gray-100 border p-2 m-2 rounded-lg"
        onClick={() => {
          handleClearTeam();
        }}
      >
        Clear Team
      </button>
      <div className="flex flex-row m-2 p-2 gap-2 flex-wrap bg-gray-200">
        <h1 className="font-bold text-2xl flex justify-center items-center">
          Team Size - {team.length}
        </h1>
        {team.map((item) => (
          <div className="flex flex-col">
            <TeamCard {...item} key={item.id}></TeamCard>

            <button
              className="p-2 bg-blue-400 border border-gray-100 rounded-b-md"
              onClick={() => {
                handleRemoveMember({ ...item });
              }}
            >
              Remove Member
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Team;
