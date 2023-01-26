
 

 
async function showOneItem(arg)
{
 
    
 let item = await (async()=>{ let res = await fetch(`/get_specific_product/${arg}`); let data = await res.json(); return data })()
 

 
 const body = document.querySelector('body')
 const fragment = document.createDocumentFragment() // create and append new elements faster with method


 const forOne = document.createElement("dialog");
 forOne.id = 'forOneContainer'



   forOne.innerHTML = `
        <h2>Here is our great</h2>
        <form method="dialog" style="width:100%;">
          <p style="font-size: 28px;"> name:${item.name}<br> color:${item}<br> age:${item}<br> eatable: ${item}</p>
          <button class="close-modal" value="cancel">Close Dialog Box</button>
        </form>
      ` 



      fragment.appendChild(forOne)
      body.appendChild(fragment,null)



      forOne.showModal();

}

export default showOneItem