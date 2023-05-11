import { useSelector } from "react-redux";
import store from "../utils/store";
import EmployeeCard from "./EmployeeCard";
import TeamCard from "./TeamCard";

const Team = () => {
  const team = useSelector((store) => store.team.members);
  return (
    <div>
      <h1 className="font-bold text-4xl">Team - {team.length}</h1>
      <div>
        <TeamCard {...team[0]}></TeamCard>
      </div>
    </div>
  );
};
export default Team;
