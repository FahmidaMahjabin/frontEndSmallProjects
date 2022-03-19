// function = show the options 
// step1:when click the right button then it'll trigger
// step2:a popup will show two option frrword and backword

function showOption(){
    const popup = document.createElement("div");
    popup.setAttribute("class", "popup")
    popup.innerHTML = `
    <select>
        <option value = "forword">Forword</option>
        <option value = "back">BackWord</option>

    </select>`
}