import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPriceAllPizza, getQtyAllPizza } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const allPizzaQty = useSelector(getQtyAllPizza)
  const allPizzaPrice = useSelector(getPriceAllPizza)

  return (
      <div className="bg-stone-900 text-stone-200 flex justify-between px-4 py-5  uppercase">
      <p className="flex gap-4">
        <span>{allPizzaQty} pizzas</span>
        <span>{formatCurrency(allPizzaPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
