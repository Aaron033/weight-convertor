document.getElementById('lbsInput').addEventListener('input', function(e){
   let lbs = e.target.value; 
    document.getElementById('gramsOutput').innerHTML = Math.round(lbs/0.0022046);
})
//We lisent for an input event
////function(e){
//   let pounds = e.target.value; 
//    console.log(pounds);  it's going to output whatever number we input in the console 