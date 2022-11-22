let sections = document.querySelectorAll("body > main > section");
//let forms = document.querySelectorAll("body > main > section > form");
//let inputs = document.querySelectorAll("body > main > section > form input")
//let subBtn = document.querySelectorAll("body > main > section > form > .subBtn");

// RECUPERATION DES FORMULAIRES

let connectInfosForm = document.getElementById("connectInfos");
let profilProForm = document.getElementById("profilPro");
let intCenterForm = document.getElementById("intCenter");

//RECUPERATION DES INPUTS SUBMIT POUR CHAQUE FORMULAIRE

// RECUPERATION DES INPUTS PASSWORD

let connectInfosFormOK = true;

connectInfosForm.addEventListener("submit", function(e){

    e.preventDefault(); // stopper la soumission auto

    let userName = document.querySelector("body > main > section > #connectInfos > fieldset > #userName");
    
    if(userName.value === ""){
        
        let userNameFieldset = document.querySelector("body > main > section > #connectInfos > fieldset:nth-child(1)");
        let userNameError = document.createElement("p");
        userName.classList.add("red-border");
        userNameError.innerHTML= "Veuillez choisir un nom d'utilisateur";
        userNameError.classList.add("error-displayed");
        userNameFieldset.appendChild(userNameError)
        connectInfosFormOK = false;
        console.log(connectInfosFormOK)
    }

    let email = document.querySelector("body > main > section > #connectInfos > fieldset > #email");

    if((email.value === "") && (email.value.indexOf("@", 0) < 0) && (email.value.indexOf(".", 0) < 0)){

        let emailFieldset = document.querySelector("body > main > section > #connectInfos > fieldset:nth-child(2)");
        let emailError = document.createElement("p");
        emailError.innerHTML= "Veuillez choisir un email valide";
        emailError.classList.add("error-displayed");
        emailFieldset.appendChild(emailError);
        connectInfosFormOK = false;
    }  

    let password = document.querySelector("body > main > section > #connectInfos > fieldset > #password");
    let confirmPassword = document.querySelector("body > main > section > #connectInfos > fieldset > #confirm-password");

    if(password.value !== confirmPassword.value){

        let passwordFieldset = document.querySelector("body > main > section > #connectInfos > fieldset:nth-child(4)");
        let passwordError = document.createElement("p");
        passwordError.innerHTML= "Les mots de passe ne corespondent pas";
        passwordError.classList.add("error-displayed");
        passwordFieldset.appendChild(passwordError);
        connectInfosFormOK = false;
    }

    // if(connectInfosFormOK = true){

    //     e.target.submit(); // le soumettre Ã  la main
    // }
})








