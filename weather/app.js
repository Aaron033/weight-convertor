window.addEventListener('load', () =>{
    let long; 
    let lat; 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
       
            //position can be any name 
            long = position.coords.longitude; 
            lat = position.coords.latitude;
            const api = `https://api.darksky.net/forecast//${lat},${long}`;
            
            
            fetch(api)
        .then(response =>{
            return response.json(); //its going to convert to json 
        })
        });
        
        
    }else {
        h1.textContent = "hey this is not working "
    }
});

//load is built in function