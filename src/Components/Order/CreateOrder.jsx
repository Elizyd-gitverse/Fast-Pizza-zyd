import { useState } from "react";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getCart, getPriceAllPizza } from "../Cart/cartSlice";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createNewOrder } from "../../services/apiRestaurant";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart)
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting' //form submitting
  const error = useActionData() //good for error handling of form
  const AllPizzaPrice = useSelector(getPriceAllPizza)
  const finalPrice = withPriority ? AllPizzaPrice + (AllPizzaPrice * 0.2) : AllPizzaPrice

  return (
     <div>
      <h2 className="text-xl font-bold mt-4 mb-8">Ready to order? Let's go!</h2>
      <Form method="POST" action="/order"> 
        <div className="flex items-center gap-8 mt-6">
          <label className="basis-30">First Name</label>
          <input  type="text" name="customer" className="input grow" required />
        </div>

        <div className="flex items-center gap-8 mt-6">
          <label className="basis-30">Phone number</label>
          <div className="grow ">
          <input type="tel" name="phone" className="input w-full" required />
          {error && <p className="px-2 py-1 text-xs bg-red-200 font-bold text-red-500 rounded-lg mx-4 mt-2">{error}</p>}
          </div>
        </div>

        <div className="flex items-center gap-8 mt-6">
          <label className="basis-30">Address</label>
          <input type="text" name="address" className=" input grow" required />
        </div>

        <div className="flex items-center gap-3 my-6">
          <input
            type="checkbox"
            name="priority"
            id="priority" 
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <input type="hidden" name="cart" defaultValue={JSON.stringify(cart)}/>
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="flex gap-6">
          <Button type='primary'>{isSubmitting ? 'Placing Order...' : `Order now (${formatCurrency(finalPrice)})`}</Button>
          <Button to='/cart' type='primary'> &larr; Back To Cart</Button>
        </div>
      </Form>
    </div>
  );
}

export async function orderAction({request}) { //Action with request
  const formData = await request.formData() //formdata
  const dataObj = Object.fromEntries(formData) //convert back fromdata {} to object {}
  const order = {
    ...dataObj,
    cart: JSON.parse(dataObj.cart), //stringify '' to js {}
    priority: dataObj.priority === 'true' 
  }

  //error
  if(!isValidPhone(order.phone)) return 'Please Provide your Correct contact Number'
  
  const newOrder = await createNewOrder(order)
  
  return redirect(`/order/${newOrder.id}`) //on submitting redirect to order ID page
}

export default CreateOrder;
