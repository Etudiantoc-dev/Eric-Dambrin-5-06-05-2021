//Récuperation de la chaîne de requête dans l'url
const commande_id = localStorage.getItem()
console.log(commande_id);

//DECLARATION DE nouveau de la variable "produitLocalStorage" dans laquelle on met les key et les values qui sont dans le local storage
// let user = JSON.parse(localStorage.getItem("produit"));
//.. JSON.parse c'est pour convertir les données format JSON qui sont dans le local storage en objet javascript
//  console.log(user);

//  fetch('http://localhost:3000/api/cameras/' + id)
//   .then(response => response.json())
//   .then(item => {
//     // console.log(item);
//     camera = new Camera(item)
//     document.querySelector(".articles").innerHTML += camera.displayProduit();
//   })