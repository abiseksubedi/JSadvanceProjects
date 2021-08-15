const container = document.getElementById('container')


const req = new XMLHttpRequest();

req.open('GET', "https://restcountries.eu/rest/v2/name/nepal")

req.send();

// to get the response 

req.addEventListener('load', function() {
    let [data] = JSON.parse(this.responseText)
    console.log(data);

    let htmlData = `
    <img src= "${data.flag}">
    <h1>${data.name} </h1>   
    Capital: ${data.capital} <br>
    <footer>
        <div id="foot"> NativeLanguage: ${data.nativeName}</div>
        <div id="foot"> Population: ${data.population}   </div>
        <div id="foot"> Demonym: ${data.demonym}  </div>        
    </footer>
    `
    container.insertAdjacentHTML('afterbegin', htmlData)
})