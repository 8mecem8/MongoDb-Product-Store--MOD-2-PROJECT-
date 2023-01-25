



export async function getAllProducts()
{
  let response = await fetch("/get_products")
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


