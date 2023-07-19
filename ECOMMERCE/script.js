// small product 

var MainImg=document.getElementById("MainImg")
var smallimg=document.getElementsByClassName("small-img")

function pagechange(id){
    window.location.href='sproduct.html'+'?id=' + id;
   
}
let quantity = [];
function init() {
    console.log(window.location.href);
    let id = window.location.href.split('=')[1];
    var dynamicSectionId = document.getElementById(id);
    dynamicSectionId.style.display = 'flex';
    clothes.forEach((val, ide)=>{
        // console.log(val.id);
        if(val.id == id)
        {
            let html = ` 
        <div class="single-pro-image">
            <img src="${val.image}" width="100%"  id="MainImg" alt=""> 
        </div>
        <div class="single-pro-details">
            <h6>Home / T-Shirts </h6>
            <h4>${val.name}</h4>
            <h2>Rs ${val.price}</h2>
            <select>
                <option>Select Size</option>
                <option>XS</option>
                <option>Small</option>
                <option>Large</option>
                <option>XL</option>
                <option>XXL</option>
            
            </select>
            <input type="number" value="1">
            <button id="${val.id}">AddToCart</button>
            <h4>Product Details</h4>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio at aliquid nobis quae vel obcaecati similique deleniti deserunt nostrum laboriosam eos consequuntur, molestias praesentium voluptates culpa illo. Omnis, corporis tempora?</span>
        </div>`;
        dynamicSectionId.innerHTML += html;
        // quantity.push({"id": id , "qnty":1});
        console.log(quantity);
        }
    });

clothes.forEach(e => {
    const addBtn = document.getElementById(e.id);
    addBtn.addEventListener('click', ele =>{
        console.log(quantity);
        if(quantity.length == 0){
            quantity.push({"id": ele.target.id , "qnty":1});
        }
        // else{
        //     let searchVal = search(ele.target.id);
        //     let boolean = searchVal[0];
        //     let indes = searchVal[1];
        //     console.log(boolean);
        //     console.log(indes);
        // }
        localStorage.setItem("quantity", JSON.stringify(quantity));
    });
});
    
// function search(index){
//     let val=0,val2=0;
//     quantity.forEach((value , ide)=>{
//         if(index == value.id)
//         {
//             val=1;
//             val2=ide;
//         }
//     });
//     return [val,val2];
// }

}

function GoShop(){
    window.location.href='shop.html'

}


// --------------Product-----------

let clothes=[
    {"id":"f1","name":"TShirt","brand":"adidas","price":599,"rating":5,"image":"image/products/f1.jpg","qnty":0},
    {"id":"f2","name":"TShirt","brand":"adidas","price":699,"rating":5,"image":"image/products/f2.jpg","qnty":0},
    {"id":"f3","name":"TShirt","brand":"adidas","price":799,"rating":5,"image":"image/products/f3.jpg","qnty":0},
    {"id":"f4","name":"TShirt","brand":"adidas","price":899,"rating":5,"image":"image/products/f4.jpg","qnty":0},
    {"id":"f5","name":"TShirt","brand":"adidas","price":999,"rating":5,"image":"image/products/f5.jpg","qnty":0},
    {"id":"f6","name":"TShirt","brand":"adidas","price":1099,"rating":5,"image":"image/products/f6.jpg","qnty":0},
    {"id":"f7","name":"TShirt","brand":"adidas","price":599,"rating":5,"image":"image/products/f7.jpg","qnty":0},
    {"id":"f8","name":"TShirt","brand":"adidas","price":699,"rating":5,"image":"image/products/f8.jpg","qnty":0},
    {"id":"n1","name":"TShirt","brand":"adidas","price":666,"rating":5,"image":"image/products/n1.jpg","qnty":0},
    {"id":"n2","name":"TShirt","brand":"adidas","price":677,"rating":5,"image":"image/products/n2.jpg","qnty":0},
    {"id":"n3","name":"TShirt","brand":"adidas","price":676,"rating":5,"image":"image/products/n3.jpg","qnty":0},
    {"id":"n4","name":"TShirt","brand":"adidas","price":755,"rating":5,"image":"image/products/n4.jpg","qnty":0},
    {"id":"n5","name":"TShirt","brand":"adidas","price":1066,"rating":5,"image":"image/products/n5.jpg","qnty":0},
    {"id":"n6","name":"TShirt","brand":"adidas","price":2066,"rating":5,"image":"image/products/n6.jpg","qnty":0},
    {"id":"n7","name":"TShirt","brand":"adidas","price":1366,"rating":5,"image":"image/products/n7.jpg","qnty":0},
    {"id":"n8","name":"TShirt","brand":"adidas","price":1046,"rating":5,"image":"image/products/n8.jpg","qnty":0},

]

// -------------------------------------------Cart--------------------------------

// const listOfProducts =[]
// console.log("lets see")
// window.addEventListener("load",()=>{
//     const urlString =window.location.href.split("/")
    
// if(urlString[urlString.length-1]){
//     console.log(localStorage.getItem("listOfProducts"))
// }



// const parent = document.getElementById("item-container")
// const itemSet = new Set()
// for(let item of localStorage.getItem("listOfProducts").split(",")){

//     if(!itemSet.has(item)){
//         const itemClone= document.getElementById(item).cloneNode(true);
//         itemClone.style.display="block"
//         parent.append(itemClone)
//         itemSet.add(item)
//     }
 
// // [f1, f1, f3, f1]
// }

// })


// function handleAddToCart(id){

// console.log("clcikcss",localStorage.getItem("listOfProducts"), typeof localStorage.getItem("listOfProducts"))
// let latestArr=[id]
// if(localStorage.getItem("listOfProducts")){
//     // console.log(localStorage.getItem("listOfProducts"))
//      latestArr = localStorage.getItem("listOfProducts")+"," +id
// // latestArr.push(id)
// }

// // console.log(latestArr,"latest")
// localStorage.setItem("listOfProducts",latestArr.toString() )
// }


let qnty=[];
const cart=()=>{
    const shpcart=document.getElementById("badge")
}
// ------------------------------------------------------------------START-----------------------------





