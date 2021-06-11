const queryString_url_id = window.location.search;  
console.log(queryString_url_id);//Pourquoi cela affiche class= après l'id dans la console??

const urlSearchParams = new URLSearchParams(queryString_url_id);  
console.log(urlSearchParams);
const id = urlSearchParams.get("id");
console.log(id);

fetch('http://localhost:3000/api/cameras/' + id )//Ne trouve pas??
.then(response => response.json())
.then(item=>{
    console.log(item);
    let choixCamera = new Camera(item)
    document.querySelector("#produitChoisi").innerHTML += choixCamera.displayPanier();
})







let formulaire = document.querySelectorAll("#paiement");
let button = document.querySelector('#coordonnees')

class coordonnees{
    constructor(nom){
        this.nom  =  this.check(nom,2)
    }
    get Info(){//méthode
        //    return 'Nom : ${this.nom} || Prénom : ${this.prenom} || email : ${this.email}'//CELLE-CI NE MARCHE PAS??
           return "Nom :" + this.nom + "|| Prénom :" + this.prenom +" || Email :" + this.email; //Templates strings 
        }
        displayInConsole = () => {
            console.log(this.Info)
        }
        check(target,minLength){
            if(target==undefined || target.Length< minLength )
            {
                (alert('Les champs ne sont pas remplies !'));
        }else{
            return target
        }
        }
    button = addEventListener("click", (event) => {
    
     
    
})}
var Eric = new coordonnees("Dambrin", "", "e.dambrin@gmail.com");
var Aurelien = new coordonnees("Antonio", "Aurélien","aurelien.antonio@gmail.com");



Eric.displayInConsole();
Aurelien.displayInConsole();



       
    
        
    
    
    // if(confirm('êtes vous sur ?')){
    //     location.href="index.html"
    //     console.log(confirm)
    // }


// button = function(){
//     if(confirm('êtes vous sur ?')){
//         location.href="index.html"
//     }
// }