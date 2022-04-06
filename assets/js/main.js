const registerBtns = document.querySelectorAll(".js-register-btn");
const loginBtns = document.querySelectorAll(".js-login-btn");
const modalRegister = document.querySelector(".modal__register");
const modalLogin = document.querySelector(".modal__login");
const modal = document.querySelector(".js-modal");
const modalCloses = document.querySelectorAll(".js-modal-close");
const modalContainers = document.querySelectorAll(".js-modal-container");

// Hàm thêm class open vào Register Form
function showRegisterForm() {
  modal.classList.add("open");
  modalRegister.classList.add("open");
}

// Hàm xóa class open ở Register Form
function hiddenRegisterForm() {
  modal.classList.remove("open");
  modalRegister.classList.remove("open");
}

// Hàm thêm class open vào Login Form
function showLoginForm() {
  modal.classList.add("open");
  modalLogin.classList.add("open");
}

function hiddenLoginForm() {
  modal.classList.remove("open");
  modalLogin.classList.remove("open");
}

function hiddenAuthForm() {
  modal.classList.remove("open");
  modalLogin.classList.remove("open");
  modalRegister.classList.remove("open");
}

// Lắng nghe click và hiện register form
for (const registerBtn of registerBtns) {
  registerBtn.addEventListener("click", hiddenLoginForm);
  registerBtn.addEventListener("click", showRegisterForm);
}

// Lắng nghe click và hiện Login form
for (const loginBtn of loginBtns) {
  loginBtn.addEventListener("click", hiddenRegisterForm);
  loginBtn.addEventListener("click", showLoginForm);
}

// Lắng nghe click và ẩn form
for (const modalClose of modalCloses) {
  modalClose.addEventListener("click", hiddenRegisterForm);
  modalClose.addEventListener("click", hiddenLoginForm);
}

// Sự kiện để click ra ngoài để đóng
for (const modalContainer of modalContainers) {
  modal.addEventListener("click", hiddenAuthForm);
  modalContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

const modalNoCart = document.querySelector(".js-modal-no-cart");
const modalHasCarts = document.querySelectorAll(".js-modal-has-cart");
const removeAllBtn = document.querySelector(".js-btn-remove-all");

function showNoCart() {
  modalNoCart.classList.add("header__cart-list--no-cart");
}

function hiddenHasCart() {
  for (const modalHasCart of modalHasCarts) {
    modalHasCart.classList.add("Remove");
  }
}

for (const modalHasCart of modalHasCarts) {
}
removeAllBtn.addEventListener("click", showNoCart);
removeAllBtn.addEventListener("click", hiddenHasCart);

const inShopBtn = document.querySelector(".js-btn-inShop");
const outsideShopBtn = document.querySelector(".js-btn-outsideShop");

// Hàm thêm tích ở trong shop
function ShowCheckinShop() {
  inShopBtn.classList.add("header__search-option-item-active");
}

// hàm xóa tích ở trong shop
function HiddenCheckinShop() {
  inShopBtn.classList.remove("header__search-option-item-active");
}

// Hàm thêm tích ở trong shop
function ShowCheckoutsideShop() {
  outsideShopBtn.classList.add("header__search-option-item-active");
}

// Hàm xóa tích ở trong shop
function HiddenCheckoutsideShop() {
  outsideShopBtn.classList.remove("header__search-option-item-active");
}

// Lắng nghe click ở trong shop và thêm tích ở trong shop và xóa ở ngoài shop
inShopBtn.addEventListener("click", ShowCheckinShop);
inShopBtn.addEventListener("click", HiddenCheckoutsideShop);

// Lắng nghe click ở trong shop và thêm tích ở ngoài shop và xóa ở trong shop
outsideShopBtn.addEventListener("click", ShowCheckoutsideShop);
outsideShopBtn.addEventListener("click", HiddenCheckinShop);
