
    //DECLARATION DE LA VARIABLE "produitLocalStorage" dans laquelle on met les key et les values qui sont dans le local storage
    let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
    //.. JSON.parse c'est pour convertir les données format JSON qui sont dans le local storage en objet javascript
     console.log(produitLocalStorage);


     //.............Affichage produits panier..............//
     //
     const positionElement = document.querySelector("#produitChoisi");
     console.log(positionElement)
     let structureProduitPanier = []
     //Si le panier est vide : afficher panier vide :
     
     if(produitLocalStorage === null){
         const panierVide =`<div class="container_panier_vide">Le panier est vide</div>`;
         positionElement.innerHTML = panierVide;
         

     }else{
         
         for(i=0 ; i<produitLocalStorage.length;i++){
             
            structureProduitPanier = structureProduitPanier +
            `<div class="choixProduit">
        <class="image_choix_produit"><img src="${produitLocalStorage[i].image}">
        <h5 class="name">${produitLocalStorage[i].nom}</h5> <div class="prixProduit">${produitLocalStorage[i].prix} €</div>
        <p class="description_produit">${produitLocalStorage[i].description}</p>
        <p class="lentilles">${produitLocalStorage[i].lentilles} </p></div>`
             
             
         }
         
     }
     if (i == produitLocalStorage.length ){ //Pour mettre l'ensemble des produits du panier visible sur la page
        positionElement.innerHTML = structureProduitPanier;
    }
    
    

















// //Récuperation de la chaîne de requête dans l'url//
// const queryString_url_id = window.location.search;  
// console.log(queryString_url_id);



// const urlSearchParams = new URLSearchParams(queryString_url_id);  
// console.log(urlSearchParams);//affichage parametres

// const id = urlSearchParams.get("id");//affichage ID sans le ?
// console.log(id);

// fetch('http://localhost:3000/api/cameras/' )//Ne trouve pas??
// .then(response => response.json())
// .then(item=>{
//     console.log(item);
//     let choixCamera = new Camera(item)
//     document.querySelector("#produitChoisi").innerHTML += choixCamera.displayPanier();
// })









// let formulaire = document.querySelectorAll("#paiement");
// let button = document.querySelector('#coordonnees')

// class coordonnees{
//     constructor(nom){
//         this.nom  =  this.check(nom,2)
//     }
//     get Info(){//méthode
//         //    return 'Nom : ${this.nom} || Prénom : ${this.prenom} || email : ${this.email}'//CELLE-CI NE MARCHE PAS??
//            return "Nom :" + this.nom + "|| Prénom :" + this.prenom +" || Email :" + this.email; //Templates strings 
//         }
//         displayInConsole = () => {
//             console.log(this.Info)
//         }
//         check(target,minLength){
//             if(target==undefined || target.Length< minLength )
//             {
//                 (alert('Les champs ne sont pas remplies !'));
//         }else{
//             return target
//         }
//         }
//     button = addEventListener("click", (event) => {
    
     
    
// })}
// var Eric = new coordonnees("Dambrin", "", "e.dambrin@gmail.com");
// var Aurelien = new coordonnees("Antonio", "Aurélien","aurelien.antonio@gmail.com");



// Eric.displayInConsole();
// Aurelien.displayInConsole();



       
    
        
    
    
    // if(confirm('êtes vous sur ?')){
    //     location.href="index.html"
    //     console.log(confirm)
    // }


// button = function(){
//     if(confirm('êtes vous sur ?')){
//         location.href="index.html"
//     }
// }