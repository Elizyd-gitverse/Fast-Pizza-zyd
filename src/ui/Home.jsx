import { useSelector } from "react-redux";
import CreateUser from "../Components/User/CreateUser";
import { getFullName } from "../Components/User/userSlice";
import Button from "./Button";

function Home() {
  const fullName = useSelector(getFullName)

  return (
    <div className="flex flex-col items-center mt-30">
      <h1 className="text-center mb-10 font-extrabold text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500 text-3xl">Straight out of the oven, straight to you.</span>
      </h1>

      {fullName ? <Button type='primary' to='/menu' >Continue Ordering, {fullName}</Button> : <CreateUser />}  
    </div>
  );
}

export default Home;
