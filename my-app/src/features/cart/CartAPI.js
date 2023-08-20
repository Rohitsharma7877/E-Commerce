
//post method in api add to cart the item
export function addToCart(item) {
  return new Promise(async(resolve) =>{
    const response= await fetch('http://localhost:8080/cart',{
      method: 'POST',
      body:JSON.stringify(item),
      headers:{'content-type':'application/json'}
    })
    const data= await response.json()
    resolve({data})
});
}

//get method in api see the user which is add your own cart
export function fetchItemsByUserId(userId) {
  return new Promise(async(resolve) =>{
    const response= await fetch('http://localhost:8080/cart?user='+userId)
    const data= await response.json()
    resolve({data})
});
}


//PATCH method in api and update the cart like add product quantity  that why use this api
export function updateCart(update) {
  return new Promise(async(resolve) =>{
    const response= await fetch('http://localhost:8080/cart/'+update.id,{
      method: 'PATCH',
      body:JSON.stringify(update),
      headers:{'content-type':'application/json'}
    })
    const data= await response.json()
    resolve({data})
});
}


export function deleteItemFromCart(itemId) {
  return new Promise(async(resolve) =>{
    const response= await fetch('http://localhost:8080/cart/'+itemId,{
      method: 'DELETE',
    
      headers:{'content-type':'application/json'}
    })
    const data= await response.json()
    resolve({data:{id:itemId}})
});
}