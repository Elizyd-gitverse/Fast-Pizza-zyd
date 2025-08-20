import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import UpdateItemQty from '../../ui/UpdateItemQty';
import {formatCurrency} from '../../utils/helpers'
import {AddToCart, getCart, RemoveFromCart} from '../Cart/cartSlice'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch()
  const cart = useSelector(getCart)
  const isInCart = cart.some(pizza => pizza.pizzaId === id)

  function hanldeAddToCart() {
     const newCart = {
      pizzaId: id, 
      quantity: 1,
      name, 
      unitPrice,
      totalPrice: unitPrice
     }
 
    dispatch(AddToCart(newCart))
  }

  return (
  <li className='flex px-2 py-2 gap-5'>
      <img className={` h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} src={imageUrl} alt={name} />
      <div className='flex flex-col grow'>
        <p className='font-bold mb-0.5'>{name}</p>
        <p className='text-stone-500 font-[Rubik] capitalize text-sm space-4'>{ingredients.join(', ')}</p>
        <div className='my-auto text-stone-600 font-[Rubik] text-[16px] flex items-center justify-between'>
          <p>{formatCurrency(unitPrice)}</p>
          <div className='flex'>

            {isInCart ? 
             <>
              <UpdateItemQty pizzaId={id}/>
              <Button type='remove' onClick={() => dispatch(RemoveFromCart(id))}>Remove From Cart</Button>
             </> : 
              <Button type={soldOut ? 'soldout' : 'small'} disabled={soldOut} onClick={hanldeAddToCart}>{soldOut ? 'Sold' : 'Add To Cart'}</Button>}
         
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
