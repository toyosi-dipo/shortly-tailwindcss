const form = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");
const linkInput = document.getElementById("link-input");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");

form.addEventListener("submit", formHandler);
menuBtn.addEventListener("click", toggleMenu);

// Toggle Menu
function toggleMenu() {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formHandler(e) {
  e.preventDefault();

  const inputUrl = linkInput.value;
  if (inputUrl === "") {
    errMsg.textContent = "Please, enter a valid url...";
    linkInput.classList.add("border-red");
  } else if (!validURL(inputUrl)) {
    errMsg.textContent = "Input url not valid";
    linkInput.classList.add("border-red");
  } else {
    errMsg.textContent = "";
    linkInput.classList.remove("border-red");
    alert("Success");
  }
}
