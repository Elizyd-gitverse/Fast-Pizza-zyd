import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 px-2">
      <div className="flex justify-between">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className='text-xs text-stone-500 font-[Rubik] capitalize py-0.5 '>{isLoadingIngredients ? 'Loading...' : ingredients ? ingredients.join(', ') : null}</p>
    </li>
  );
}

export default OrderItem;
