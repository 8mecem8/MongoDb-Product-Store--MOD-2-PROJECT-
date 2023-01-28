



export async function getAllProducts()
{
  let response = await fetch("/get_products")
  let data = await response.json()
  
  return data
}


export async function makeBuy(id)
{
  let rData={'type':'buy','pID':id}

  let response = await fetch("/update_product",{method:'PUT',headers: {'Content-Type': 'application/json'},body: JSON.stringify(rData)})
  let data = await response.json()
  
  return data
}



export async function updateProduct(id,updatedProduct)
{
  let rData={'type':'update','pID':id, 'updatedProduct':updatedProduct}

  let response = await fetch("/update_product",{method:'PUT',headers: {'Content-Type': 'application/json'},body: JSON.stringify(rData)})
  let data = await response.json()
  
  return data
}



export async function deleteProduct(id)
{
  let response = await fetch(`/delete_product?productId=${id}`,{method:'DELETE',headers: {'Content-Type': 'application/json'}})
  let data = await response.json()
  
  return data
}


export async function createProduct(sData)
{
  

  let response = await fetch("/create_product",{method:'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(sData)})
  let data = await response.json()
  
  return data
}





export const iconMenuButtonFunction = () =>
{ 


  document.querySelector("a [alt='instagram']").src = "../Static/Assets/instagram.gif"
  document.querySelector("a [alt='facebook']").src = "../Static/Assets/facebook.gif"
  document.querySelector("a [alt='linked']").src = "../Static/Assets/linked.gif"


  let indicator
  
  document.querySelector('.icon-menu-button').addEventListener('click',()=>
  {
    
    if(indicator === undefined)
    {
      indicator = 'changed';

      document.querySelector('.MMenu-section').style.animationName = 'appear'
      document.querySelector('.MMenu-section').style.display = 'flex'
      document.querySelector('.icon-menu-button').style.transition = `2s`
      document.querySelector('.icon-menu-button').style.color = "white"

      return document.querySelector('.icon-menu-button').innerHTML = '֎'
    }

    indicator = undefined
    document.querySelector('.MMenu-section').style.animationName = 'disappear'
    document.querySelector('.icon-menu-button').style.color = "black"
    
    setTimeout(() => {document.querySelector('.MMenu-section').style.display = 'none'}, 1200);
    document.querySelector('.icon-menu-button').innerHTML = '&#9776;'

  })
  

}


