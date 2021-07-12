//----Récupération des ressources sur le réseau et son affichage--------//

fetch('http://localhost:3000/api/cameras')
.then(response => response.json())
.then(jsonListCamera=>{
    // console.log(jsonListCamera);
    jsonListCamera.forEach((element, index) => {
        let appareils = new Camera(element);
        // console.log(appareils)
        if(index < 3){
            let container = document.querySelector(".un_deux_trois");
            container.innerHTML += appareils.displayInList(index+1);  
        }else{
            let container = document.querySelector(".quatre_cinq");
            container.innerHTML += appareils.displayInList(index+1);  
        }
    });
 
})







