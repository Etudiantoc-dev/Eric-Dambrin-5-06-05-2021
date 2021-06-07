
fetch('http://localhost:3000/api/cameras')
.then(response => response.json())
.then(jsonListCamera=>{
    console.log(jsonListCamera);
    jsonListCamera.forEach((element, index) => {
        let appareils = new Camera(element);
        if(index < 3){
            let container = document.querySelector(".un_deux_trois");
            container.innerHTML += appareils.displayInList(index+1);  
        }else{
            let container = document.querySelector(".quatre_cinq");
            container.innerHTML += appareils.displayInList(index+1);  
        }
    });
    // let liens= document.querySelectorAll("a.external")

    // for(let i= 0 ; i < liens.length ; i++){
    //      let lien = liens[i]
    //  lien.addEventListener('click', function () {
    //     if(lien == _id)
    //     let container_page_produit = document.querySelector(".unproduit ");
    //     container_page_produit.innerHTML += appareil.displayInList(index); 
    //  })
        
    

    // }
   
  
})







