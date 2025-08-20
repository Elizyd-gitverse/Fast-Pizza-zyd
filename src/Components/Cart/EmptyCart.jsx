import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div>
      <Link to="/menu" className='text-sm text-blue-500 hover:text-blue-700 hover:underline duration-100'>&larr; Back to menu</Link>

      <p className='mt-2'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
