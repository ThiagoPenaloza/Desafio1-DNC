let count = 1;
document.getElementById("radio1").checked = true;
let intervalId;

function startInterval() {
    intervalId = setInterval(nextImage, 5000);
}

function nextImage(selectedIndex = null) {
    if (selectedIndex !== null && selectedIndex !== count) {
        count = selectedIndex;
    } else {
        count++;
        if (count > 3) {
            count = 1;
        }
    }

    document.getElementById("radio" + count).checked = true;

}

function handleClickRadio(radioId) {
    clearInterval(intervalId);
    const selectedIndex = parseInt(radioId.substring(5));
    nextImage(selectedIndex);
    startInterval();
}


const radios = document.querySelectorAll('input[name="radio-btn"]');
radios.forEach((radio) => {
    radio.addEventListener('click', function () {
        const radioId = this.id;
        handleClickRadio(radioId);
    });
});

startInterval();