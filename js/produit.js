//Récuperation de la chaîne de requête dans l'url//
const queryString_url_id = window.location.search;  
console.log(queryString_url_id);



const urlSearchParams = new URLSearchParams(queryString_url_id);  
console.log(urlSearchParams);//affichage parametres

const id = urlSearchParams.get("id");//affichage ID sans le ?
console.log(id);


fetch('http://localhost:3000/api/cameras/' + id)
.then(response => response.json())
.then(item=>{
    // console.log(item);
    let camera = new Camera(item)
    document.querySelector(".unproduit").innerHTML += camera.displayProduit();
    //document.getElementById('lentilles').innerHTML = camera.displayLenses();
    
    //RÉCUPÉRATIONS DES DONNÉS DE L'UTILISATEUR :
    let idForm = document.querySelector("#lentilles");
    console.log(idForm);
     let idImg = document.querySelector(".appareilProduit");
     console.log(idImg);
     
     //sélection du bouton ajouter au panier :
     let btnSelection = document.querySelector("#btn");
     let optionProduit = {
      nom : camera.name,
      prix : camera.price/100,
      id : camera.id,
      lentilles : idForm.value, //choixForm ne marche pas??
      quantite : 1,
}
     //ecouter le bouton et envoyer au panier :
     btnSelection.addEventListener("click", (event)=>{
       event.preventDefault()
       let choixForm = (idForm.value);
       let choixProduit = (optionProduit)
       
       console.log(choixForm,choixProduit);
       localStorage.setItem("item",100)// Voir comment définir mon objet et l'enregistrer en local storage puis 
       // visualiser l'objet dans le panier après avoir appuyé sur le lien panier
        return(alert("La sélection est enregistré dans votre panier !"));
        
     })
     
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


})




    
   

    

    
        
    
    
    
 








  


    

   











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

    




