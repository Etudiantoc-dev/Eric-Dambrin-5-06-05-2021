fetch('http://localhost:3000/api/cameras')
.then(Response => Response.json())
.then(data=>{
    console.log(data);
})


