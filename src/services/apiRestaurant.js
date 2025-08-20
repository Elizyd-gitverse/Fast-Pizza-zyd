const API_URL = 'https://react-fast-pizza-api.jonas.io/api';

//1. fetching  menu
export async function fetchMenu() {
  try{
    const res = await fetch(`${API_URL}/menu`)
    if(!res.ok) throw new Error('Menu could not be fetched')
    const { data } = await res.json()
    return data
  }catch(err) {
    console.log(err.message)
    throw err
  }
}

//2.new Order creation 'POST'
export async function createNewOrder(newOrder) { //newOrder = {}
  try{

     const res = await fetch(`${API_URL}/order`, { //adding order in backend
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if(!res.ok) throw new Error('Order Could not be created')

    const {data} = await res.json() //getting updated data from backend
    return data

  }catch(err) {
    throw err
  }
}

//3. getting order detail by ID
export async function getOrder(id) {
  try{
    const res = await fetch(`${API_URL}/order/${id}`)
    if(!res.ok) throw new Error(`No such Order #${id} Found`)
    const {data} = await res.json()
    return data
  }catch(err) {
    throw err
  }
}




