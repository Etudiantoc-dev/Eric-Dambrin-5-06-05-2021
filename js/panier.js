
    
    
    //DECLARATION DE nouveau de la variable "produitLocalStorage" dans laquelle on met les key et les values qui sont dans le local storage
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
        <p class="lentilles">Taille de la lentille : ${produitLocalStorage[i].lentilles} </p></div>`
             
             
         }
         if (i == produitLocalStorage.length ){ //Pour mettre l'ensemble des produits du panier visible sur la page
            positionElement.innerHTML = structureProduitPanier;
        }
         
     }
     
     
    
     let form = document.querySelector(".champ_a_remplir");

     form.email.addEventListener ('change',() =>{
        validEmail(this);
        
     });

     const validEmail = function(inputEmail){
         let emailRegExp = new RegExp(
            '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
         )
         let testEmail = emailRegExp.test(inputEmail.value);
         
        if(testEmail == true){
           document.querySelector('small').innerHTML = 'Adresse valide'
           // adresse toujour indiqué non valide??
        }else{
            document.querySelector('small').innerHTML = 'Adresse non valide'
            document.querySelector('small').style.color = 'red'
        }
     }

     
     
     
     let boutonEnvoi = document.getElementById('#bouton');
     
     bouton.addEventListener("click",(e) =>{
       
          let erreur;
          let inputs= document.getElementsByTagName("input");
          for(i=0 ; i < inputs.length ; i++){
              
            if(!inputs[i].value){
                e.preventDefault();
                 erreur = 'veuillez rentrez tous les champs'
                
          }}
          if(erreur){
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur
        }else{
            alert('Formulaire enregistré !');
        }}
        
        )
    
        
    

        