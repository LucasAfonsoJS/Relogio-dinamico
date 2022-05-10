const hoursHand = document.querySelector('.hand.hours');
const minutesHand = document.querySelector('.hand.minutes');
const secondsHand = document.querySelector('.hand.seconds');
const setRotation = (element,rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360);
}

const setClock = () => {
    const curremtDate = new Date();

    const secondsPercentage = curremtDate.getSeconds() / 60;
    const minutesPercentage = (secondsPercentage + curremtDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + curremtDate.getHours()) / 12;
    
    setRotation(secondsHand, secondsPercentage)
    setRotation(minutesHand, minutesPercentage)
    setRotation(hoursHand, hoursPercentage)
};
setClock();
setInterval(setClock, 1000);