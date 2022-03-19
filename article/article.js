// function = 

const header = document.getElementById("header");
const tooltip = document.getElementById("tooltip");
const paragraph = document.getElementById("paragraph")
const tooltipText = document.getElementById("tooltipText");
header.addEventListener("mouseenter", function(){
    tooltipText.style.display = "inline-block";
    tooltipText.innerHTML = tooltip.innerText;
    console.log(tooltip)
})

header.addEventListener("mouseleave", function(){
    tooltipText.innerHTML = "";
    tooltipText.style.display = "none";
    
})

header.addEventListener("click", function(){
    paragraph.style.display = "block";
    
})