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
                            <a href="produit.html?id=${this.id}"class= "external"><img src="${this.imageUrl}">
                                <h5 class="name">${this.name}</h5>
                                <p class="description" >${this.description}</p>
                        </div></a>`;   
    }
   
    
   

}
