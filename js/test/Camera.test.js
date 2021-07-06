function testDisplayCamera(){
    let product = {
        "lenses": [
            "50mm 1.8",
            "60mm 2.8",
            "24-60mm 2.8/4.5"
        ],
        "_id": "5be1ef211c9d44000030b062",
        "name": "Hirsch 400DTS",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "price": 309900,
        "imageUrl": "http://localhost:3000/images/vcam_2.jpg"
    }

    let cam = new Camera(product)
    let result = cam.displayInList(2)

    if(result.search("appareil_2") > 0 ){
        console.log('test passed')
    }else{
        console.error("Erroor passing test expected to find appraeil 2")
    }
}
testDisplayCamera();