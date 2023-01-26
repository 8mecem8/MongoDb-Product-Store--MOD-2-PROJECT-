const product = require("../models/products")




exports.startAllRoutes = (app)=>
{



    app.get("/get_products", async (req, res) => {let rs = await product.find({});res.json(rs);});

    app.post("/create_product", async (req, res) => {
        const {category,name,description,imageURL,price,amount,inStock,} = req.body;
      
        let resdata = await product.create({category,name,description,imageURL,price,amount,inStock,});
      
        console.log(returnedValue);
      
        if(resdata) {res.send(resdata);}
        
      });
      
      
      
      
      app.put("/update_product", async (req, res) => {
        let response = await product.findByIdAndUpdate(
          req.body.id,
          { name: req.body.newName },
          { new: true }
        );
        console.log("response from collection", response);
        res.json(response);
      });
      
      app.delete("/delete_product", async (req, res) => {
        // frontend: fetch(`http://localhost:5000/delete_product/?idOfProduct=${id}`)
        let productID = req.query.idOfProduct;
      
        let productResponse = await product.delete({ _id: productID });
      
        console.log(`${productResponse}`);
      
        res.send({ data: `deleted ${productResponse.name}.` });
      });
      
      


      app.get("/get_specific_product/:product_id", async (req, res) => {
        let pId = req.params.product_id;
        
        //let regex = new RegExp(["^", productToShow, "$"].join(""), "i");
      
        let productRes = await product.find({"_id" :`${pId}`});
      
        res.json(productRes);
      });


}