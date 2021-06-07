//Récuperation de la chaîne de requête dans l'url//
const queryString_url_id = window.location.search;  
console.log(queryString_url_id);



const urlSearchParams = new URLSearchParams(queryString_url_id);  
console.log(urlSearchParams);//affichage parametres

const id = urlSearchParams.get("id");//affichage ID sans le ?
console.log(id);

console.log(cameras); //Affichage de l'id sélectionné 
let getOneCamera = cameras.find((camera) => camera._id === id);
console.log(getOneCamera);

fetch('http://localhost:3000/api/cameras')
.then(response => response.json())
.then(jsonListCamera=>{
    console.log(jsonListCamera);
    jsonListCamera.forEach((element, index) => {
        let appareil = new Camera(element);
        if(index == id){
            let container_page_produit = document.querySelector(".unproduit");
            container_page_produit.innerHTML += appareil.displayInList(index);  
        }else(index != id);{
               console.log('error')
        }
           
    
    })})

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

    




