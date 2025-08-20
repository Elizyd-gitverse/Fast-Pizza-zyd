// Test ID: IIDSAT
import OrderItem from './OrderItem'
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from '../../services/apiRestaurant';
import { useFetcher, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

function Order() {
  const order = useLoaderData()

  const fetcher = useFetcher()

  useEffect(function() {
    if(!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu') 
  })

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
     <div>
      <div className="flex items-center justify-between mt-3 mb-5">
        <h2 className="text-lg font-extrabold">Order #<span className='font-[Rubik] font-bold'>{id}</span> Status</h2>

        <div className="flex items-center gap-4">
          {priority && <span className="rounded-full py-1.5 px-6 bg-red-500 text-stone-100 font-bold">Priority</span>}
          <span className="py-1.5 px-6 bg-green-500 rounded-full  text-stone-100 font-bold">{status} order</span>
        </div>
      </div>

      <div className="bg-neutral-200 py-6 px-4 flex items-center justify-between font-[Rubik] my-8">
        <p>
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500 text-sm">( Estimated delivery: {formatDate(estimatedDelivery)} )</p>
      </div>

      <ul className="divide-stone-300 divide-y border-b border-b-stone-300 border-t border-t-stone-300">
        {cart.map(item => <OrderItem key={item.pizzaId} item={item} isLoadingIngredients={fetcher.state === 'loading'} ingredients={fetcher?.data?.find(pizza => pizza.id === item.pizzaId).ingredients}/>)}
      </ul>

      <div className="bg-neutral-200 py-6 px-4 flex flex-col gap-2 text-sm font-[Rubik] my-8">
        <p className="text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-stone-900 text-lg">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function orderLoader({params}) { //params from url to fetch order details
  const order = await getOrder(params.orderID)
  return order
}

export default Order;
