let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");
let alert = document.getElementById("alert");

function checkPassword () {
    alert.innerText = password.value == confirmPassword.value ? 
    "" : "Passwords don't match"
}

password.addEventListener("keyup", () => {
    if (confirmPassword.value.length != 0) checkPassword();
})

confirmPassword.addEventListener("keyup", checkPassword);