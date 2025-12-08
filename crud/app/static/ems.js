console.log("conneted to html file");

let tTable = document.getElementById("empsContainer");
let addEmpForm = document.getElementById("addEmpForm");

function loadEmps() {
  tTable.innerHTML = "";
  let dataAllEmps = JSON.parse(localStorage.getItem("emps"));
  dataAllEmps.forEach((emp) => {
    let tRow = document.createElement("tr");
    tRow.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.salary}</td>
            <button onclick='editItem(${emp.id})'>edit</button>
            <button onclick='deleteItem(${emp.id})'>delete</button>
            `;
    tTable.append(tRow);
  });
}
function editItem(id) {
  // alert(id)
  let allD = JSON.parse(localStorage.getItem("emps"));
  let matchedEmp = allD.find((x) => x.id == id);
  console.log(matchedEmp, "matchedemp");
  document.getElementById("name").value = matchedEmp.name;
  document.getElementById("email").value = matchedEmp.email;
  document.getElementById("salary").value = matchedEmp.salary;

  addEmpForm.onsubmit = function (e) {
    e.preventDefault();

    let modifiedEmp = {
      id: matchedEmp.id,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      salary: document.getElementById("salary").value,
    };

    fetch(`/api/edit-emp/${matchedEmp.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedEmp),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        let obj = allD.filter((x) => x.id == modifiedEmp.id);
        // console.log(obj);
        let index = obj[0].id - 1;
        // console.log(index);
        allD[index] = modifiedEmp;

        localStorage.setItem("emps", JSON.stringify(allD));
        addEmpForm.onsubmit=null
        loadEmps();

      });
  };
}

function deleteItem(id) {
  a = confirm();
  if (a) {
    fetch(`/api/delete-emp/${id}/`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        let allD = JSON.parse(localStorage.getItem("emps"));
        let updatedD = allD.filter((x) => x.id !== id); // # 3 !==3
        console.log(updatedD);
        localStorage.setItem("emps", JSON.stringify(updatedD));
        loadEmps();
      });
  }
}

addEmpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let empsFromLS = JSON.parse(localStorage.getItem("emps")) || [];
  let newEmp = {
    id: empsFromLS.length + 1,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    salary: document.getElementById("salary").value,
  };
  fetch("/api/create-emp/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmp),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res, "res");
      empsFromLS.push(res.data);
      localStorage.setItem("emps", JSON.stringify(empsFromLS));
      addEmpForm.reset();
      loadEmps();
    });
});

document.addEventListener("DOMContentLoaded", loadEmps);
