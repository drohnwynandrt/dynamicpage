function createDiv(){

    var newDiv = document.createElement('div');
    newDiv.textContent = "This is a new div";

    var divParent = document.getElementById("dynaCon")
    divParent.appendChild(newDiv);
    console.log(newDiv);
}