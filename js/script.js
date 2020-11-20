const kupu2 = document.querySelectorAll('.kupu2');
const rumput = document.querySelectorAll('.rumput');
const papanSkor = document.querySelector('.papan-skor');
const musicdj = document.querySelector('#musicdj');
const pop = document.querySelector('#pop');

let before;
let finish;
let skor;

function randomRumput(rumput) {
    const x = Math.floor(Math.random() * rumput.length);
    const xRandom = rumput[x];
    if (xRandom == before) {
        randomRumput(rumput);
    }
    before = xRandom;
    return xRandom;
}

//waktu random
function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//munculkan kupu2
function munculkanKupu2() {
    const xRandom = randomRumput(rumput);
    const wRandom = randomWaktu(300, 1000);
    musicdj.play();
    xRandom.classList.add('muncul');

    setTimeout(() => {
        xRandom.classList.remove('muncul');
        if (!finish) {
            munculkanKupu2();
        }
    }, wRandom);
}

//start
function start() {
    finish = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanKupu2();
    setTimeout(() => {
        finish = true;
    }, 10000);
}

//pukul
function pukul() {
    skor++;
    this.parentNode.classList.remove('muncul');
    pop.play();
    papanSkor.textContent = skor;
}


kupu2.forEach(x => {
    x.addEventListener('click', pukul);
});