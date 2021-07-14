
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
    // console.log(item)
    document.querySelector(".unproduit").innerHTML += camera.displayProduit();

    //.....................LOCAL STORAGE.....................//

    //---Déclaration de la variable idForm 
    let idForm = document.querySelector("#lentilles");

    //déclaration du bouton ajouter au panier
    let btnSelection = document.querySelector("#btn");

    //  Ecouter le bouton et envoyer au panier :
    btnSelection.addEventListener("click", (event) => {
      event.preventDefault()

      addToLocalStorage(camera, idForm.value)

    })
  }) .catch(() =>{ //Si une erreur survient au niveau du serveur
    document.querySelector(".unproduit").innerHTML = `<h1> Désolé, une erreur est survenue, veuillez réessayer plus tard, merci! </h1>`;
    document.querySelector('.unproduit h1').style.color = 'red';
    document.querySelector('#container h1').style.textAlign = 'center';
  })

  function addToLocalStorage(camera, lens) {//Déclaration de cette fonction dans laquelle on met les key et les values du local storage
  //JSON.parse c'est pour convertir les données format JSON qui sont dans le local storage en objet javascript
  let produitLocalStorage = localStorage.getItem("produit") ? JSON.parse(localStorage.getItem("produit")) : [] //Condition ternaire

  //Déclaration de cette variable représentant un tableau des informations tirés de la class Cameras
  let optionProduit = {
    image: camera.imageUrl,
    nom: camera.name,
    prix: camera.price / 100,
    description: camera.description,
    id: camera.id,
    lentilles: lens,
    quantite: 1
  }

  // S'il y a dejà des produits enregistrés dans le local storage
  if (produitLocalStorage) {
    produitLocalStorage.push(optionProduit);
    localStorage.setItem("produit", JSON.stringify(produitLocalStorage))

    return (alert("La sélection a été ajouté à votre panier !"));
  }
}





