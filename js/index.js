fetch('http://localhost:3000/api/cameras')
.then(data => data.json())
.then(jsonListArticle=>{
    console.log(jsonListArticle);
    for(let cameras of jsonListArticle){
    let appareil = new Article(cameras);
    document.querySelector('#container').innerHTML += `</div> "http://localhost:3000/"${appareil.imageUrl} <br/> <img src= "http://localhost:3000/" ${appareil.imageUrl} <p> ${appareil.name}<br/> ${appareil.price}€</p> ${appareil.description} </div> `
   
}})


