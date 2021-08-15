const nextBtn = document.querySelector('#next')
const jokes = document.querySelector('#jokes')

// promise way of fetching datas from API !

function renderJokes() {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com', setHeader)
        .then((respose) => respose.json())
        .then((data) => {
            jokes.innerHTML = data.joke
        }).catch((error) => console.log(error))
}



// fetching data using Async await method from API 

// const renderJokes = async() => {
//     try {
//         const setHeader: {
//             headers: {
//                 Accept: 'application/json'
//             }
//         }
//         const req = await fetch('https://icanhazdadjoke.com', setHeader)
//         const data = await req.json();
//         jokes.innerHTML = data.joke;
//     } catch (err) { console.log(`the error is ${err}`) }
// }

next.addEventListener("click", function() {
    renderJokes();
    console.log('clicked next btn ');
})