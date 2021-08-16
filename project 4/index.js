// 
// 

const tempLoad = () => {
    let temp = document.getElementById('temp');


    temp.innerHTML = "&#xf2cb";

    setInterval(() => {

        temp.innerHTML = "&#xf2ca"
        temp.style.color = 'green';
    }, 2000);
    setInterval(() => {

        temp.innerHTML = "&#xf2c9";
        temp.style.color = 'darkgreen'

    }, 3000);
    setInterval(() => {

        temp.innerHTML = "&#xf2c8";
        temp.style.color = 'darkred'

    }, 4000);
    setInterval(() => {

        temp.innerHTML = "&#xf2c7";
        temp.style.color = 'red'
    }, 5000);

}

tempLoad();