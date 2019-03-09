window.addEventListener('load', () =>{
    let long; 
    let lat; 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
       
            //position can be any name 
            long = position.coords.longitude; 
            lat = position.coords.latitude;
        });
        
    }else {
        h1.textContent = "hey this is not working "
    }
});

//load is built in function