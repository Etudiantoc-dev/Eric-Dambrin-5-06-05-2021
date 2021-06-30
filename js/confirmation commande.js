//----récupération de l'id du serveur et du prix de la commande dans le local storage---//

let orderId = localStorage.getItem("orderId")
let prixDeLaCommande = localStorage.getItem("prixDeLaCommande");


//-----------Affichage des infos sur la page---------// 

const affichageCommande = document.querySelector("#container_commande").innerHTML += `<div class="articles"><h3>Merci pour votre commande !</h3>
<h4>Nous vous confirmons votre commande numéro: ${orderId}</h4>
<h4>Le montant est de : ${prixDeLaCommande} €uros.</h4> </div>`;



