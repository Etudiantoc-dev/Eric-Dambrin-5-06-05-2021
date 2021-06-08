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
                                <h5 class="name">${this.name}></h5> <div class="prix">${this.price} €</div>
                                <p class="description_appareil" >${this.description}</p>
                        </div></a>` ; 
    }
    displayProduit (){

        return `<div class="appareil">
                    <a href="panier.html?id=${this.id}class= "photos"><img src=${this.imageUrl}>
                    <h5 class="name">${this.name}</h5></a><class="prix">${this.price} €</div>
                    <p class="description_produit">${this.description}</p></div>
                    
                    <form> <label for="option_lentilles"> Taille de la lentille : </label>
                   <select name="lentilles" id="lentilles">
         <option value = "option1">${this.lenses[0]}</option>
         <option value = "option2">${this.lenses[1]}</option>
         <option value = "option3">${this.lenses[2]}</option>
         </form>`;
                  
    }
  

    }

   
    
   


