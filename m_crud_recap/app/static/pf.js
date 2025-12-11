let addpBtn=document.getElementById("addP")
let cardsContainer=document.getElementById("cardsContainer")
function loadProducts(){
    cardsContainer.innerHTML=""
    fetch("/get_products/").then(res=>res.json()).then(res=>{
        console.log(res)
        res.data.forEach((x)=>{
            let cardDiv=document.createElement("div")
            cardDiv.classList.add("product-card")
        cardDiv.innerHTML=`
        <img src='${x.i}' width="150px"/>
        <p>${x.n}</p>
        <span>${x.p}</span>
        <div>
        <button onclick='editP(${x.id})'>Edit</button>
        <button onclick='deleteP(${x.id})'>Delete</button>
        </div>

        `
        cardsContainer.append(cardDiv)
        })
    })
}

function deleteP(id){
    fetch(`/delete_product/${id}`,{
        method:"DELETE"
    }).then(res=>res.json()).then(res=>{
        console.log(res)
        loadProducts()
    })
}


function editP(id){
    fetch("/get_products/").then(res=>res.json()).then(res=>{
        let editableProduct=res.data.find((x)=>x.id == id)
        console.log(editableProduct,"editableProduct")
        document.getElementById("name").value=editableProduct.n
        document.getElementById("desc").value=editableProduct.d
        document.getElementById("price").value=editableProduct.p
        document.getElementById("cat").value=editableProduct.c
        document.getElementById("img").value=editableProduct.i

        document.getElementById("addP").style.display="none"
        document.getElementById("editP").style.display="block"


        document.getElementById("editP").addEventListener("click",(e)=>{
            e.preventDefault()
             let pName=document.getElementById("name").value 
     let pDesc=document.getElementById("desc").value 
     let pPrice=document.getElementById("price").value 
     let pCat=document.getElementById("cat").value 
     let pImg=document.getElementById("img").value 

     let updateProduct={
        n:pName ,// n : "laptop"
        d:pDesc , // p :"64gb and 15inhc"
        p:pPrice,
        c:pCat,
        i:pImg
     }

     fetch(`/edit_product/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updateProduct)
     }).then(res=>res.json()).then(res=>{
        console.log(res)
        loadProducts()
        document.querySelector("form").reset()
     })


        })

    })
}
addpBtn.addEventListener("click",(e)=>{
    e.preventDefault()
     let pName=document.getElementById("name").value 
     let pDesc=document.getElementById("desc").value 
     let pPrice=document.getElementById("price").value 
     let pCat=document.getElementById("cat").value 
     let pImg=document.getElementById("img").value 

     let newProduct={
        n:pName ,// n : "laptop"
        d:pDesc , // p :"64gb and 15inhc"
        p:pPrice,
        c:pCat,
        i:pImg
     }

     fetch("/create_product/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newProduct)
     }).then(res=>res.json()).then(res=>
     {
        console.log(res)
        loadProducts()
     }
    )

     document.querySelector("form").reset()
})



document.addEventListener("DOMContentLoaded",loadProducts)