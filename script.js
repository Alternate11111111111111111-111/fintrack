let form = document.querySelector("form")
let username = document.querySelector(".usr")
let password = document.querySelector(".pass")


if (username.trim() === "" &&  password.trim() === "" ) {
    alert("Enter valid details.")
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
})