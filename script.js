let slidetElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");


const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let novaSenha = "";

sizePassword.innerHTML = slidetElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function gerarPassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < slider.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
  console.log(novaSenha);
}
function copyPassword() {
  console.log(novaSenha);
  navigator.clipboard.writeText(novaSenha);
}
