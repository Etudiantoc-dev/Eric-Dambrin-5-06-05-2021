let produitsLocalStorage = JSON.parse(localStorage.getItem("produit"));//Nouvelle déclaration des produits contenus dans le Local Storage 
const positionElement = document.querySelector("#produitChoisi");
positionElement.innerHTML = genererContenuPanier(produitsLocalStorage);//Affichage produits panier

let form = document.querySelector(".champ_a_remplir");//Déclaration de la variable "form" pour la sélection du formulaire

form.email.addEventListener('change', (e) => {// Écoute de la valeur écrite dans le champs de l'Email par l'utilisateur
    validEmail(e.target.value);
});

bouton.addEventListener("click", (e) => {//Ecoute au click du bouton de toutes les valeurs des champs pour valider le formulaire
    e.preventDefault();
    if (verifFormulaire() == false) {
        return false
    }

    //----------------Mettre les donnés du formulaire dans le localStorage-------------
    const contact = creerUserCommande()
    localStorage.setItem("newUser", JSON.stringify(contact));

    let products = []; // Array de style product_id exigé par le cahier des charges
    produitsLocalStorage.forEach(produit => products.push(produit.id));

    let infosServeur = {//création de la variable contenant les produits du panier et les infos du formulaires
        contact,
        products
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
            window.location = "confirmation_commande.html";// Envoi vars la page confirmation commande :
        })
        .catch(error => {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        })
})
/**
 * 
 * @param {Array} panier  : Tableau de produits
 * @returns String : Element HTML à insérer
 */

function genererContenuPanier(panier) {
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
 * @param {String} inputEmail : expression régulière de l'Email
 * @returns boolean
 */


function validEmail(inputEmail) { // Validation de l'Email selon une expression régulière
    let emailRegExp =
        /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/
    let testEmail = emailRegExp.test(inputEmail);

    if (testEmail == true) {
        document.querySelector('small').innerHTML = ''

    } else {
        document.querySelector('small').innerHTML = 'Format Email inconnu';
        document.querySelector('small').style.color = 'red';
    }
    return testEmail
}


function validFormat(input) {
    if (input.value.trim() == '') {

        //parentNode permet de cibler la classe concerné par l'instruction
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












































