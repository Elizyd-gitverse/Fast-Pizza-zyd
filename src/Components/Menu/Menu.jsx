import { useLoaderData } from 'react-router-dom';
import { fetchMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem'


function Menu() {
  const menu = useLoaderData()

  return (
    <ul className="divide-y divide-stone-300 ">
      {menu.map(pizza => <MenuItem key={pizza.id} pizza={pizza}/>)}
    </ul>
  )
}

//menuLoader
export async function menuLoader() {
  const menu = await fetchMenu()
  return menu
}

export default Menu;
