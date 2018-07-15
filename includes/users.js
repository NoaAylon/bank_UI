$("document").ready(function () {
  let table = document.getElementsByClassName("table");
  let tbody = document.getElementById("tbody");

  $('#send').click(addUser);

  $.ajax({
    url: "server/select.php",
    type: "POST",
    data: {},
    success: function (data) {
      addNewRow(data);
      $('.delete').click(deleteUser);
      $('.update').click(updateUser);
    }
  });
});

function addUser() {
  console.log("in add function");
  let id = parseInt($('input:text')[0].value);
  let name = $('input:text')[1].value;
  let address = $('input:text')[2].value;
  let investment = $('input:text')[3].value;
  let balance = $('input[type="number"]')[0].value;

  $.ajax({
    url: "server/add.php",
    type: "POST",
    data: {
      id: id,
      name: name,
      address: address,
      investment: investment,
      balance: balance
    },
    success: function (data) {
      console.log(data);
      addNewRow(data);
      $('.delete').click(deleteUser);
      $('.update').click(updateUser);
    }
  });
  return false;
}

function addNewRow(row) {
  tbody.innerHTML += row;
}

function deleteUser() {
  console.log("in delete function");
  itemID = $(this).attr("id");
  console.log(itemID);

  $.ajax({
    url: "server/delete.php",
    type: "POST",
    data: {
      id: itemID
    },
    success: function (data) {
      tbody.innerHTML = data;
      //console.log(data);
      $('.delete').click(deleteUser);
    }

  })

}

function updateUser() {
  console.log("in update function");
  let id = $(this).attr("id");
  console.log(id);
  let name = document.getElementById("name" + id).innerHTML;
  let address = document.getElementById("address" + id).innerHTML;
  let investment = document.getElementById("inv" + id).innerHTML;
  let balance = document.getElementById("balance" + id).innerHTML;
  console.log(name, address, investment, balance);
  $.ajax({
    url: "server/update.php",
    type: "POST",
    data: {
      id: id,
      name: name,
      address: address,
      investment: investment,
      balance: balance
    },
    success: function (data) {
      tbody.innerHTML = data;

    }
  });
  return false;
}