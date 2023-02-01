## Perscholas Bootcamp MongoDb-Product-Store--MOD-2-PROJECT
![image](https://user-images.githubusercontent.com/42888722/215923940-d4968286-e35d-4626-93e9-6e535792ad6e.png)

<div align='center'>

  
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  
</div>
🔭 This project is the final assignment for Back-end Frameworks & Databases as second module of **Perscholas** Software engineer syllabus.




 ## 👨‍💻  Languages and Tools
 
 Developed the Project using with <img src="https://github.com/github/explore/blob/main/topics/html/html.png" alt="html" width="40" height="40"/>  <img src="https://github.com/github/explore/blob/main/topics/css/css.png" alt="css" width="40" height="40"/>  <img src="https://github.com/github/explore/blob/main/topics/javascript/javascript.png" alt="javascript" width="40" height="40"/>  <img src="https://github.com/github/explore/blob/main/topics/nodejs/nodejs.png" alt="nodejs" width="40" height="40"/>  <img src="https://github.com/github/explore/blob/main/topics/mongodb/mongodb.png" alt="mongodb" width="60" height="60"/> 







## Project Details
Navigation between pages should be done with a navbar (using JS to switch html files) AND/OR by clicking on things in the page (JS switches html files)

### Pages:

HOME page (index):  Shows list of products (can visit each product from here)

* all the products are displayed
* the images link to the PRODUCT page
* there should be a link to add a new product.


PRODUCT page: Shows specific product and it’s details

* a link back to the HOME page
* a link to edit the product (goes to the edit page)
* a delete button that deletes
* user can also search for a specific product from this page
* Clicking buy button should lower remaining by 1
* If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining. (Hint: conditionals).
* On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.
* The BUY button should also not be rendered if the quantity of the item is zero


EDIT page - Should allow you to edit the data of a specific product (using it’s product ID)

CREATE page - allows for creation of new products (users will include a URL for the image)

Redirects:

* The create route should redirect to HOME after creation
* The delete route should redirect to HOME after deletion
* The edit route will redirect to the edited product's PRODUCT page after the object is changed in your collection.
 
 
 
### 🔴 Mandatory To Pass:
MVP - Minimum Viable Product Your App Must Possess All These Routes

* /get_products - responds with all products in your collection
* /get_specific_product/:product_id - responds with one specific product from your collection
* /create_product - uses information from req.body to make a new product in your collection
* /delete_product/ - The product ID should be included in the URL as a query. Example: /delete_product/?productId=63cd55e8b260470b1c1f2cc0
* /update_product - uses information from req.body to update the specific product


### Technical Requirements
* Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comme* nt above explaining what is wrong
* Must contain all listed Routes.
* Must be styled and look like a store.
* You MUST have a well documented README file in your repo. PLEASE add this README.md file on your own NOT through GitHub…
   * Good example of a README: https://github.com/chroline/well_app#readme
* In lieu of presentations, you MUST create a video (on YouTube, Vimeo, etc...) of you showcasing your application and code. This video needs to be in your README file, and
* Feel free to expand upon this project and add extra features, etc. 






![image](https://user-images.githubusercontent.com/42888722/215924622-f2666e60-8ca0-4af8-81f7-3636e3c6e0a9.png)


![image](https://user-images.githubusercontent.com/42888722/215924690-d1954cc0-752a-4af2-805f-98f4e79c536c.png)


![image](https://user-images.githubusercontent.com/42888722/215924779-3a0d0ec6-ebfb-4050-aa19-ce82faf429e0.png)


![image](https://user-images.githubusercontent.com/42888722/215924836-5b31954b-28c2-4045-8cc2-9016910a7e18.png)



