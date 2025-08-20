import { Outlet, useNavigate, useNavigation, useParams } from "react-router-dom";
import Header from "./Header";
import CartOverview from '../Components/Cart/CartOverview'
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { ClearCart, getPriceAllPizza } from "../Components/Cart/cartSlice";
import { useEffect } from "react";
import { getFullName } from "../Components/User/userSlice";

export default function AppLayout() {
   const navigation = useNavigation() //state = loading,idle etc
   const isLoading = navigation.state === 'loading'
   const pizzaPrice = useSelector(getPriceAllPizza)
   const dispatch = useDispatch()
   const fullName = useSelector(getFullName)
   const navigate = useNavigate()

   const {orderID} = useParams()

   useEffect(function() {
       if(orderID) dispatch(ClearCart())
   }, [orderID, dispatch])

   useEffect(function() {
    if(!fullName) navigate('/')
   }, [fullName,navigate])
  
    return (
        <div className="h-screen grid grid-rows-[auto_1fr_auto] bg-stone-100">
          <Header />

          <div className="overflow-scroll overflow-x-hidden">
            <main className="mx-auto max-w-3xl px-6 py-4">
               {isLoading ? <Loader /> : <Outlet />} 
            </main>
          </div>

          {pizzaPrice ? orderID ? null : <CartOverview /> : null }
        </div>
    )
}