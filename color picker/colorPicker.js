// function = color picker 
// step1:take a input which is color type. 
// step2:get the input value as color. 
// step3: select an option a. solid color, b.hover color 
// step4:if solid then change the background of the box. 
// step5:else change the color on hover

const box = document.getElementById("box");
function applyColor(){
    const color = document.getElementById("colorPicker").value;
    console.log(color);
    const applyOption = document.getElementById("select").value;
    console.log(applyOption)
    
    makeHover(box,color, false)
    if(applyOption == "solid"){
        box.style.backgroundColor = color;
    }
    else{
        makeHover(box,color, true)
        
        
    }
}
// function = makeHover 
// step1:if it's hover then add event for mousein and mouse out
// step2:else remove the event 
function makeHover(element,color, isHover){
    if (isHover){
        element.addEventListener("mouseenter", function(){
            this.style.backgroundColor = color;
        })
        element.addEventListener("mouseout", function(){
            this.style.backgroundColor = "transparent";
        })
    }
    else{
        element.removeEventListener("mouseenter", function(){
            this.style.backgroundColor = color;
        })
        element.removeEventListener("mouseout", function(){
            this.style.backgroundColor = "transparent";
        })

    }
    
}