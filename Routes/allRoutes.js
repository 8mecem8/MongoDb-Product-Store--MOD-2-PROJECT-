const product = require("../models/products")




exports.startAllRoutes = (app)=>
{



    app.get("/get_products", async (req, res) => {let rs = await product.find({});res.json(rs);});

    app.post("/create_product", async (req, res) => {
        const {category,name,description,imageURL,price,amount,inStock,} = req.body;
        console.log(req.body,"is bodyy =======")
      
        let resdata = await product.create({category,name,description,imageURL,price,amount,inStock});
      
        console.log(resdata);
      
        if(resdata) {res.send(resdata);}
        
      });
      
      
      
      
      app.put("/update_product", async (req, res) => 
      {
        const typeOfReq = req.body.type
        const pId = req.body.pID 
        const fBody = req.body.updatedProduct
        
        if(typeOfReq == "buy")
        {
          let response = await product.findByIdAndUpdate(pId,{ $inc:{amount:-1} },{ new: true });res.json(response);
        }


        if(typeOfReq == "update")
        {
           let response = await product.findByIdAndUpdate(pId,fBody,{ new: true });res.json(response); 
        }

      });


      
      app.delete("/delete_product", async (req, res) => 
      {
       
        let productID = req.query.productId;

        console.log(productID)
      
        let pR = await product.deleteOne({ _id: productID });
      
        console.log(pR);
      
        res.send({ data: `deleted ${pR}.` });
      });
      
      


      app.get("/get_specific_product/:product_id", async (req, res) => 
      {
        let pId = req.params.product_id;
        let productRes = await product.find({"_id" :`${pId}`});
        res.json(productRes);
      });


}