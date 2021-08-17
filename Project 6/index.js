// 
// 

const counters = document.querySelectorAll('.counter');




counters.forEach((counter) => {
    counter.innerHTML = 0;

    updateCounter = () => {
        targetCount = counter.getAttribute('data-target');
        console.log(targetCount);
    }
    updateCounter()
})