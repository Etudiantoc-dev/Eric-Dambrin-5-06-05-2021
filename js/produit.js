//Récuperation de la chaîne de requête dans l'url//
const queryString_url_id = window.location.search;  // javascript 76
console.log(queryString_url_id);



const urlSearchParams = new URLSearchParams(queryString_url_id);  // javascript 77
console.log(urlSearchParams);

const id = urlSearchParams.get("id");
console.log(id);

console.log(cameras); //Affichage de l'id sélectionné dans la console
let getOneCamera = cameras.find((camera) => camera._id === id);
console.log(getOneCamera);





  


    

   











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

    




