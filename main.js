const date = new Date();

class Item{
    constructor(item,quantity,price){
        this.item = item;
        this.quantity = quantity;
        this.price = price;
    }
}


//UI EVENTS
class UIAction{


    static displayProducts(){
        //loop through products in the localstorage 
        // array.forEach(element => {
        //     UIAction.addItemToList( element)
        // });
    }

    // ADD PRODUCT EVENT
    static addItemToList(productParam){
        const prod = document.querySelector('.product-display');
        const createProd = document.createElement('div');
        createProd.classList.add('product-display-container');

        createProd.innerHTML = 
    `
        <p id="itemName" >${productParam.item}</p>
        <p id="itemQuantity" >${productParam.quantity}</p>
        <p id="itemPrice" >$${productParam.price}</p>
        <p id="itemDate" >${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</p>
        <p><button id="delete" class="delete">Delete</button></p>
    
    `
        prod.appendChild(createProd)
    }

    //DELETE PRODUCT EVENT
    static deleteProduct(deleteBtn){
        //check if its the button that is clicked
        if(deleteBtn.classList.contains('delete')){
            deleteBtn.parentElement.parentElement.remove();
            console.log('Delete');

        //deleteProd();
            /* const parent = document.querySelector('.product-display-container');
            parent.remove(); */
        }
    }

    //CLEAR VALUES EVENT
    static clearItemFields(){
        document.querySelector('#item').value = "";
        document.querySelector('#quantity').value = "";
        document.querySelector('#price').value = "";
    }
}


//LOAD PRODUCT EVENT
document.addEventListener('DOMContentLoaded', UIAction.displayProducts)

//SUBMIT FORM EVENT
document.getElementById('product-form').addEventListener('submit', (e)=>{
    
    e.preventDefault();
    // console.log('Submitted');
    const item = document.querySelector('#item').value;
    const quantity = document.querySelector('#quantity').value;
    const price = document.querySelector('#price').value;
    
    //instantiate an item
    if(item === '' || quantity === '' || price === ''){
        alert(new Error('Fill all fields'))
    }else{
        const product = new Item(item, quantity, price);
        UIAction.addItemToList(product)
    }
    
    //check if fields are empty
    //  if(item || quantity || price === " "){
        //     alert( "Make sure the fields are filled");
        //  } else {}
        
    document.querySelector('.product-display').addEventListener('click', (e)=>{
       // maybe targeting product-display-container is where the problem is. When i use product-display-container, only the 1st item is deleted but the rest of products dont even log anything to the console. 
       //we want to delete the whole div

        UIAction.deleteProduct(e.target);
        console.log(e.target);
    })

    //DELETE PRODUCT
    // UIAction.prototype.deleteProd = function (){
    //     document.querySelector('#delete').addEventListener('click',()=>{
    //         console.log('Click');
    //     const parent = document.querySelector('.product-display-container');

    //     parent.remove();
    //     })
    // }

    UIAction.clearItemFields();
        
    })


    
    
    
     
    //Min 12 - class UI -> displayBooks, 
    //Min 6 - 