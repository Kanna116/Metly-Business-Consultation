window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

const loader = document.querySelector(".loader")
function percentageLoading() {
    let percent = 0;
    setInterval(() => {
        loader.textContent = percent + " %";
        if (percent >= 100) {
            percent = 100
        }
        else {
            percent++
        }

    }, 40)
}
percentageLoading();

const applyBall = document.querySelector(".apply-ball")
function apllyBallLetters() {
    var newBallHtml = applyBall.innerText.split('').map((letter => `<span class="letter">${letter}</span>`)).join('')

    applyBall.innerHTML = newBallHtml
    const letters = document.querySelectorAll(".letter")
    letters.forEach((letter, index) => [
        letter.style.transform = `rotate(-${(index + 1) * (360 / letters.length)}deg)`
    ])

}
apllyBallLetters();

