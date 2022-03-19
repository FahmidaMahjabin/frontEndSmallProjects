// function = startWheel
// step1:if dggree < 360 then increase the degree
// step2:set the degree as the rotate of transform 
// step3:if degree is >360 then start again i.e set degree = 0
const spinner = document.getElementById("loader");
const button = document.getElementById("btn");
let rotatingSpinner;
let degree = 0;
let run = false;
console.log(button.value)
function startWheel(){        
    rotatingSpinner = setInterval(() => {
        if(degree < 360){
            degree+= 10;
              
        }
        else{
            degree = 0;
        }
        spinner.style.transform = `rotate(${degree}deg)`;  
        
    } , 50)
    
}
function stopWheel(){
    clearInterval(rotatingSpinner); 
    spinResult.innerHTML = `your lucky number is: ${degree}`;
}
// function 
// step1:when click on the button if run is false then  start the spin and update run = true
// step2:else run is true then stop the spin and update run = false

document.getElementById("btn").addEventListener("click", function(){
    if (!run){
        run = !run;
        startWheel();

    }
    else{
        run = !run;
        stopWheel()
        
    }
})




