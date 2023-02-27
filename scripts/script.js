// Navigation
const navigation = document.querySelector('#navigation');
const hamburger = document.getElementById("hamburger");
const svg = document.querySelector("svg");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("appear");
});


