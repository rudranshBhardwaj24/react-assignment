const TeamCard = ({
  avatar,
  id,
  first_name,
  last_name,
  email,
  gender,
  domain,
  available,
}) => {
  return (
    <div className="border border-black md:w-[16vw] w-[40vw] m-[auto] flex flex-col items-center justify-center rounded-t-3xl shadow-md bg-slate-600">
      <img
        src={avatar}
        className="w-1/3 border border-black p-2 rounded-lg bg-gray-100"
      ></img>
      <div className="text-gray-100 items-center flex flex-col justify-center">
        <h1 className="">ID: {id}</h1>
        <h1>Name: {first_name + " " + last_name}</h1>
        <h1>Email: {email}</h1>
        <h1>Gender: {gender}</h1>
        <h1>Domain: {domain}</h1>
        <h1>Available: {available ? <>Yes</> : <>No</>}</h1>
      </div>
    </div>
  );
};
export default TeamCard;
