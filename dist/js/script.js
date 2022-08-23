"use strict";

// Elements

const header = document.querySelector(".header");
const toggleBtn = document.querySelector(".header-nav-btn");

// Events

toggleBtn.addEventListener("click", function () {
  header.classList.toggle("open");
});
