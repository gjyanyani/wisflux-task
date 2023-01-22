// form validation

function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;

  if (name == "") {
    alert("Name is required!");
    return false;
  }

  if (age == "") {
    alert("Age is required!");
    return false;
  } else if (age < 1) {
    alert("Age must be above zero.");
  }

  if (address == "") {
    alert("Address is required!");
    return false;
  }

  if (email == "") {
    alert("Email is required!");
    return false;
  } else if (!email.includes("@")) {
    alert("Invalid email address");
    return false;
  }

  return true;
}

// Function to show data from local storage

function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";

  peopleList.forEach(function (element, index) {
    html += "";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      '<td><button onClick="deleteData(' +
      index +
      ')" class="btn btn-danger">Delete</button><button onClick="updateData(' +
      index +
      ')" class="btn btn-warning">Edit</button></td>';
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}

// Loads all data from local storage when page is loaded
document.onload = showData();

// function to add data to local storage

function addData() {
  if (validateForm() == true) {
    // form validation checked
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.push({
      name: name,
      age: age,
      address: address,
      email: email,
    });

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    var name = (document.getElementById("name").value = "");
    var age = (document.getElementById("age").value = "");
    var address = (document.getElementById("address").value = "");
    var email = (document.getElementById("email").value = "");
  }
}

// function to delete data from local storage

function deleteData(index) {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
}

// function to edit/upadte data in local storage

function updateData(index) {
  // hide submit button and show update button
  document.getElementById("submit").style.display = "none";
  document.getElementById("update").style.display = "block";

  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  document.getElementById("name").value = peopleList[index].name;
  document.getElementById("age").value = peopleList[index].age;
  document.getElementById("address").value = peopleList[index].address;
  document.getElementById("email").value = peopleList[index].email;

  document.querySelector("#update").onclick = function () {
    if (validateForm() == true) {
      peopleList[index].name = document.getElementById("name").value;
      peopleList[index].age = document.getElementById("age").value;
      peopleList[index].address = document.getElementById("address").value;
      peopleList[index].email = document.getElementById("email").value;

      localStorage.setItem("peopleList", JSON.stringify(peopleList));

      showData();

      var name = (document.getElementById("name").value = "");
      var age = (document.getElementById("age").value = "");
      var address = (document.getElementById("address").value = "");
      var email = (document.getElementById("email").value = "");

      // show submit button and hide update button
      document.getElementById("submit").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
  };
}
