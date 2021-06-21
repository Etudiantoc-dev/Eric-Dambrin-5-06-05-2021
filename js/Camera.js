class Camera{
    constructor(item){
        this.id = item._id;
        this.name = item.name;
        this.price = item.price;
        this.lenses = item.lenses;
        this.description = item.description;
        this.imageUrl = item.imageUrl;
    }

    displayInList(index){
                return `<div class="appareil_${index}">
                            <a href="produit.html?id=${this.id}"class= "photos"><img src="${this.imageUrl}">
                                <h5 class="name">${this.name}</h5> <div class="prix">${this.price/100} €</div>
                                <p class="description_appareil" >${this.description}</p>
                        </div></a>` ; 
    }
    displayProduit (){
        // console.log(this)
        return `<div class="appareilProduit">
                    <div class= "photos"><img src="${this.imageUrl}"></div>
                    <h5 class="name">${this.name}</h5> <div class="prixProduit">${this.price/100} €</div>
                    <p class="description_produit">${this.description}</p></div>
                    
                    <div class='option'>
                    <form> 
                    <label for="option_lentilles"> Taille de la lentille : </label>
                   <select name="lentilles" id="lentilles">
                       ${this.displayLenses()}
                   </select>
                   
         </form>
         
         
         
         <div> <a href="panier.html?id=${this.id} class="ajouter"><input type="submit" id="btn" value="Ajouter dans le panier" ></div></div></a>`;//ne renvoit pas au panier?
                  
    }


    displayLenses(){
        let option = '';
        /*
        option +=  this.lenses.map(lense => {
            return `<option>${lense}</option>`;
        });*/
        this.lenses.forEach(lense => {
            option += `<option>${lense}</option>`;
        })
        return option
    }
    
    
    
    
    
    //  displayFormulaire(){

    //     return `<h3 class="opération">Paiement</h3>
    //     <div class="formulaire">
    //      <div class="instruction"><p>Veuillez remplir les champs suivants pour pouvoir</p></div><div class="suite_instruction"><p> procéder au paiement:</p></div>
       
    //      <form class="champ_a_remplir">
    //      <div class="form_group">
    //        <label for="firstName">Prénom</label>
    //        <input type="text" class="form-control" id="firstName" placeholder="Prénom" required>
    //      </div>
    //      <div class="form_group">
    //        <label for="lastName">Nom</label>
    //        <input type="text" class="form-control" id="lastName" placeholder="Nom" required>
    //      </div>
    //      <div class="form_group">
    //        <label for="address">Adresse</label>
    //        <input type="text" class="form-control" id="address" placeholder="Adresse" required>
    //      </div>
    //      <div class="form_group">
    //        <label for="city">Ville</label>
    //        <input type="text" class="form-control" id="city" placeholder="Ville" required>
    //      </div>
    //      <div class="form_group">
    //        <label for="email">Adresse mail</label>
    //        <input type="email" class="form-control" id="email" placeholder="Adresse mail" required>
    //      </div>
    //    </form>
    //     <a  href="#" id="coordonnees" role="button" type="submit">Envoyer</a>
    //  </div>`
     
    //  }
    
        
    }
   

   
    
   


