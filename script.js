let name;
let message;
document.getElementById("PGButton").onclick = function(){
    name = document.getElementById("name").value
    message = `Hello ${name}`
    document.getElementById("PGHeader").textContent = message
}