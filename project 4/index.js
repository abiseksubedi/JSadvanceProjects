// 
// 

const tempLoad = () => {
    let temp = document.getElementById('temp');


    temp.innerHTML = "&#xf2cb";
    temp.style.color = "white"

    setTimeout(() => {

        temp.innerHTML = "&#xf2ca"
        temp.style.color = 'green';
    }, 2000);
    setTimeout(() => {

        temp.innerHTML = "&#xf2c9";
        temp.style.color = 'darkgreen'

    }, 3000);
    setTimeout(() => {

        temp.innerHTML = "&#xf2c8";
        temp.style.color = 'yellow'

    }, 4000);
    setTimeout(() => {

        temp.innerHTML = "&#xf2c7";
        temp.style.color = 'red'
    }, 5000);

}

tempLoad();
setInterval(tempLoad, 5300)