/*
"use strict";
 var apiURL = "https://api.adviceslip.com/";


document.addEventListener('DOMContentLoaded', function () {
    var dado = document.getElementById('dice');
    dado.addEventListener('click', randomMethod);

    function randomMethod() {
        console.log("click")
    }
});
*/

const random = async () => {
    try {
          var respuesta = await fetch('https://api.adviceslip.com/advice');
          //console.log(respuesta);
          var getquote = await respuesta.json();
          var quote = (getquote.slip['advice']);
          //console.log(quote);
        //var dado = document.getElementById('dice');
        var parQuote = document.getElementById('quote');
        //parQuote.innerHTML="Heloooalao";
        parQuote.innerHTML = quote;
    }catch (error){
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var dado = document.getElementById('dice');
    dado.addEventListener('click', randomMethod);
    function randomMethod() {
        random();
    }
});

const numAdvice = async () => {
    try {
        var response = await fetch('https://api.adviceslip.com/advice');
        var getquote = await response.json();
        console.log(getquote)
        var numAdv = (getquote.slip['id']);
        //console.log(numAdv);

        var parNum = document.getElementById('numAdvice');
        parNum.innerHTML= '<p>Advice' +  " #" + numAdv + '</p>';
    }catch (error){
        console.log(error) ;
    }

}

document.addEventListener('DOMContentLoaded', function () {
    var divDice = document.getElementById('dice');
    divDice.addEventListener('click', randomMethod);
    function randomMethod() {
        numAdvice();
    }
});