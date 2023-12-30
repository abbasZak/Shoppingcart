const carticon = document.querySelector("#cart");
const cartPage = document.querySelector(".cart");
const Allcartpage = document.querySelectorAll("#allcart")
const productslist = document.querySelector(".items");
const TotalPrice = document.querySelector("#total");
const cartbadge = document.querySelector(".cart-badge");
const cartproducts = document.querySelectorAll(".cartproducts");
const finished = document.querySelector(".finished");
const productCart = document.querySelector("#productCart");
const Emptymsg = document.querySelector("#emptymsg");

let count = 0;
let total = 0;



carticon.addEventListener('click', function(){
    cartPage.classList.toggle('active');
    console.log("Working");
})

// Array of objects of all the products
let products = [
    {
        id: 1,
        name: "Shoe",
        image: "image/shoe.png",
        price: 500
    },

    {
        id: 2,
        name: "Huawei Fridge",
        image: "image/fridge.png",
        price: 500
    },

    {
        id: 3,
        name: "Casio watch",
        image: "image/casiowatch.png",
        price: 1000
    },

    {
        id: 4,
        name: "Iphone x",
        image: "image/iphonex.png",
        price: 500
    },

    {
        id: 5,
        name: "Mackbook pro",
        image: "image/macbook.png",
        price: 1000
    },

    {
        id: 6,
        name: "Ps4",
        image: "image/PS4.png",
        price: 5500
    }


];

let listCards = [];

function initApp(){
    products.forEach((product, key)=>{
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <img src = ${product.image} id= "image"/>
            <p>${product.name}</p>
            <p class="price"><span>$</span>${product.price}</p>
            <button onclick= "addtocart(${key})">Add to cart</button>
        `

        
        productslist.appendChild(newDiv);

    })
}

initApp();


productCart.addEventListener('click', function(e){
    if (e.target && e.target.matches(".fa-trash")) {
        // Find the index of the clicked item in the listCards array
        const indexToRemove = Array.from(productCart.children).indexOf(
            e.target.parentElement
        );
    
        // Remove the item from the listCards array
        listCards.splice(indexToRemove, 1);
    
        // Update the total and count
        total -= products[indexToRemove].price;
        TotalPrice.innerText = total;
        reloadcard();
        updateTotal();
    
        // Remove the parent div when the trash icon is clicked
        e.target.parentElement.remove();
    
        // If the cart becomes empty, show the empty message
        if (listCards.length === 0) {
            Emptymsg.classList.remove("hide");
            finished.classList.remove("show");
        }
    }
    
})



function addtocart(key){
    finished.classList.add("show");

    listCards.push({
        name: products[key].name,
        image: products[key].image,
        price: products[key].price        
    });

    // total += products[key].price;
    // TotalPrice.innerText = total;

    // Clear the existing content in cartPage
    productCart.innerHTML = "";
    listCards.forEach((item, key) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <img src="${item.image}" id="Cartimage"/>
            <p>${item.name}</p>
            <p class="price"><span>$</span>${item.price}</p>
            <i class="fa fa-trash" id="trashicon"></i>
        `;
        newDiv.classList.add("cart-items");
        productCart.appendChild(newDiv);
        finished.classList.add("show");

       
    });

    
    finished.classList.add("show");
 
    Emptymsg.classList.add("hide");



    reloadcard();
    updateTotal(key);
    
}

function updateTotal() {
    total = 0;
    listCards.forEach(value => {
        total += value.price; 
            
    })

    TotalPrice.innerText = total;

    
}




function reloadcard(){
    
    count = listCards.length;

    cartbadge.innerText = count;
        
    
}


