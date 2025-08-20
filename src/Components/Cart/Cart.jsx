import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCart, getCart, getPriceAllPizza } from './cartSlice';
import { getFullName } from '../User/userSlice';
import { formatCurrency } from '../../utils/helpers';
import EmptyCart from './EmptyCart';


function Cart() {
  const cart = useSelector(getCart)
  const AllPizzaPrice = useSelector(getPriceAllPizza)
  const fullName = useSelector(getFullName)
  const dispatch = useDispatch()

  console.log(cart)
  if(!cart.length) return <EmptyCart />
  
  return (
    <div>
      <Link to='/menu' className='text-sm text-blue-500 hover:text-blue-700 hover:underline duration-100'>&larr; Back to menu</Link>

      <h2 className='text-xl font-bold mt-8 mb-4'>Your cart, {fullName}</h2>

      <ul className='divide-y divide-stone-300 border-b border-stone-300'>
        {cart.map(pizza => <CartItem key={pizza.pizzaId} item={pizza}/>)}
      </ul>

      <div className='mt-6 flex gap-6'>
        <Button to="/order" type='primary'>Order pizzas ({formatCurrency(AllPizzaPrice)})</Button>
        <Button type='clear' onClick={() => dispatch(ClearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
