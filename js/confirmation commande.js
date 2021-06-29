//récupération de l'id du serveur dans le local storage :

let orderId = localStorage.getItem("orderId")
console.log(`idCommande : ${orderId}`);


//recupération du prix de la commande :
let prixDeLaCommande = localStorage.getItem("prixDeLaCommande");

//Affichage des infos sur la page :

   //------Sélection DOM pour position structure-------
const affichageCommande = document.querySelector("#container_commande").innerHTML +=`<div class="articles"><h3>Merci pour votre commande !</h3>
<h4>Nous vous confirmons votre commande avec le numéro suivant : ${orderId}</h4>
<h4>Le montant est de : ${prixDeLaCommande} €uros.</h4> </div>`;



