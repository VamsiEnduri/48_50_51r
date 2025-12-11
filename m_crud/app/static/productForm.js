// const { jsxs } = require("react/jsx-runtime")

let addPbtn=document.getElementById("addPbtn")
let getBtn=document.getElementById("getBtn")
let tTable=document.getElementById("tTable")
let tBody=document.getElementById("tBody")
let dlteTableBtn=document.getElementById("dlteTable")
let pForm=document.getElementById("pForm")
function loadProducts(){
    tTable.innerHTML=""
    alert("hlo")
    // fetch("/api/get_products/").then(res=>res.json()).then(res=>{
    //     console.log(res)
    //     res.data.forEach(x=>{
    //         let Trow=document.createElement("tr")
    //         Trow.innerHTML=`
    //         <td>${x.id}</td>
    //         <td>
    //     <img src='${x.img}' width=150/>
    //         </td>
    //         `
    //         tBody.append(Trow)
    //     })
    // })
}

// function deleteProduct(id){
//     alert("hlo")
// }
getBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    loadProducts()
})
addPbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let newP={
        name:document.getElementById("name").value,
        desc:document.getElementById("desc").value,
        price:document.getElementById("price").value,
        cat:document.getElementById("cat").value,
        img:document.getElementById("img").value,
    }
    fetch("/api/create_p/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newP)
    }).then(res=>res.json()).then(res=>console.log(res))
pForm.reset()
    loadProducts()
})

dlteTableBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    fetch("/api/delete_products/",{
        method:"DELETE"
    }).then(res=>res.json()).then(res=>console.log(res))
})



document.addEventListener("DOMContentLoaded",
    loadProducts
)



