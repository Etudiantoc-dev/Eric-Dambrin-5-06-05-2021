const queryString_url_id = window.location.search;//----Récuperation de la chaîne de requête dans l'url après le ?
const urlSearchParams = new URLSearchParams(queryString_url_id);//----Extraction des paramètres
const id = urlSearchParams.get("id");//-----Extraction du paramètre ID

fetch('http://localhost:3000/api/cameras/' + id)
  .then(response => response.json())
  .then(objet => {
    camera = new Camera(objet)
    // console.log(item)
    document.querySelector(".unproduit").innerHTML += camera.displayProduit();
                   
                  //.....................LOCAL STORAGE.....................//
     let idForm = document.querySelector("#lentilles");//---Déclaration de la variable idForm
     let btnSelection = document.querySelector("#btn");//déclaration du bouton ajouter au panier

    btnSelection.addEventListener("click", (event) => {//  Ecouter le bouton et envoyer au panier :
      event.preventDefault()

      addToLocalStorage(camera, idForm.value)

    })
  }) .catch(() =>{ //Si une erreur survient au niveau du serveur
    document.querySelector(".unproduit").innerHTML = `<h1> Désolé, une erreur est survenue, veuillez réessayer plus tard, merci! </h1>`;
    document.querySelector('.unproduit h1').style.color = 'red';
    document.querySelector('#container h1').style.textAlign = 'center';
  })

  function addToLocalStorage(camera, lens) {
  let produitLocalStorage = localStorage.getItem("produit") ? JSON.parse(localStorage.getItem("produit")) : [] //Condition ternaire
  //JSON.parse = conversion format JSON en objet javascript
 
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

  if (produitLocalStorage) {
    produitLocalStorage.push(optionProduit);
    localStorage.setItem("produit", JSON.stringify(produitLocalStorage))

    return (alert("La sélection a été ajouté à votre panier !"));
  }
}





