function createDiv(){

    var newDiv = document.createElement('div');
    var userInput = document.getElementById("input").value;
    newDiv.textContent = userInput;

    var divParent = document.getElementById("dynaCon");
    divParent.appendChild(newDiv);
    console.log(newDiv);
}