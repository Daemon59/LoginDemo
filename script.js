//create a new username and password. 
// put input fields and values.
// save it to localstorage.
// show alert message.
function signUp(){
    const newUsernameIntput = document.getElementById("new-username");
    const newUsername = newUsernameIntput.value;

    const newPasswordInput = document.getElementById("new-password");
    const newPassword = newPasswordInput.value;

    if (newUsername.trim() !== "" && newPassword.trim() !== ""){
        localStorage.setItem("username", newPassword);
        localStorage.setItem("password", newPassword);

        alert("New username has been created!")

        newUsernameIntput.value = "";
        newPasswordInput.value = "";
    } else {
        alert("Please enter valid username and password");
    }
}

// login with the username we created.
// get the input fields and value from signup.
// check if username and password are in localstorage.
// show alert message when its success or error.
// reset the input fields.
function login(){
   const usernameInput = document.getElementById("username");
   const username = usernameInput.value;

   const passwordInput = document.getElementById("password");
   const password = passwordInput.value;

   if (username === localStorage.getItem("username") &&password === localStorage.getItem("password")){
    alert("Welcome" + username + "!")
   } else (
    alert("Invalid username or password!")
   )
}