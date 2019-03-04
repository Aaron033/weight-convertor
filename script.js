document.getElementById('lbsInput').addEventListener('input', function(e){
   let lbs = e.target.value; 
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
})
//We lisent for an input event
////function(e){
//   let pounds = e.target.value; 
//    console.log(pounds);  it's going to output whatever number we input in the console 