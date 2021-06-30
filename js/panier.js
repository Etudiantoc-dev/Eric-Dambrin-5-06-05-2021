//Récupération des informations du produit selectionné envoyé dans le local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

                //.............Affichage produits panier..............//

const positionElement = document.querySelector("#produitChoisi");

let structureProduitPanier = []

//Si le panier est vide : afficher panier vide :
if (produitLocalStorage === null) {
    const panierVide = `<div class="container_panier_vide">Le panier est vide</div>`;
    positionElement.innerHTML = panierVide;


} else {

    for (i = 0; i < produitLocalStorage.length; i++) {

        structureProduitPanier = structureProduitPanier +
            `<div class="choixProduit">
        <class="image_choix_produit"><img src="${produitLocalStorage[i].image}">
        <h5 class="name">${produitLocalStorage[i].nom}</h5> <div class="prixProduit">${produitLocalStorage[i].prix} €</div>
        <p class="lentilles">Taille de la lentille : ${produitLocalStorage[i].lentilles} </p></div>`


    }//Pour mettre l'ensemble des produits du panier visible sur la page
    if (i == produitLocalStorage.length) { 
        positionElement.innerHTML = structureProduitPanier;
    }

}



let form = document.querySelector(".champ_a_remplir");

form.email.addEventListener('change', (e) => {

    validEmail(e.target.value);


});

const validEmail = function (inputEmail) {
    let emailRegExp =
        /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/

    let testEmail = emailRegExp.test(inputEmail);

    if (testEmail == true) {
        document.querySelector('small').innerHTML = 'Adresse valide'
        document.querySelector('small').style.color = 'black'
    } else {
        document.querySelector('small').innerHTML = 'Adresse non valide'
        document.querySelector('small').style.color = 'red'
    }
    return testEmail
}


Array.from(form.querySelectorAll('input[type="text"')).forEach(elt =>{// Je pense que tout ce code ne sert à rien??
    elt.addEventListener('focusout', (e) => {// Je pense que tout ce code ne sert à rien??
        console.log(e.target.value)// Je pense que tout ce code ne sert à rien??
        validFormat(e.target);//Je ne comprend pas??// Je pense que tout ce code ne sert à rien??
    
    }) // Je pense que tout ce code ne sert à rien??
})

const validFormat = function (input) { 

    if (input.value.trim() === '') {
        //trim permet de prendre en compte lorsque l'on fait une barre espace n'est pas une valeur inscrite..
        console.log(input.parentNode);
        //parentNode permet de dire si le format est bon ou pas sous le champs concerné
        input.parentNode.querySelector(".format").innerHTML = "Format non-valide"
        return false
    } else {
        input.parentNode.querySelector(".format").innerHTML = ""
    }
    return true;
}
//Récupération des prix des produits contenus dans le panier :
let prixDeLaCommande= [];
for(i=0 ; i<produitLocalStorage.length ; i++){
    
prixDeLaCommande.push(produitLocalStorage[i].prix)

    // console.log(prixDeLaCommande);
}
// Addition pour obtenir prix total du panier avec la méthode reduce :

const reducer = (accumulator,currentValue)=> accumulator + currentValue
// console.log(prixDeLaCommande.reduce(reducer));


bouton.addEventListener("click", (e) => {
    e.preventDefault();
    let form = document.querySelector(".champ_a_remplir");
    if(!validEmail(form.email.value)){
        alert("erreur email");
        return false
    }
    let isOk = true;
    Array.from(form.querySelectorAll('input[type="text"')).forEach(elt =>{
        
            if(!validFormat(elt)){
        // demander si sans les return à la function de validFormat celà fonctionne??
                alert("Le champ " + elt.placeholder + " est vide")
                isOk = false;// Je comprend pas les isOk??
            }
        
    })
    if(!isOk){
        return false
    }

    let erreur; // = (let erreur == null ou undefined)
    let inputs = document.getElementsByTagName("input");

    for (i = 0; i < inputs.length; i++) {

        if (!inputs[i].value) {
            e.preventDefault();
            erreur = 'veuillez rentrez tous les champs'

        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur
    } else {
     
        alert('Formulaire enregistré !');

    }
   
    
    //--------------Récupération des donnés du formulaire ----------------------

    const contact = {

        lastName: document.querySelector("#lastName").value,
        firstName: document.querySelector("#firstName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }
    //----------------Mettre les donnés du formulaire dans le localStorage-------------
    localStorage.setItem("newUser", JSON.stringify(contact));
    let products = [];
    produitLocalStorage.forEach(conne=> products.push(conne.id))
    // -----création de la variable contenant les produits du panier et les infos du formulaires--------
    let infosServeur = {
        contact,
        products
    }
    
    // --------Envoi des informations du panier avec la méthode Post vers le serveur-------
       
     const promiseCommande = fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        body: JSON.stringify(infosServeur),
        headers: { "Content-type": "application/json; charset=UTF-8" },
        
    })
    //Pour voir la commande dans la console :

    promiseCommande.then(async(response)=>{
        try {
            
            const contenu = await response.json();
            console.log(contenu)
            localStorage.setItem("orderId",contenu.orderId) //id de la commande dans le local storage
            localStorage.setItem('prixDeLaCommande',prixDeLaCommande.reduce(reducer));
        } 
        catch (error) {
            
            console.log(error)
        }
    })
    // prix total de la commande :

  

    // Envoyer commande dans la page confirmation commande :

  window.location = "confirmation commande.html";
  


//     let btnEnregistrer = document.querySelector("#btn");
//     btnSelection.addEventListener("click", (event) => {
//         event.preventDefault()
// let commandeLocalStorage = localStorage.getItem("commande") ? JSON.parse(localStorage.getItem("commande")) : [];
    
    
    
        // .then(response => response.json())
        // .then(json => console.log(json))
        // .catch(err => console.log(err));
    
       
})








































