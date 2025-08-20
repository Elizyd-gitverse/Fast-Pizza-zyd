import { Link } from "react-router-dom";
import SearchOrder from "../Components/Order/SearchOrder";
import { useSelector } from "react-redux";
import { getFullName } from "../Components/User/userSlice";

export default function Header() {

    const fullName = useSelector(getFullName)

    return (
         <header className="bg-yellow-400 px-4 py-4 uppercase flex justify-between items-center">
           <Link to='/' className="font-extrabold tracking-widest"> 🍕 Fast  Pizza  Co.</Link>

         <SearchOrder />
         {fullName && <p className="font-extrabold tracking-wide">{fullName}</p>}   
        </header>
    )
}