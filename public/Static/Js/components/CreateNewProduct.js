import { home } from "../Route-Pages/Home.js";
import { createProduct } from "../Sup-files/Util.js";


 

 
async function createNewProduct()
{
 
 const body = document.querySelector('body')
 const fragment = document.createDocumentFragment() // create and append new elements faster with method


 const newProduct = document.createElement("dialog");
 newProduct.id = 'newProductContainer'


 newProduct.innerHTML = `
            
        <button id="newProduct-exit-button" onclick="(()=>{document.querySelector('#newProductContainer').remove()})()" class="close-modal" value="close">X</button>

        
        
        <div id="newProduct-input-container">

            
            <div class="newProduct-input-elements">
                <p><label for="name-input">Category Name: </label></p>
                <input type="text" id="category-input"  required />
            </div>


            
            <div class="newProduct-input-elements">
                <p><label for="name-input">Product Name: </label></p>
                <input type="text" id="name-input"  required />
            </div>


            
            <div class="newProduct-input-elements">
            <p><label for="url-input">Image URL: </label></p>
            <input
                type="url"
                id="url-input"
                
            />
            </div>


            
            <div class="newProduct-input-elements">
            <p><label for="price-input">Price: </label></p>
            <input type="number" min="0" id="price-input" />
            </div>


            
            <div class="newProduct-input-elements">
            <p><label for="inventory-input">Inventory Amount: </label></p>
            <input type="number" min="0" id="amount-input"  />
            </div>


            
            <div class="newProduct-input-elements">
            <p><label for="description-input">Description: </label></p>
            <textarea
                name="description-input"
                id="description-input"
                cols="27"
                rows="5"
                required
            ></textarea>
            </div>


            
            <div class="newProduct-input-elements">
            <p><label for="in-stock-select">Please Select is Product in stock ?</label></p>
            <select name="in-stock-select" id="in-stock-select">
                <option value="true" >Yes</option>
                <option value="false" >No</option>
            </select>
            </div>

            
            
            <button id="newProduct-button"}'>Create</button>
      </div>

      ` 

      fragment.appendChild(newProduct)
      body.appendChild(fragment,null)
      newProduct.showModal();





    document.querySelector('#newProduct-button').addEventListener('click',async(e)=>
    {
        document.querySelector('#newProduct-button').disabled = true;
        
        let name = document.getElementById("name-input").value;
        let category = document.getElementById("category-input").value;
        let description = document.getElementById("description-input").value;
        let imageURL = document.getElementById("url-input").value;
        let price = +document.getElementById("price-input").value;
        let amount = +document.getElementById("amount-input").value;
        let inStock = document.getElementById("in-stock-select").value 
        

        let result =  await createProduct({name,category,description,imageURL,price,amount,inStock})
        console.log(result)

        if(result)
        {
            document.querySelector('#newProduct-button').innerHTML = "Created"
            document.querySelector('#newProduct-button').style.background = "#34be17"
            document.querySelector('#newProduct-button').style.boxShadow = "0px 0px 4px 2px #34be17"

            setTimeout( async() => {
                //document.querySelector('#editDeleteContainer').remove() 
                newProduct.remove() 

                document.querySelector('main').replaceChildren()

                home._pre_Func ? await  home._pre_Func() : null   
                await home._render()
                home._uti_Func ? await home._uti_Func() : null

            }, 2000);
        }
    })


}

export default createNewProduct



