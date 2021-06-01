fetch('http://localhost:3000/api/cameras')
.then(data => data.json())
.then(jsonListCamera=>{
    console.log(jsonListCamera);
    for(let camera of jsonListCamera){
    let appareil = new Camera(camera);
    document.querySelector('#container').innerHTML += `</div> "http://localhost:3000/"${appareil.imageUrl} <br/> <img src= "http://localhost:3000/" ${appareil.imageUrl} <p> ${appareil.name}<br/> ${appareil.price}€</p> ${appareil.description} </div> `
   
}})


