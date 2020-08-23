

window.onload = function () {
  document.getElementById('womens').addEventListener('click', displayAllWomensImages);
  document.getElementById('mens').addEventListener('click', displayAllMensImages);
  document.getElementById('m-shirts').addEventListener('click', displayMensShirts);
  document.getElementById('m-tanktops').addEventListener('click', displayMensTankTops);
  document.getElementById('m-shorts').addEventListener('click', displayMensShorts);
  document.getElementById('m-joggers').addEventListener('click', displayMensJoggers);
  document.getElementById('w-shirts').addEventListener('click', displayWomensShirts);
  document.getElementById('w-tanktops').addEventListener('click', displayWomensTankTops);
  document.getElementById('w-shorts').addEventListener('click', displayWomensShorts);
  document.getElementById('w-pants').addEventListener('click', displayWomensPants);
  document.getElementById('currentFeatured').addEventListener('click', displayCurrentlyFeatured);
  document.getElementById('aboutUs').addEventListener('click', displayAboutUs);
  document.getElementById('yourCart').addEventListener('click', displayYourCart);
};

//get DOM elements from HTMLSS
var mensbtn = document.getElementById('mens');
var womensbtn = document.getElementById('womens');
var shopNowBtn = document.getElementById('currentFeatured');
var mensDynamicNavBar = document.querySelector('.dynamic-navlinks-mens');
var womensDynamicNavBar = document.querySelector('.dynamic-navlinks-womens');
var displayHeader = document.querySelector('.dynamicHeader');
var navbar = document.querySelector('.navbar');
var footer = document.querySelector('footer');
var yourCart = document.querySelector('.yourCart');

//The folloiwng query selectors grab each clothing category from both mens and womens. Each clothing category is in its own div in the HTML.

//dom selector for mens
var allMens = document.querySelector('.all-mens');
var mensshirts = document.querySelector('.mens-shirts');
var tanktops = document.querySelector('.tank-tops');
var menshorts = document.querySelector('.mens-shorts');
var joggers = document.querySelector('.joggers');

//dom selector for womens
var allWomens = document.querySelector('.all-womens');
var womensTops = document.querySelector('.womens-tops');
var womensTanks = document.querySelector('.womens-tanks');
var womensShorts = document.querySelector('.womens-shorts');
var womensPants = document.querySelector('.womens-pants');
var womensLux = document.querySelector('.womens-lux');

//activate sticky name on home
navbar.classList.add('activate-sticky-nav');

//the following 3 event listeners remove sticky nav bar when in mens,womens and feautured(SHOP NOW) page.
mensbtn.addEventListener('click', function () {
  navbar.classList.remove('activate-sticky-nav');
});

womensbtn.addEventListener('click', function () {
  navbar.classList.remove('activate-sticky-nav');
});

shopNowBtn.addEventListener('click', function () {
  navbar.classList.remove('activate-sticky-nav');
});

//showAllmens() and showAllWomens() remove unwanted images through removing "display: flex" from CSS
// and then add "display:flex" to the correct
//classes to show ALL categories.

function showAllmens() {
  allWomens.classList.remove('activate-flex');
  allMens.classList.add('activate-flex');
  mensshirts.classList.add('activate-flex');
  tanktops.classList.add('activate-flex');
  menshorts.classList.add('activate-flex');
  joggers.classList.add('activate-flex');
}

function showAllWomens() {
  allMens.classList.remove('activate-flex');
  allWomens.classList.add('activate-flex');
  womensTops.classList.add('activate-flex');
  womensTanks.classList.add('activate-flex');
  womensShorts.classList.add('activate-flex');
  womensPants.classList.add('activate-flex');
  womensLux.classList.add('activate-flex');
}

//the following  functions remove "display:flex" from unwanted categories so only the user selected clothing category will appear on the webpage.
function displayMensShirts() {
  displayHeader.innerHTML = 'MENS SHIRTS';
  mensDynamicNavBar.classList.add('activate-navlinks-mens');
  mensshirts.classList.add('activate-flex');
  tanktops.classList.remove('activate-flex');
  menshorts.classList.remove('activate-flex');
  joggers.classList.remove('activate-flex');
}

function displayMensTankTops() {
  displayHeader.innerHTML = 'MENS TANK TOPS';
  mensDynamicNavBar.classList.add('activate-navlinks-mens');
  tanktops.classList.add('activate-flex');
  mensshirts.classList.remove('activate-flex');
  menshorts.classList.remove('activate-flex');
  joggers.classList.remove('activate-flex');
}

function displayMensShorts() {
  displayHeader.innerHTML = 'MENS SHORTS';
  mensDynamicNavBar.classList.add('activate-navlinks-mens');
  menshorts.classList.add('activate-flex');
  mensshirts.classList.remove('activate-flex');
  tanktops.classList.remove('activate-flex');
  joggers.classList.remove('activate-flex');
}

function displayMensJoggers() {
  displayHeader.innerHTML = 'MENS JOGGERS';
  mensDynamicNavBar.classList.add('activate-navlinks-mens');
  joggers.classList.add('activate-flex');
  menshorts.classList.remove('activate-flex');
  mensshirts.classList.remove('activate-flex');
  tanktops.classList.remove('activate-flex');
}

function displayAllMensImages() {
  clearPage();
  displayHeader.classList.add('activate-flex');
  displayHeader.innerHTML = 'ALL MENS CLOTHING';
  womensDynamicNavBar.classList.remove('activate-navlinks-womens');
  mensDynamicNavBar.classList.add('activate-navlinks-mens');
  showAllmens();
}

function displayAllWomensImages() {
  clearPage();
  displayHeader.classList.add('activate-flex');
  displayHeader.innerHTML = 'ALL WOMENS CLOTHING';
  mensDynamicNavBar.classList.remove('activate-navlinks-mens');
  womensDynamicNavBar.classList.add('activate-navlinks-womens');
  showAllWomens();
}

function displayWomensShirts() {
  displayHeader.innerHTML = 'WOMENS SHIRTS';
  mensDynamicNavBar.classList.remove('activate-navlinks-mens');
  womensDynamicNavBar.classList.add('activate-navlinks-womens');
  womensTops.classList.add('activate-flex');
  womensTanks.classList.remove('activate-flex');
  womensShorts.classList.remove('activate-flex');
  womensPants.classList.remove('activate-flex');
  womensLux.classList.remove('activate-flex');
}

function displayWomensTankTops() {
  displayHeader.innerHTML = 'WOMENS TANK TOPS';
  mensDynamicNavBar.classList.remove('activate-navlinks-mens');
  womensDynamicNavBar.classList.add('activate-navlinks-womens');
  womensTops.classList.remove('activate-flex');
  womensTanks.classList.add('activate-flex');
  womensShorts.classList.remove('activate-flex');
  womensPants.classList.remove('activate-flex');
  womensLux.classList.remove('activate-flex');
}
function displayWomensPants() {
  displayHeader.innerHTML = 'WOMENS YOGA PANTS';
  mensDynamicNavBar.classList.remove('activate-navlinks-mens');
  womensDynamicNavBar.classList.add('activate-navlinks-womens');
  womensTops.classList.remove('activate-flex');
  womensTanks.classList.remove('activate-flex');
  womensShorts.classList.remove('activate-flex');
  womensPants.classList.add('activate-flex');
  womensLux.classList.remove('activate-flex');
}

function displayWomensShorts() {
  displayHeader.innerHTML = 'WOMENS SHORTS';
  mensDynamicNavBar.classList.remove('activate-navlinks-mens');
  womensDynamicNavBar.classList.add('activate-navlinks-womens');
  womensTops.classList.remove('activate-flex');
  womensTanks.classList.remove('activate-flex');
  womensShorts.classList.add('activate-flex');
  womensPants.classList.remove('activate-flex');
  womensLux.classList.remove('activate-flex');
}

function displayCurrentlyFeatured() {
  clearDivElements();
  clearListElements();
  footer.classList.add('remove-flex');
  yourCart.classList.remove('activate-flex');
  displayHeader.classList.add('activate-flex');
  displayHeader.innerHTML = 'THE NEW "LUX" WOMENS COLLECTION';
  mensDynamicNavBar.classList.remove('activate-navlinks-mens');
  womensDynamicNavBar.classList.add('activate-navlinks-womens');
  showAllWomens();
  womensTops.classList.remove('activate-flex');
  womensTanks.classList.remove('activate-flex');
  womensShorts.classList.remove('activate-flex');
  womensPants.classList.remove('activate-flex');
  womensLux.classList.add('activate-flex');
}

function displayAboutUs() {
  clearPage();
  navbar.classList.remove('activate-sticky-nav');
  allMens.classList.remove('activate-flex');
  allWomens.classList.remove('activate-flex');
  displayHeader.classList.add('activate-flex');
  mensDynamicNavBar.classList.remove('activate-navlinks-mens');
  womensDynamicNavBar.classList.remove('activate-navlinks-womens');
  displayHeader.innerHTML = 'ABOUT US';

  // Here I am demonstrate how to Dynamically add elements to my HTML using the DOM.
  var aboutUsBody = document.querySelector('.aboutUs');
  var p = document.createElement('p');
  var text = document.createTextNode(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.'
  );
  p.appendChild(text);
  aboutUsBody.appendChild(p);
  var aboutUsImgDiv = document.createElement('div');
  aboutUsImgDiv.id = 'aboutUsIMG';
  var img = document.createElement('img');
  img.src = 'images/deadlift2.jpg';
  aboutUsImgDiv.appendChild(img);
  var img2 = document.createElement('img');
  img2.src = 'images/zen.jpg';
  aboutUsImgDiv.appendChild(img2);
  var img3 = document.createElement('img');
  img3.src = 'images/stretch.jpg';
  aboutUsImgDiv.appendChild(img3);
  aboutUsBody.appendChild(aboutUsImgDiv);
}

function displayYourCart() {
  clearDivElements();
  clearListElements();
  clearAboutUsElements();
  footer.classList.add('remove-flex');
  navbar.classList.remove('activate-sticky-nav');

  allMens.classList.remove('activate-flex');
  allWomens.classList.remove('activate-flex');

  displayHeader.classList.add('activate-flex');
  mensDynamicNavBar.classList.remove('activate-navlinks-mens');
  womensDynamicNavBar.classList.remove('activate-navlinks-womens');
  displayHeader.innerHTML = 'YOUR CART';

  var yourCart = document.querySelector('.yourCart');
  yourCart.classList.add('activate-flex');
}

//logic for activating/deactivating modal window in home page
var signupBtn = document.getElementById('signup-btn');
var socialBtn = document.getElementById('socials-btn');
var modalBg = document.querySelector('.bg-modal');
var socialModalBg = document.querySelector('.bg-modalSocial');
var closeModalBtn = document.querySelector('.close-modal');
var closeSocialModalBtn = document.querySelector('.close-social-modal');

//activate modals
signupBtn.addEventListener('click', function () {
  modalBg.classList.add('activate-modal');
});

socialBtn.addEventListener('click', function () {
  socialModalBg.classList.add('activate-modal');
});

//close modal
closeModalBtn.addEventListener('click', function () {
  modalBg.classList.remove('activate-modal');
});

closeSocialModalBtn.addEventListener('click', function () {
  socialModalBg.classList.remove('activate-modal');
});

//helper functions
function clearListElements() {
  var ol = document.querySelector('.dynamic-navlinks');
  if (ol) {
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild);
    }
  }
}

function clearDivElements() {
  var div = document.querySelector('.homePage');
  if (div) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
}

function clearAboutUsElements() {
  var div = document.querySelector('.aboutUs');
  if (div) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
}

function clearPage() {
  clearDivElements();
  clearListElements();
  clearAboutUsElements();
  yourCart.classList.remove('activate-flex');
  footer.classList.add('remove-flex');
}



var orderProbcontent = document.querySelector('.orderProbContent');
document.getElementById('Question').addEventListener('click', function () {
  orderProbcontent.classList.remove('activate-flex');


})

document.getElementById('Comment').addEventListener('click', function () {
  orderProbcontent.classList.remove('activate-flex');
})

document.getElementById('orderProb').addEventListener('click', displayOrderProbDiv);
function displayOrderProbDiv() {
  console.log("helloooo")
  orderProbcontent.classList.add('activate-flex');
  console.log("helloooo")

}

//get DOM elements to validate form
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var city = document.getElementById('city');
var province = document.getElementById("province");
var phoneNum = document.getElementById('phoneNum1');
var form = document.getElementById('custInfo');
var error = document.getElementById('error');
var orderNum = document.getElementById('orderNumber');

function validateForm() {
  var regExAlpha = /^[A-Za-z]+$/;
  var regExPhoneNum = /^\d{10}$/;

  if (!fName.value.match(regExAlpha)) {
    error.innerHTML = 'Error: Alphabetical Characters Only in First Name';
    fName.focus();
    return false;
  }

  if (!lName.value.match(regExAlpha)) {
    error.innerHTML = 'Error: Alphabetical Characters Only in Last Name';
    lName.focus();
    return false;
  }

  if (!province.value.match(regExAlpha)) {
    error.innerHTML = 'Error: Alphabetical Characters Only in Province';
    province.focus();
    return false;
  }

  if (!phoneNum.value.match(regExPhoneNum)) {
    error.innerHTML = 'Error: Digits in Phone Number Only and 10 Digits';
    phoneNum.focus();
    return false;
  }

  if (!orderNum.value.match(regExPhoneNum)) {
    error.innerHTML = 'Error: Please Enter 10 Digit Order Number';
    orderNum.focus();
    return false;
  }

  return true;
}



var orderProbcontent = document.querySelector('.orderProbContent');
document.getElementById('Question').addEventListener('click', function () {
  orderProbcontent.classList.remove('activate-flex');


})

document.getElementById('Comment').addEventListener('click', function () {
  orderProbcontent.classList.remove('activate-flex');
})

document.getElementById('orderProb').addEventListener('click', displayOrderProbDiv);
function displayOrderProbDiv() {
  orderProbcontent.classList.add('activate-flex')
}