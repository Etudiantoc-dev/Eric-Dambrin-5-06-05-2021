//Nouvelle déclaration de la même variable(=produit.js) pour récupérer des informations du produit selectionné envoyé dans le local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

//.............Affichage produits panier..............//

const positionElement = document.querySelector("#produitChoisi");

let structureProduitPanier = []

//Si le panier est vide : afficher panier vide :
if (produitLocalStorage === null) {
    const panierVide = `<div class="container_panier_vide">Le panier est vide</div>`;
    positionElement.innerHTML = panierVide;


} else {

    for (i = 0; i < produitLocalStorage.length; i++) {


        structureProduitPanier +=
            `<div class="choixProduit">
        <class="image_choix_produit"><img src="${produitLocalStorage[i].image}">
        <h5 class="name">${produitLocalStorage[i].nom}</h5> <div class="prixProduit">${produitLocalStorage[i].prix} €</div>
        <p class="lentilles">Taille de la lentille : ${produitLocalStorage[i].lentilles} </p></div>`


    }//Pour afficher autant de produit que l'on veut dans le panier :
    if (i == produitLocalStorage.length) {
        positionElement.innerHTML = structureProduitPanier;
    }

}


//Déclaration de la variable "form" pour la sélection du formulaire
let form = document.querySelector(".champ_a_remplir");

// Écoute de la valeur écrite dans le champs de l'Email par l'utilisateur
form.email.addEventListener('change', (e) => {

    validEmail(e.target.value);// l'élément 'target' déclenche l'évènement à sa juste valeur 'value'
    // Demander plus d'explications...??
    //POURQUOI VALIDFORMAT N'EST PAS DANS L'ECOUTE???
});
// Validation de l'Email selon une expression régulière
const validEmail = function (inputEmail) {
    let emailRegExp =
        /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/

    let testEmail = emailRegExp.test(inputEmail);

    if (testEmail == true) {
        document.querySelector('small').innerHTML = 'Ok'
        document.querySelector('small').style.color = 'black'
    } else {
        document.querySelector('small').innerHTML = 'Format Email inconnu'
        document.querySelector('small').style.color = 'red'
    }
    return testEmail
}


const validFormat = function (input) {

    if (input.value.trim() === '') {
        //trim permet de prendre en compte lorsque l'on fait une barre espace que ce n'est pas une valeur inscrite dans le champs au même titre qu'une lettre..

        //parentNode permet de dire si le format est bon ou pas SOUS le champs concerné
        input.parentNode.querySelector(".format").innerHTML = "Champ manquant"
        input.parentNode.querySelector(".format").style.color = "red"
        return false; //Cela empêche d'enlever "Champ manquant" quand on le rempli??
    } else {
        input.parentNode.querySelector(".format").innerHTML = ""
    }
    return true;
}
//--------------Récupération des prix des produits contenus dans le panier-------//
    
let prixDeLaCommande = [];
for (i = 0; i < produitLocalStorage.length; i++) {

    prixDeLaCommande.push(produitLocalStorage[i].prix)
console.log(prixDeLaCommande);
   
}
// Addition pour obtenir prix total du panier avec la méthode reduce :
const prixTotal = (accumulator, currentValue) => accumulator + currentValue
console.log(prixDeLaCommande.reduce(prixTotal));


//Ecoute au click du bouton de toutes les valeurs des champs pour valider le formulaire
bouton.addEventListener("click", (e) => {
    e.preventDefault();
    let form = document.querySelector(".champ_a_remplir");
    if (!validEmail(form.email.value)) {
        // alert("erreur email");
        return false
    }
    let isOk = true;
    Array.from(form.querySelectorAll('input[type="text"')).forEach(elt => {

        if (!validFormat(elt)) {

            // alert("Le champ " + elt.placeholder + " est vide")
            // input.parentNode.querySelector(".format").innerHTML = "Champ manquant"
            // input.parentNode.querySelector(".format").style.color = "red"
            isOk = false;
        }

    })
    if (!isOk) {
        return false
    }
    

    
    //--------------Récupération des donnés du formulaire ----------------------//

    const contact = { // Nom objet "contact" et nom des champs exigés par le cahier des charges

        lastName: document.querySelector("#lastName").value,
        firstName: document.querySelector("#firstName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }
    //----------------Mettre les donnés du formulaire dans le localStorage-------------
    localStorage.setItem("newUser", JSON.stringify(contact));

    let products = []; // Array de style product_id exigé par le cahier des charge
    produitLocalStorage.forEach(produit => products.push(produit.id));

    // -----création de la variable contenant les produits du panier et les infos du formulaires--------
    let infosServeur = {
        contact,
        products // Si pas de S à PRODUCT le ID de la commande n'est pas défini???
    }

    // --------Envoi des informations du panier avec la méthode Post vers le serveur-------//

    const promiseCommande = fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(infosServeur),
        headers: { "Content-type": "application/json; charset=UTF-8" },

    })


    promiseCommande.then(async (response) => {
        try {

            const contenu = await response.json();
            console.log(contenu)
            localStorage.setItem("orderId", contenu.orderId) //id de la commande dans le local storage
            localStorage.setItem('prixDeLaCommande', prixDeLaCommande.reduce(prixTotal));//resultat prix de la commande
        }
        catch (err) {

            console.log(err)
        }
        
    })


    // Pour aller sur la page confirmation commande :

    window.location = "confirmation commande.html";





    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(err => console.log(err));


})








































