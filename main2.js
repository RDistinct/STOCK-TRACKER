//non-oop version
//create an array of objects = product
//when we submit the form, populate the productItem with data & push the data to product array.
//when DOM loads, call displayProducts function which loops over product and populates product-display section with products.


//Display products
document.addEventListener('DOMContentLoaded', displayProducts)


const product = [
    {itemName:'Mirror'},
    {itemName:'Oil'},
];//push objects in this - store in localstorage

const productItem = {
    itemName:''
}
// console.log(productItem.itemName="Mirror");

//SUBMIT EVENT
document.getElementById('product-form').addEventListener('submit', (e)=>{
    e.preventDefault();

    const item = document.querySelector('#item').value;
    productItem.itemName = item;
    console.log(productItem);
    product.push(productItem)
    console.log(product);

    addProducts(productItem);

    //reset values
    resetProducts();
})

//DELETE PRODUCT EVENT
document.querySelector('.product-display').addEventListener('click', (e)=>{
    console.log(e.target);
    deleteProduct(e.target)
})

//display products when page loads
function displayProducts(){
    product.forEach(element => {
        addProducts(element)
    });
}

//function to add products to list
function addProducts(productItem){
    //target product-display
    const prodList = document.querySelector('.product-display');

    //create a div/tr assuming td is prodList
    const row = document.createElement('div');
    row.classList.add('product-display-container')
    row.innerHTML = `
    <p>${productItem.itemName}</p>
    <p><button class="delete">Delete</button></p>
    `
    // <a href ='#' class="delete">X</a> 
    //append row to prodList
    prodList.appendChild(row)
}


function resetProducts(){
    document.querySelector('#item').value = "";
}

function deleteProduct(deleteBtn){
    if(deleteBtn.classList.contains('delete')){
        deleteBtn.parentElement.parentElement.remove()
        //1st parent is p, 2nd is div
    }
}

//Display products
// document.addEventListener('DOMContentLoaded', displayProducts)