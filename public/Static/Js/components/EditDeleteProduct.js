import { home } from "../Route-Pages/Home.js";
import { deleteProduct, makeBuy, updateProduct } from "../Sup-files/Util.js";
import showOneItem from "./OneProduct.js";

 

 
async function editDeleteProduct(pData)
{
 
 const body = document.querySelector('body')
 const fragment = document.createDocumentFragment() // create and append new elements faster with method


 const editDelete = document.createElement("dialog");
 editDelete.id = 'editDeleteContainer'


 editDelete.innerHTML = `
            
        <button id="editDelete-exit-button" onclick="(()=>{document.querySelector('#editDeleteContainer').remove()})()" class="close-modal" value="close">X</button>

        <button id="editDelete-delete-button">DELETE</button>
        

        
        <div id="editDelete-input-container">

            
            <div class="editDelete-input-elements">
                <p><label for="name-input">Category Name: </label></p>
                <input type="text" id="category-input" value="${pData[0].category}" required />
            </div>


            
            <div class="editDelete-input-elements">
                <p><label for="name-input">Product Name: </label></p>
                <input type="text" id="name-input" value="${pData[0].name}" required />
            </div>


            
            <div class="editDelete-input-elements">
            <p><label for="url-input">Image URL: </label></p>
            <input
                type="url"
                id="url-input"
                value="${pData[0].imageURL}"
            />
            </div>


            
            <div class="editDelete-input-elements">
            <p><label for="price-input">Price: </label></p>
            <input type="number" min="0" id="price-input" value="${pData[0].price}"/>
            </div>


            
            <div class="editDelete-input-elements">
            <p><label for="inventory-input">Inventory Amount: </label></p>
            <input type="number" min="0" id="amount-input" value="${pData[0].amount}" />
            </div>


            
            <div class="editDelete-input-elements">
            <p><label for="description-input">Description: </label></p>
            <textarea
                name="description-input"
                id="description-input"
                cols="27"
                rows="5"
                
                required
            >${pData[0].description}</textarea>
            </div>


            
            <div class="editDelete-input-elements">
            <p><label for="in-stock-select">Please Select is Product in stock ?</label></p>
            <select name="in-stock-select" id="in-stock-select">
                <option value="true" ${pData[0].inStock == 'true'? selected : ""}>Yes</option>
                <option value="false" ${pData[0].inStock == 'false'? selected : ""}>No</option>
            </select>
            </div>

            
            
            <button id="editDelete-button"}'>Update</button>
      </div>

      ` 

      fragment.appendChild(editDelete)
      body.appendChild(fragment,null)
      editDelete.showModal();


    document.querySelector('#editDelete-button').addEventListener('click',async(e)=>
    {
        
        let name = document.getElementById("name-input").value;
        let category = document.getElementById("category-input").value;
        let description = document.getElementById("description-input").value;
        let imageURL = document.getElementById("url-input").value;
        let price = +document.getElementById("price-input").value;
        let amount = +document.getElementById("amount-input").value;
        let inStock = document.getElementById("in-stock-select").value 
        

        let result =  await updateProduct(pData[0]._id,{name,category,description,imageURL,price,amount,inStock})
        console.log(result)

        if(result)
        {
            document.querySelector('#editDelete-button').innerHTML = "Updated"
            document.querySelector('#editDelete-button').style.background = "#34be17"
            document.querySelector('#editDelete-button').style.boxShadow = "0px 0px 4px 2px #34be17"

            setTimeout( async() => {
                document.querySelector('#editDeleteContainer').remove() 

                document.querySelector('main').replaceChildren()

     
                home._pre_Func ? await  home._pre_Func() : null   
                await home._render()
                home._uti_Func ? await home._uti_Func() : null


                await showOneItem(pData[0]._id)
            }, 2000);
        }
    })




    document.querySelector('#editDelete-delete-button').addEventListener('click',async(e)=>
    {
        
        let result = await deleteProduct(pData[0]._id)
        if(result)
        {

            editDelete.style.height= '270px';
            editDelete.innerHTML = `
            
                        <div id="delete-container">
                            <p id="delete-text"><span>${pData[0].name}</span> has been <span>removed</span> from <span>Database</span> </p>
                        <div>
            `

             setTimeout(async() => 
            {

                document.querySelector('#editDeleteContainer').remove() 

                document.querySelector('main').replaceChildren()
    
                home._pre_Func ? await  home._pre_Func() : null   
                await home._render()
                home._uti_Func ? await home._uti_Func() : null
                
            }, 2000);
        }
    })








}

export default editDeleteProduct



