// set storage
if (localStorage.length < 3) {
    localStorage.setItem("Prénom de l'enfant", "");
    localStorage.setItem("Nombre badge", 0);
    localStorage.setItem("Score", 0);
    localStorage.setItem("Dora", 0);  
    localStorage.setItem("Totally Spies", 0); 
} 

var varNom = document.querySelector("#varNOM"),
    varBADGES = document.querySelector("#varBADGES"),
    varSCORE = document.querySelector("#varSCORE");

varNom.innerHTML = localStorage.getItem("Prénom de l'enfant");
varBADGES.innerHTML = localStorage.getItem("Nombre badge");
varSCORE.innerHTML = localStorage.getItem("Score");


// premier pop up 
var popup1nom = document.querySelector("#popup1nom"),
    buttonNom = document.querySelector("#buttonNom"),
    popup1 = document.querySelector(".pu1")
    nom = localStorage.getItem("Prénom de l'enfant");    

    if (localStorage.getItem("Prénom de l'enfant").length > 0) {
        popup1.classList.add("d-none")
    }

var setNom = () => {
    buttonNom.addEventListener("click", () => {
        let nom = popup1nom.value;
        localStorage.setItem("Prénom de l'enfant", nom);
        varNom.innerHTML = localStorage.getItem("Prénom de l'enfant");
        popup1.classList.add("d-none")
    })
}

setNom()

// deuxieme pop up 
var popup2nom = document.querySelector("#popup2nom"),
    valid = document.querySelector("#changeButton"),
    popup2 = document.querySelector(".pu2"),
    button2 = document.querySelector(".changeNom");

var openPopup2 = () => {
    button2.addEventListener("click", () => {
        popup2.classList.remove("d-none")
    })
}
    
var changeNom = () => {
    valid.addEventListener("click", () => {
        let nom = popup2nom.value;
        localStorage.setItem("Prénom de l'enfant", nom);
        varNom.innerHTML = localStorage.getItem("Prénom de l'enfant");
        popup2.classList.add("d-none")
    })
}

openPopup2()
changeNom()

// clear storage 
var copyright = document.querySelector("#clearCR");
copyright.addEventListener("click", () => {
    localStorage.clear();
    window.scrollTo(0, 0);
    setTimeout(refresh, 1500);
})

var refresh = () => {
    location.reload()
}