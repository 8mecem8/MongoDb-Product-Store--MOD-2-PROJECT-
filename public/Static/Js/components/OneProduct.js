import { home } from "../Route-Pages/Home.js";
import { makeBuy } from "../Sup-files/Util.js";
import editDeleteProduct from "./EditDeleteProduct.js";

 

 
async function showOneItem(arg)
{
 
    
 let item = await (async()=>{ let res = await fetch(`/get_specific_product/${arg}`); let data = await res.json(); return data })()
 
console.log(item)
 
 const body = document.querySelector('body')
 const fragment = document.createDocumentFragment() // create and append new elements faster with method


 const oneProduct = document.createElement("dialog");
 oneProduct.id = 'oneProductContainer'





 oneProduct.innerHTML = `
            
        <button id="dialog-exit-button" onclick="(()=>{document.querySelector('#oneProductContainer').remove()})()" class="close-modal" value="close">X</button>

        <button id="dialog-edit-button">EDIT</button>
        

        <img src="${item[0].imageURL}" />
        <p id="dialog-name">${item[0].name}</p>
        <p id="dialog-category">category:  ${item[0].category}</p>

        <p id="dialog-des">Description:<br> <span>${item[0].description}</span></p>
        <p id="dialog-spec">Specifications:<br>
            <span>
            DIMENSIONS (cm):<br>
                -Height 74c m<br>
                -Width 170 cm<br>
                -Depth 90 cm
            </span>
            <br>
            <span>
            All dimensions are centimetres and approximate only, as they may change with model updates.
            Please check if exact sizing is required.
            </span>
        </p>

        <p id="dialog-price">$ ${item[0].price} <span style="font-size:12px;">+TAX</span></p>

    

        <span id="dialog-stock"> STOCK: <span style="font-weight: 600 ;color:${item[0].amount < 1 && item[0].inStock == false ? 'red' : 'green' }">${item[0].amount}</span></span>
        ${item[0].amount < 1 || item[0].inStock == false ? '<button type="button" disabled id="dialog-buy-button-con" style="font-size:14px">OUT OF STOCK</button>' : `<div id="dialog-buy-button-con">  <button type="button" db="${item[0]._id}" id="dialog-buy-button"  class="btn effect04" data-sm-link-text="BUY NOW"><span>Buy</span></button></div>` }
        
        
        

      ` 



      fragment.appendChild(oneProduct)
      body.appendChild(fragment,null)
      oneProduct.showModal();



      document.querySelector("#dialog-buy-button")?.addEventListener("click",async(e)=>
      {
        let result = await makeBuy(item[0]._id);console.log(result)
       
        document.querySelector('#oneProductContainer').remove()

        confetti.create(document.getElementById('canvas'), {zIndex:200,resize: true,useWorker: true,})({ particleCount: 200, spread: 200 });

        document.querySelector('main').replaceChildren()

     
        home._pre_Func ? await  home._pre_Func() : null   
        await home._render()
        home._uti_Func ? await home._uti_Func() : null
    
      })



      document.querySelector("#dialog-edit-button").addEventListener("click",async(e)=>
      {
        document.querySelector('#oneProductContainer').remove()
        editDeleteProduct(item)
      })
      

}

export default showOneItem



