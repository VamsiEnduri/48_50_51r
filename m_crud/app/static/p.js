// const { jsxs } = require("react/jsx-runtime")

let addPbtn = document.getElementById("addPbtn");
let getBtn = document.getElementById("getBtn");
let tTable = document.getElementById("tTable");
let tBody = document.getElementById("tBody");
let dlteTableBtn = document.getElementById("dlteTable");
let pForm = document.getElementById("pForm");
function loadProducts() {
  tBody.innerHTML = "";
  console.log("load products");
  // alert("hlo")
  fetch("/api/get_products/")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.data.forEach((x) => {
        let Trow = document.createElement("tr");
        Trow.innerHTML = `
            <td>${x.id}</td>
            <td>${x.name}</td>

            <td>${x.desc}</td>
            <td>${x.price}</td>
            <td>${x.cat}</td>

            <td>
        <img src='${x.img}' width=150/>
            </td>
            <td>
            <button onclick="editProduct(${x.id})">edit</button>
            </td>
            <td>
            <button onclick="deleteProduct(${x.id})">delete</button>
            </td>
            `;
        tBody.append(Trow);
      });
    });
}

function editProduct(id) {
    document.getElementById("addPbtn").style.display="none"
  fetch("/api/get_products/")
    .then((res) => res.json())
    .then((res) => {
      // console.log(res.data,"edit res")
      let editPItem = res.data.find((x) => x.id == id);
      console.log(editPItem, "edited item");

      document.getElementById("name").value = editPItem.name;
      document.getElementById("desc").value = editPItem.desc;
      document.getElementById("price").value = editPItem.price;
      document.getElementById("cat").value = editPItem.cat;
      document.getElementById("img").value = editPItem.img;

     
      document.getElementById("editPbtn").addEventListener("click",(e)=>{
         let updatedPData = {
        name: document.getElementById("name").value,
        desc: document.getElementById("desc").value,
        price: document.getElementById("price").value,
        cat: document.getElementById("cat").value,
        img: document.getElementById("img").value,
      };
        e.preventDefault()
        fetch(`/api/edit_p/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPData),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          loadProducts();
        })
        .catch((err) => console.log(err));
      })
    });
  alert("edit func");
}

function deleteProduct(id) {
  // alert("hlo dlete")
  fetch(`/api/delete_p/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      loadProducts();
    })
    .catch((err) => console.log(err));
}

getBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loadProducts();
});
addPbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newP = {
    name: document.getElementById("name").value,
    desc: document.getElementById("desc").value,
    price: document.getElementById("price").value,
    cat: document.getElementById("cat").value,
    img: document.getElementById("img").value,
  };
  fetch("/api/create_p/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newP),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
  pForm.reset();
  loadProducts();
});

dlteTableBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/api/delete_products/", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
});

document.addEventListener("DOMContentLoaded", loadProducts);
