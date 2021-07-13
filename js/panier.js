//Nouvelle déclaration des produits contenus dans le Local Storage 
let produitsLocalStorage = JSON.parse(localStorage.getItem("produit"));

//.............Affichage produits panier..............//

const positionElement = document.querySelector("#produitChoisi");

positionElement.innerHTML = genererContenuPanier(produitsLocalStorage);



//Déclaration de la variable "form" pour la sélection du formulaire
let form = document.querySelector(".champ_a_remplir");

// Écoute de la valeur écrite dans le champs de l'Email par l'utilisateur
form.email.addEventListener('change', (e) => {

    validEmail(e.target.value); // l'élément 'target' déclenche l'évènement à sa juste valeur 'value'

});


//--------------Récupération des prix des produits contenus dans le panier-------//



//Ecoute au click du bouton de toutes les valeurs des champs pour valider le formulaire

bouton.addEventListener("click", (e) => {
    e.preventDefault();
    if (verifFormulaire() == false) {
        return false
    }


    //--------------Récupération des donnés du formulaire ----------------------//

    const contact = creerUserCommande()



    //----------------Mettre les donnés du formulaire dans le localStorage-------------
    localStorage.setItem("newUser", JSON.stringify(contact));

    let products = []; // Array de style product_id exigé par le cahier des charges
    produitsLocalStorage.forEach(produit => products.push(produit.id));

    // -----création de la variable contenant les produits du panier et les infos du formulaires--------
    let infosServeur = {
        contact,
        products // Si pas de S à PRODUCT le ID de la commande n'est pas défini???
    }


    // --------Envoi des informations du panier avec la méthode Post vers le serveur-------//

    fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(infosServeur),
        headers: { "Content-type": "application/json; charset=UTF-8" },

    })

        .then(response => response.json())
        .then(contenu => {
            localStorage.setItem("orderId", contenu.orderId); //id de la commande dans le local storage
            localStorage.setItem('prixDeLaCommande', calculerPrixTotal(produitsLocalStorage));//resultat prix de la commande
            window.location = "confirmation_commande.html";// Pour aller sur la page confirmation commande :
        })

        .catch(err => {

            console.log(err)
        })



})
/**
 * 
 * @param {Array} panier  : Tableau de produits
 * @returns String : Element HTML à insérer
 */

function genererContenuPanier(panier) {
    //Si le panier est vide : afficher panier vide :
    if (panier === null) {
        const panierVide = `<div class="container_panier_vide">Le panier est vide</div>`;
        return panierVide;

    }
    let htmlElements = "";
    for (i = 0; i < panier.length; i++) {
        htmlElements +=
            `<div class="choixProduit">
        <class="image_choix_produit"><img src="${panier[i].image}">
        <h5 class="name">${panier[i].nom}</h5> <div class="prix_produit_panier">${panier[i].prix} €</div>
        <p class="lentilles">Taille de la lentille : ${panier[i].lentilles} </p></div>`
    }
    return htmlElements


}
/**
 * 
 * @param {String} inputEmail 
 * @returns boolean
 */

// Validation de l'Email selon une expression régulière
function validEmail(inputEmail) {
    let emailRegExp =
        /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/

    let testEmail = emailRegExp.test(inputEmail);

    if (testEmail == true) {
        document.querySelector('small').innerHTML = ''

    } else {
        document.querySelector('small').innerHTML = 'Format Email inconnu'
        document.querySelector('small').style.color = 'red'
    }
    return testEmail
}


function validFormat(input) {

    if (input.value.trim() == '') {
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

function verifFormulaire() {

    if (!validEmail(form.email.value)) {

        return false
    }
    let isOk = true;
    Array.from(form.querySelectorAll('input[type="text"')).forEach(elt => {

        if (!validFormat(elt)) {

            isOk = false;
        }

    })
    return isOk
}

function creerUserCommande() {// Nom objet "contact" et nom des champs exigés par le cahier des charges par rapport au backend
    return {
        lastName: document.querySelector("#lastName").value,
        firstName: document.querySelector("#firstName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value

    }
}
function calculerPrixTotal(panier) {
    let total = 0;
    panier.forEach(produit => {
        total += produit.prix;
    });
    return total;
}












































