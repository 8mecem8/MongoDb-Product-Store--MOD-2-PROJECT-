import Navigation from '../components/Navigation-Component.js'
import MMenu from '../components/Mobile-Menu.js'
import { iconMenuButtonFunction,getAllProducts } from '../Sup-files/Util.js'
import showOneItem from '../components/OneProduct.js'
import createNewProduct from '../components/CreateNewProduct.js'
 




class Home 
{
    constructor()
    {
        document.title = this.constructor.name
        this.main = document.querySelector('main')
        this.fragment = document.createDocumentFragment() // create and append new elements faster with method
        this.homeEl = document.createElement("div");
        this.homeEl.id = 'HomeMainContainer'
        this.allProducts
    
        
    }



    /******************************************************************/
    /* -----------------Dynamic Content Function--------------------- */
    async _pre_Func()
    {
        this.allProducts = await getAllProducts()
        
    }




    /******************************************************************/
    /* -----------------Dynamic Content Function--------------------- */
    async _uti_Func()
    {
        iconMenuButtonFunction()
        
        
    }
    

    /******************************************************************/
    /* ---------------Dom Element Render Function-------------------- */
    async _render()
    {

       
    
        
    this.homeEl.innerHTML =`

    <main class='main-content'>

    ${ await MMenu()}
    ${ await Navigation(this.constructor.name)}




        <header class="hero">
            <div class="banner">
                <h1 class="banner-title">Products  Store  collection</h1>
                <button class="banner-btn">shop now</button>
                <div id="searchAndCreate-search">
                <div class="search">
                    <div>
                        <input type="text" placeholder="Search . . ." required>
                        <div id='search-show-con'></div>
                    </div>
                </div>
            </div>
            </div>
        </header>

        <section id="searchAndCreate-container">
            

            <div id="searchAndCreate-create">
                <div id="create-wrapper">
                    <button id="create-p">Create New Product</button>
                <div>
            </div>
        </section>



        <section class='main-content-section'>


            ${
                this.allProducts.map((arg)=>
                {  
                    
                    return`

                    <div class="card-product" style="height:${arg.name.length > 29 ? '356px' : '336px' }" p-id="${arg._id}" >

                            
                            <div class="images-container">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/943/793/small/furniture-logo-home-furnishing-design-room-icon-illustration-table-chair-lamp-frame-clock-flower-pot-free-vector.jpg">
                                <img src="data:image/png;base64,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">
                                <img src="https://cdn-icons-png.flaticon.com/512/1905/1905006.png">
                            </div>

                            <div class="product-image">
                                <img  id='${arg._id}' src='${arg.imageURL}'/>
                            </div>

                            <div class="headline">
                                <p>${arg.category}</p>
                                <p onclick="showOneItem" id='${arg._id}'>${arg.name}</p>
                                <p>$ ${arg.price} <span style="font-size:12px;">+TAX</span></p>
                            </div>

                            <div class="add-cart-btn">
                                <span> STOCK: <span style="font-weight: 600 ;color:${arg.amount < 1 && arg.inStock == false ? 'red' : 'green' }">${arg.amount}</span></span>
                                ${arg.amount < 1 || arg.inStock == false ? '<button type="button" disabled style="font-size:14px">OUT OF STOCK</button>' : '<button type="button">Add to Cart</button>' }
                            </div>
                    

                    </div>
                    
                    
                    `
                }).join('\n')
            }
        






        </section>
        

    </main>
        `  


    this.fragment.appendChild(this.homeEl)
    this.main.appendChild(this.fragment,null)



    Array.from(document.querySelectorAll('.product-image')).map((arg)=>{arg.addEventListener('click',(e)=>{showOneItem(e.target.id)})})
    
    

    document.querySelector("#create-p").addEventListener("click",()=>{createNewProduct()})
    document.querySelector(".search input").addEventListener('input',(e)=>
    {
        
        document.querySelector("#search-show-con").style.display = "grid"
        setTimeout(() => 
        {
        document.querySelector("#search-show-con").style.height= "399px"
        document.querySelector("#search-show-con").style.background= "#198f999e"
        }, 50);
        

        let filteredData = this.allProducts.filter((arg)=>
        {
           return arg.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
        })

    

        document.querySelector("#search-show-con").innerHTML = `

                ${
                    filteredData.map((arg)=>
                    {
                        return`
                        
                        <div id="filtered-product" pid="${arg._id}">
                            <img src="${arg.imageURL}" pid="${arg._id}">
                            <p pid="${arg._id}">${arg.name}</p>
                        </div>
                        
                        
                        `
                    }).join('\n')

                }
        
        `
                

            Array.from(document.querySelectorAll("#filtered-product")).map(arg=>
                {
                    arg.addEventListener('click',async(e)=>
                    {
                        
                        document.querySelector(".search input").value = ""
                        document.querySelector("#search-show-con").style.display = "none"
                        await showOneItem(e.target.getAttribute('pid'))
                    })
                })
            
        
            setTimeout(() => {Array.from(document.querySelectorAll("#filtered-product")).map(arg=>{arg.style.display = "block"})}, 1000);
            setTimeout(() => {Array.from(document.querySelectorAll("#filtered-product")).map(arg=>{arg.style.scale = "1"})}, 1300);
         
    })

    document.querySelector(".search input").addEventListener('keyup',()=>
    {

        if(document.querySelector(".search input").value.length < 1)
        {
            
            document.querySelector("#search-show-con").style.height= "0px"
            Array.from(document.querySelectorAll("#filtered-product")).map(arg=>{arg.style.display = "none";arg.style.scale = "0"})
            setTimeout(() =>
            {
            document.querySelector("#search-show-con").style.display = "none"
            document.querySelector("#search-show-con").style.background= "#a52a2a"
            }, 1000);
        }
    })


    

    }
}


export const home = new Home()


