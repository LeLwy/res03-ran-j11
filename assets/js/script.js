let connectInfosForm = document.getElementById("connectInfos");
let connectInfosFormOk = true;

connectInfosForm.addEventListener("submit", function(e){

    e.preventDefault(); // stopper la soumission auto

    let userName = document.querySelector("body > main > section > #connectInfos > fieldset > #userName");
    let userNameSpan = document.createElement("span");
    
    if(userName.value === ""){
        
        let userNameFieldset = document.querySelector("body > main > section > #connectInfos > fieldset:nth-child(1)");
        let userNameError = document.createElement("p");
        let labelUserName = document.querySelector("body > main > section > #connectInfos > fieldset:nth-child(1) > label")
        userName.classList.add("red-border");
        userNameError.innerHTML= "Veuillez choisir un nom d'utilisateur";
        userNameError.classList.add("error-displayed");
        userNameFieldset.appendChild(userNameError);
        userNameSpan.innerHTML = "*";
        userNameSpan.classList.add("redStar");
        labelUserName.appendChild(userNameSpan);
        connectInfosFormOk = false;
    }

    let email = document.querySelector("body > main > section > #connectInfos > fieldset > #email");

    if((email.value === "") && (email.value.indexOf("@", 0) < 0) && (email.value.indexOf(".", 0) < 0)){

        let emailFieldset = document.querySelector("body > main > section > #connectInfos > fieldset:nth-child(2)");
        let emailError = document.createElement("p");
        email.classList.add("red-border");
        emailError.innerHTML= "Veuillez choisir un email valide";
        emailError.classList.add("error-displayed");
        emailFieldset.appendChild(emailError);
        connectInfosFormOk = false;
    }  

    let password = document.querySelector("body > main > section > #connectInfos > fieldset > #password");
    let confirmPassword = document.querySelector("body > main > section > #connectInfos > fieldset > #confirm-password");

    if(password.value !== confirmPassword.value){

        let passwordFieldset = document.querySelector("body > main > section > #connectInfos > fieldset:nth-child(4)");
        let passwordError = document.createElement("p");
        password.classList.add("red-border");
        confirmPassword.classList.add("red-border");
        passwordError.innerHTML= "Les mots de passe ne corespondent pas";
        passwordError.classList.add("error-displayed");
        passwordFieldset.appendChild(passwordError);
        connectInfosFormOk = false;
    }

    // if(connectInfosFormOk = true){

    //     e.target.submit(); // le soumettre Ã  la main
    // }
})


let profilProForm = document.getElementById("profilPro");
let profilProFormOk = true;

    profilProForm.addEventListener("submit", function(e){

        e.preventDefault();

        let profilProFormGradeInputs = this.querySelectorAll("body > main > section > #profilPro > div#grade-inputs > fieldset > input");
        let profilProFormDevInputs = this.querySelectorAll("body > main > section > #profilPro > div#dev-inputs > fieldset > input");

        
    })






