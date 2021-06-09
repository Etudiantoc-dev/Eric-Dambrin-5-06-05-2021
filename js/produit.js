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
    //RÉCUPÉRATIONS DES DONNÉS DE L'UTILISATEUR :
    let idForm = document.querySelector("#lentilles");
     console.log(idForm);
     //mettre le choix de l'utilisateur dans une variable :
     
     //sélection du bouton ajouter au panier :
     let btnSelection = document.querySelector("#btn");
     //ecouter le bouton et envoyer au panier :
     btnSelection.addEventListener("click", (event)=>{
       event.preventDefault()
       let choixForm = idForm.value;
       console.log(choixForm)
     })
     //RÉCUPÉRATION DES VALEURS DU FORMULAIRE
     let optionProduit = {
       nom : camera.name,
       prix : camera.price/100,
       id : camera.id,
       lentilles : idForm.value,
       quantite : 1,
}
console.log(optionProduit)
let nombreOptions = camera.lenses
console.log(nombreOptions)
//afficher le bon nombre d'option suivant le produit
for(let i = 0; i<nombreOptions.length ; i++){
  options = nombreOptions[i];
  if(i==0){
    document.querySelector("#lentilles").innerHTML += camera.displayProduit()
    // console.log()
  }
}

})
//PANIER :


//ID DU FORMULAIRE :



    
   

    
// fetch('http://localhost:3000/api/cameras/')
//     .then(response => response.json())
//     .then(jsonListLenses=>{
//         console.log(jsonListLenses);
//         jsonListLenses.forEach ( element, index => {
//             let camera = new Camera(element);
//             if(index <= 3){
//                 document.querySelector(".options").innerHTML += camera.displayProduit(index);
//             }

            
//         })})
    
        
    
    
    
 

// let produitSelection = document.querySelector(".unproduit");
// console.log(produitSelection)






  


    

   











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

    




