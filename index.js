const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'db3895affdmsh204df3544bf54b6p181ce5jsn003d38cca90e',
        'X-RapidAPI-Host': 'random-quote-api1.p.rapidapi.com'
    }
};
function Get_text(){
    fetch('https://random-quote-api1.p.rapidapi.com/randomQuote', options)
    .then(response => response.json())
    .then(response => {
        document.getElementById('quoteText').innerHTML = response.quote;
        document.getElementById('author').innerHTML = '-' + response.author;
    })
    .catch(err => console.error(err));
}
let button =  document.getElementById("confirmBtn");
button.addEventListener("click", Get_text);