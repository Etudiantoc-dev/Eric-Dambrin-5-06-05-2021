


//DECLARATION DE nouveau de la variable "produitLocalStorage" dans laquelle on met les key et les values qui sont dans le local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
//.. JSON.parse c'est pour convertir les données format JSON qui sont dans le local storage en objet javascript



//.............Affichage produits panier..............//
//
const positionElement = document.querySelector("#produitChoisi");

let structureProduitPanier = []

//Si le panier est vide : afficher panier vide :
if (produitLocalStorage === null) {
    const panierVide = `<div class="container_panier_vide">Le panier est vide</div>`;
    positionElement.innerHTML = panierVide;


} else {

    for (i = 0; i < produitLocalStorage.length; i++) {

        structureProduitPanier = structureProduitPanier +
            `<div class="choixProduit">
        <class="image_choix_produit"><img src="${produitLocalStorage[i].image}">
        <h5 class="name">${produitLocalStorage[i].nom}</h5> <div class="prixProduit">${produitLocalStorage[i].prix} €</div>
        <p class="lentilles">Taille de la lentille : ${produitLocalStorage[i].lentilles} </p></div>`


    }
    if (i == produitLocalStorage.length) { //Pour mettre l'ensemble des produits du panier visible sur la page
        positionElement.innerHTML = structureProduitPanier;
    }

}



let form = document.querySelector(".champ_a_remplir");

form.email.addEventListener('change', (e) => {

    validEmail(e.target.value);


});

const validEmail = function (inputEmail) {
    let emailRegExp =
        /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/

    let testEmail = emailRegExp.test(inputEmail);

    if (testEmail == true) {
        document.querySelector('small').innerHTML = 'Adresse valide'
        document.querySelector('small').style.color = 'black'
    } else {
        document.querySelector('small').innerHTML = 'Adresse non valide'
        document.querySelector('small').style.color = 'red'
    }
    return testEmail
}


Array.from(form.querySelectorAll('input[type="text"')).forEach(elt =>{
    elt.addEventListener('focusout', (e) => {
        console.log(e.target.value)
        validFormat(e.target);
    
    })
})

const validFormat = function (input) { 

    if (input.value.trim() === '') {
        //trim permet de prendre en compte lorsque l'on fait une barre espace n'est pas une valeur inscrite..
        console.log(input.parentNode);
        //parentNode permet de dire si le format est bon ou pas sous le champs concerné
        input.parentNode.querySelector(".format").innerHTML = "Format non-valide"
        return false
    } else {
        input.parentNode.querySelector(".format").innerHTML = ""
    }
    return true;
}



bouton.addEventListener("click", (e) => {
    e.preventDefault();
    let form = document.querySelector(".champ_a_remplir");
    if(!validEmail(form.email.value)){
        alert("erreur email");
        return false
    }
    let isOk = true;
    Array.from(form.querySelectorAll('input[type="text"')).forEach(elt =>{
        
            if(!validFormat(elt)){
        // demander si sans les return à la function de validFormat celà fonctionne??
                alert("Le champ " + elt.placeholder + " est vide")
                isOk = false;
            }
        
    })
    if(!isOk){
        return false
    }

    let erreur; // = (let erreur == null ou undefined)
    let inputs = document.getElementsByTagName("input");

    for (i = 0; i < inputs.length; i++) {

        if (!inputs[i].value) {
            e.preventDefault();
            erreur = 'veuillez rentrez tous les champs'

        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur
    } else {
     
        alert('Formulaire enregistré !');

    }
    //--------------Récupération des donnés du formulaire ----------------------

    const contact = {

        lastName: document.querySelector("#lastName").value,
        firstName: document.querySelector("#firstName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }
    //----------------Mettre les donnés du formulaire dans le localStorage-------------
    localStorage.setItem("newUser", JSON.stringify(contact));
    let products = [];
    produitLocalStorage.forEach(produit => products.push(produit.id))
    // -----création de la variable contenant les produits du panier et les infos du formulaires--------
    let infosServeur = {
        contact,
        products
    }
    // --------Envoi des informations du panier avec la méthode Post vers le serveur-------
        console.log(infosServeur);
     fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(infosServeur),
        headers: { "Content-type": "application/json; charset=UTF-8" },
        
    })
    //Pour voir la commande dans la console
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));

        
})






























