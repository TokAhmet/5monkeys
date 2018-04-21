let orderButton = document.getElementById('order-shop');

let phoneIcon = document.getElementById('phoneIcon');
let changeNumber = document.getElementById('changeNumber');

let birthDate = document.getElementById("birthDate");
let removeBirthNumber = document.getElementById('removeBirthNumber');
let checkBirthNumber = document.getElementById('checkBirthNumber');
let nmbr1 = document.getElementById('box1');
let nmbr2 = document.getElementById('box2');
let nmbr3 = document.getElementById('box3');
let nmbr4 = document.getElementById('box4');
let nmbr5 = document.getElementById('box5');
let nmbr6 = document.getElementById('box6');
let nmbr7 = document.getElementById('box7');
let nmbr8 = document.getElementById('box8');
let nmbr9 = document.getElementById('box9');
let nmbr0 = document.getElementById('box0');

let addFirstItem = document.getElementById('addFirstItem');
let addSecondItem = document.getElementById('addSecondItem');
let removeFirstItem = document.getElementById('removeFirstItem');
let removeSecondItem = document.getElementById('removeSecondItem');
let firstItem = document.getElementById('firstItem');
let secondItem = document.getElementById('secondItem');
let firstItemPrice = document.getElementById('firstItemPrice');
let secondItemPrice = document.getElementById('secondItemPrice');

let totalPrice = document.getElementById('totalPrice');
let momsPrice = document.getElementById('momsPrice');

let circleImage = document.getElementById('circleImage');
let circleCheckImage = document.getElementById('circleCheckImage');

let modal = document.getElementById('myModal');
let myModalPhone = document.getElementById('myModalPhone');
let modalSpan = document.getElementById('modal-span');

let arrayDate = [];

let firstValue = 1;
let firstPrice = 599;
let secondValue = 1;
let secondPrice = 139;
let deliverPrice = 79;

orderButton.addEventListener('click', function(e) {
  modal.style.display = "block";
  setTimeout(function() {
    modal.remove();
    location.reload();
  }, 2150);

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      location.reload();
    }
  }

});

phoneIcon.addEventListener('click', function(e) {
  myModalPhone.style.display = "block";

  window.onclick = function(event) {
    if (event.target == myModalPhone) {
      myModalPhone.style.display = "none";
      let newPhoneNumber = document.getElementById('newPhoneNumber').value = "";
    }
  }
});

modalSpan.addEventListener('click', function(e) {
  myModalPhone.style.display = "none";
  let newPhoneNumber = document.getElementById('newPhoneNumber').value = "";
});

changeNumber.addEventListener('click', function(e) {
  let newPhoneNumber = document.getElementById('newPhoneNumber').value;
  let phoneNumber = document.getElementById('phoneNumber');
  if (newPhoneNumber.match(/^[0-9]+$/) != null) {
    phoneNumber.innerHTML = newPhoneNumber;
  } else {
    alert('det får bara innehålla nummer värden');
  }
  if (newPhoneNumber.length < 10 && newPhoneNumber.match(/^[0-9]+$/) != null) {
    alert('vänligen skriv in ett 10 siffrigt telefonnummer');
  }
  if (newPhoneNumber.match(/^[0-9]+$/) != null && newPhoneNumber.length == 10) {
    let newPhoneNumber = document.getElementById('newPhoneNumber').value = "";
    myModalPhone.style.display = "none";
  }
});

nmbr1.addEventListener("click", function(e) {
  arrayDate.push("1");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

nmbr2.addEventListener("click", function(e) {
  arrayDate.push("2");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

nmbr3.addEventListener("click", function(e) {
  arrayDate.push("3");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

nmbr4.addEventListener("click", function(e) {
  arrayDate.push("4");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

nmbr5.addEventListener("click", function(e) {
  arrayDate.push("5");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

nmbr6.addEventListener("click", function(e) {
  arrayDate.push("6");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

nmbr7.addEventListener("click", function(e) {
  arrayDate.push("7");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

nmbr8.addEventListener("click", function(e) {
  arrayDate.push("8");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

nmbr9.addEventListener("click", function(e) {
  arrayDate.push("9");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }
});

nmbr0.addEventListener("click", function(e) {
  arrayDate.push("0");
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

removeBirthNumber.addEventListener("click", function(e) {
  arrayDate.splice(-1, 1);
  birthDate.innerHTML = arrayDate.join("");
  if (arrayDate.length == 6) {
    arrayDate.push(" - ");
  }
  if (arrayDate.length > 10) {
    arrayDate = [];
  }

});

checkBirthNumber.addEventListener("click", function(e) {
  if (arrayDate.length == 0) {
    alert('Nu är din personnummer ifylld');
  } else {
    alert('Vänligen fyll i ditt personnummer');
    console.log(arrayDate.length);
  }
})

addFirstItem.addEventListener('click', function(e) {
  firstValue++;
  firstPrice += 599;
  firstItem.innerHTML = firstValue + "st";
  totalPrice.innerHTML = firstPrice + secondPrice + deliverPrice + " kr";
  momsPrice.innerHTML = Math.floor((firstPrice + secondPrice + deliverPrice) / 4) + " kr";
});

addSecondItem.addEventListener('click', function(e) {
  secondValue++;
  secondPrice += 139;
  secondItem.innerHTML = secondValue + "st";
  totalPrice.innerHTML = firstPrice + secondPrice + deliverPrice + " kr";
  momsPrice.innerHTML = Math.floor((firstPrice + secondPrice + deliverPrice) / 4) + " kr";
});

removeFirstItem.addEventListener('click', function(e) {
  firstValue--;
  firstPrice -= 599;
  if (firstValue <= 0 && firstPrice <= 0) {
    firstValue = 0;
    firstPrice = 0;
    firstItem.innerHTML = firstValue + "st";
  }
  firstItem.innerHTML = firstValue + "st";
  totalPrice.innerHTML = firstPrice + secondPrice + deliverPrice + " kr";
  momsPrice.innerHTML = Math.floor((firstPrice + secondPrice + deliverPrice) / 4) + " kr";
});

removeSecondItem.addEventListener('click', function(e) {
  secondValue--;
  secondPrice -= 139;
  if (secondValue <= 0 && secondPrice <= 0) {
    secondValue = 0;
    secondPrice = 0;
    secondItem.innerHTML = secondValue + "st";
  }
  secondItem.innerHTML = secondValue + "st";
  totalPrice.innerHTML = firstPrice + secondPrice + deliverPrice + " kr";
  momsPrice.innerHTML = Math.floor((firstPrice + secondPrice + deliverPrice) / 4) + " kr";
});

totalPrice.innerHTML = firstPrice + secondPrice + deliverPrice + " kr";

circleImage.addEventListener('click', function(e) {
  circleImage.className = "far fa-check-circle item-icon";
  circleCheckImage.className = "far fa-circle item-icon";
  deliverPrice = 0;
  totalPrice.innerHTML = firstPrice + secondPrice + deliverPrice + " kr";
  momsPrice.innerHTML = Math.floor((firstPrice + secondPrice + deliverPrice) / 4) + " kr";
});

circleCheckImage.addEventListener('click', function(e) {
  circleCheckImage.className = "far fa-check-circle item-icon";
  circleImage.className = "far fa-circle item-icon";
  deliverPrice = 79;
  totalPrice.innerHTML = firstPrice + secondPrice + deliverPrice + " kr";
  momsPrice.innerHTML = Math.floor((firstPrice + secondPrice + deliverPrice) / 4) + " kr";
});