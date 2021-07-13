class Camera {
  constructor(item) {
    this.id = item._id;
    this.name = item.name;
    this.price = item.price;
    this.lenses = item.lenses;
    this.description = item.description;
    this.imageUrl = item.imageUrl;
  }

  displayInList(index) {
    return `<div class="appareil_${index}">
                            <a href="produit.html?id=${this.id
      }"class= "photos"><img src="${this.imageUrl}">
                                <h5 class="name">${this.name
      }</h5> <div class="index_prix">${this.price / 100
      } €</div>
                                <p class="description_appareil" >${this.description
      }</p>
                        </div></a>`;
  }
  displayProduit() {
    return `<div class="appareilProduit">
                    <div class= "photos"><img src="${this.imageUrl}"></div>
                    <div id="write_produit">
                    <h5 class="name">${this.name
      } </h5><div class="prixProduit">${this.price / 100} €</div>
                    <p class="description_produit">${this.description}</p></div>
                    </div>
                    <div class='option'>
                    <form> 
                    <label for="option_lentilles"> Taille de la lentille : </label>
                   <select name="lentilles" id="lentilles">
                       ${this.displayLenses()}
                   </select>
                   
         </form>
          <div> <a href="panier.html?id=${this.id
      } class="ajouter"><input type="submit" id="btn" value="Ajouter dans le panier" ></div></div></a>`;
  }

  displayLenses() {
    let option = "";
    this.lenses.forEach((lense) => {
      option += `<option>${lense}</option>`;
    });
    return option;
  }
  displayCommande() {
    return `
        <h3>Merci pour votre commande !</h3>
        <h4>Nous vous confirmons votre commande avec le numéro suivant :${this.orderId}</h4>
        <h4>Le montant est de : </h4>`;
  }
}
