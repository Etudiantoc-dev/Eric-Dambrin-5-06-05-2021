
let idForm = null;
let camera = null;

//Récuperation de la chaîne de requête dans l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);



const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);//affichage parametres

const id = urlSearchParams.get("id");//affichage ID sans le ?
console.log(id);


fetch('http://localhost:3000/api/cameras/' + id)
  .then(response => response.json())
  .then(item => {
    // console.log(item);
    camera = new Camera(item)
    document.querySelector(".unproduit").innerHTML += camera.displayProduit();


    //RÉCUPÉRATIONS DES DONNÉS DE L'UTILISATEUR :
    idForm = document.querySelector("#lentilles");
    console.log(idForm);
    let idImg = document.querySelector(".appareilProduit");
    console.log(idImg);

    //  sélection du bouton ajouter au panier :
    let btnSelection = document.querySelector("#btn");
    // affichage du produit choisi sur la page produit:



    //.....................LOCAL STORAGE.....................//
    //  ecouter le bouton et envoyer au panier :
    btnSelection.addEventListener("click", (event) => {
      event.preventDefault()
      //DECLARATION DE LA VARIABLE "produitLocalStorage" dans laquelle on met les key et les values qui sont dans le local storage
      let produitLocalStorage = localStorage.getItem("produit") ? JSON.parse(localStorage.getItem("produit")) : [];

      //.. JSON.parse c'est pour convertir les données format JSON qui sont dans le local storage en objet javascript
      let optionProduit = {
        image: camera.imageUrl,
        nom: camera.name,
        prix: camera.price / 100,
        description: camera.description,
        id: camera.id,
        lentilles: idForm.value,
        quantite: 1
      }
      // S'il y a dejà des produits enregistrés dans le local storage
      if (produitLocalStorage) {
        produitLocalStorage.push(optionProduit);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage))
        console.log(produitLocalStorage)


        return (confirm("Voulez-vous que La sélection soit enregistré dans votre panier ?"));
      }
      //S'il n'y a pas de produit enregistré dans le local storage
      else {
        produitLocalStorage = []
        console.log(produitLocalStorage);
        produitLocalStorage.push(optionProduit);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage))
        return (confirm("Voulez-vous que La sélection soit enregistré dans votre panier ?"));
      }
    })
  })

    //  })













    //    let choixForm = (idForm.value);
    //    let choixProduit = (optionProduit);

    //    console.log(choixForm,choixProduit);
    //    localStorage.setItem(choixForm,choixProduit)// Voir comment définir mon objet et l'enregistrer en local storage puis 
    //    // visualiser l'objet dans le panier après avoir appuyé sur le lien panier
    //     return(alert("La sélection est enregistré dans votre panier !"));





     //  RÉCUPÉRATION DES VALEURS DU FORMULAIRE

// console.log(optionProduit)
// let nombreOptions = camera.lenses
// console.log(nombreOptions)

//afficher le bon nombre d'option suivant le produit

// for(let i = 0; i<nombreOptions.length ; i++){
//   options = nombreOptions[i];
//   if(options==0 ||options==1 ||options==2){
//     document.querySelector("#lentilles").innerHTML += camera.displayProduit()

//   }else{
//     document.querySelector("#lentilles").innerHTML += camera.displayProduit("")
//   }
// }











































//     fetch('http://localhost:3000/api/cameras?id=${this.id}' )
// .then(data => data.json())
// .then(jsonListCamera=>{
//     console.log(jsonListCamera);
//     jsonListCamera.forEach((element, index) => {
//         let appareil = new Camera(element);
//         if(index == [0]){
//             let container = document.querySelector(".unproduit");
//             container.innerHTML += appareil.displayInList(); 

//         }else if (index == [1] || index==this.id){
//             let container = document.querySelector(".unproduit");
//             container.innerHTML += appareil.displayInList();

//         }else if (index == [2]){
//             let container = document.querySelector(".unproduit");
//             container.innerHTML += appareil.displayInList();
//         }else{
//             let container = document.querySelector(".unproduit");
//             container.innerHTML += undefined 
//     }});

// })






