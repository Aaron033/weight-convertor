document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
   let lbs = e.target.value; 
    document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(2);
    document.getElementById('kgOutput').innerHTML = (lbs/2.2046).toFixed(2);
    document.getElementById('ozOutput').innerHTML = lbs*16;
    
})


//We lisent for an input event
////function(e){
//   let pounds = e.target.value; 
//    console.log(pounds);  it's going to output whatever number we input and its going to display it in the console 