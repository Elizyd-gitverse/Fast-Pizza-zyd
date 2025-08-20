import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import UpdateItemQty from "../../ui/UpdateItemQty";
import { formatCurrency } from "../../utils/helpers";
import { RemoveFromCart } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch()

  function handleRemoveCart() {
   if(!pizzaId) return
   dispatch(RemoveFromCart(pizzaId))
  }

  return (
   <li className="flex justify-between py-4">
      <p className="font-[Rubik] flex gap-2 text-stone-600">
        {quantity}&times;  {name}
      </p>
      <div className="flex items-center gap-2">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQty pizzaId={pizzaId}/>
        <Button type='remove' onClick={handleRemoveCart}>Remove from Cart</Button>
      </div>
    </li>
  );
}

export default CartItem;
