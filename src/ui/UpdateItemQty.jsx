import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { DecreaseQty, getQtyPerPizza, IncreaseQty } from "../Components/Cart/cartSlice";

export default function UpdateItemQty({pizzaId}) {
    const dispatch = useDispatch()
    const qtyPerPizza = useSelector(getQtyPerPizza(pizzaId))
    
    return (
         <div className="flex items-center gap-1 mx-4">
          <Button type='small' onClick={() => dispatch(IncreaseQty(pizzaId))}> + </Button>
          <span>{qtyPerPizza}</span>
          <Button type='small' onClick={() => dispatch(DecreaseQty(pizzaId))}> - </Button>
        </div>
    )
}