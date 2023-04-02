
const random = async () => {
    try {
          var respuesta = await fetch('https://api.adviceslip.com/advice');
          var getquote = await respuesta.json();
          var quote = getquote.slip['advice'];
          var numAdv = getquote.slip['id'];

        var parQuote = document.getElementById('quote');
        parQuote.innerHTML = quote;
        var parNum = document.getElementById('numAdvice');
        parNum.innerHTML= '<p>Advice' +  " #" + numAdv + '</p>';
    }catch (error){
        alert("error");
    }
}
