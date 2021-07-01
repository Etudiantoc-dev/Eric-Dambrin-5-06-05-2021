
// let idForm = null;  // Est-ce que ces déclaration sont nécessaires??
// let camera = null;

//----Récuperation de la chaîne de requête dans l'url----//

const queryString_url_id = window.location.search;

//----affichage des paramètres---//

const urlSearchParams = new URLSearchParams(queryString_url_id);

//-----affichage de l'ID sans le ?----//
const id = urlSearchParams.get("id");


fetch('http://localhost:3000/api/cameras/' + id)
  .then(response => response.json())
  .then(item => {
    camera = new Camera(item)
    document.querySelector(".unproduit").innerHTML += camera.displayProduit();


    //---Déclaration de variables pour la récupération des donnés sélectionnés de l'utilisateur
    // et déclaration du bouton ajouter au panier---//

    idForm = document.querySelector("#lentilles");
    console.log(idForm);
    let idImg = document.querySelector(".appareilProduit");
    console.log(idImg);
    let btnSelection = document.querySelector("#btn");

                      //.....................LOCAL STORAGE.....................//

    //  Ecouter le bouton et envoyer au panier :
    btnSelection.addEventListener("click", (event) => {
      event.preventDefault()
      //Déclaration de cette varaible dans laquelle on met les key et les values du local storage
      //JSON.parse c'est pour convertir les données format JSON qui sont dans le local storage en objet javascript
      let produitLocalStorage = localStorage.getItem("produit") ? JSON.parse(localStorage.getItem("produit")): [] //Condition ternaire

      //Déclaration de cette variable représentant un tableau des informations tirés de la class Cameras
      let optionProduit = {
        image: camera.imageUrl,
        nom: camera.name,
        prix: camera.price / 100,
        description: camera.description,
        id: camera.id,
        lentilles: idForm.value,
        quantite: 1
      }
       // Cette condition permet d'obtenir le nombre d'objet que l'on veut dans le local storage
      
       // S'il y a dejà des produits enregistrés dans le local storage
      if (produitLocalStorage) {
        produitLocalStorage.push(optionProduit);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage))
        
        return (confirm("Voulez-vous que La sélection soit enregistré dans votre panier ?"));
      }
      //S'il n'y a pas de produits enregistrés dans le local storage
      // else {
      //   produitLocalStorage = [] // J'ai l'impression que ce ELSE ne sert à rien???
      //   produitLocalStorage.push(optionProduit);
      //   localStorage.setItem("produit", JSON.stringify(produitLocalStorage))
      //   return (confirm("Voulez-vous que La sélection soit enregistré dans votre panier ?"));
      // }
    })
  })







