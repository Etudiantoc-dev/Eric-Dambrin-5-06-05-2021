
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
      //Déclaration de cette variable dans laquelle on met les key et les values du local storage
      //JSON.parse c'est pour convertir les données format JSON qui sont dans le local storage en objet javascript
      addToLocalStorage(camera, idForm.value)

      // J'ai l'impression que ce ELSE ne sert à rien??? :

      //S'il n'y a pas de produits enregistrés dans le local storage
      // else {
      //   produitLocalStorage = [] 
      //   produitLocalStorage.push(optionProduit);
      //   localStorage.setItem("produit", JSON.stringify(produitLocalStorage))
      //   return (confirm("Voulez-vous que La sélection soit enregistré dans votre panier ?"));
      // }
    })
  })

function addToLocalStorage(camera, lens ){
  let produitLocalStorage = localStorage.getItem("produit") ? JSON.parse(localStorage.getItem("produit")): [] //Condition ternaire

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
   // Cette condition permet d'obtenir le nombre d'objet que l'on veut dans le local storage
  
   // S'il y a dejà des produits enregistrés dans le local storage
  if (produitLocalStorage) {
    produitLocalStorage.push(optionProduit);
    localStorage.setItem("produit", JSON.stringify(produitLocalStorage))
    
    return (alert("La sélection a été ajouté à votre panier !"));
  }
}





