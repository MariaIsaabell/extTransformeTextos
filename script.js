/* Programa - Modelo 1 */

window.document.addEventListener("DOMContentLoaded", function(){

    /* Botão Letra Maiúscula */
    window.document.getElementById("btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toUpperCase()
    })

     window.document.getElementById("btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value 
        document.querySelector("#result").innerHTML = inputText.toLowerCase()
    })

})