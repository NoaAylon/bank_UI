$("#buttonDeposit").click(function () {
  alert("Deposit Complete");
});


let banks_data;

$(document).ready(function () {
  let banks = document.getElementById("banks");
  if (!banks) return;

  $.getJSON("data/data.json", function (data) {
    banks_data = data;
    console.log(data);
    for (let bank of banks_data)
      banks.innerHTML += `<div class="card col-sm-12 col-lg-4">
      <a href='bank.html?bankId=${bank.id}&bankName=${bank.name}&interest=${bank.interest}&subscribers=${bank.subscribers}'>${bank.name}
      <img class="card-img-top" src="${bank.image}" alt="Card image cap"></a>
                <div class="card-body">
                    <h5 class="card-title">${bank.name}</h5>
                    <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>`
    //console.log(banks.innerHTML);
  })
});



/*************************************************/

// let next = document.getElementsByClassName("btn btn-lg btn-primary btn-block");
// next.onclick = function () {
//   location.href = "../myaccount.html";
// } 


/*************************************************/