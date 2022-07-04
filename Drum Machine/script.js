// Usando o mouse

function playPad1() {
    const pad1 = document.getElementById("pad-1")
    const music = new Audio('./Audios/chord1.mp3');
    music.play();
    pad1.classList.add('apertou');
    setTimeout(() => {
        pad1.classList.remove('apertou');
    }, 150);
}

function playPad2() {
    const pad2 = document.getElementById("pad-2")
    const music = new Audio('./Audios/chord2.mp3');
    music.play();
    pad2.classList.add('apertou');
    setTimeout(() => {
        pad2.classList.remove('apertou');
    }, 150);
}

function playPad3() {
    const pad3 = document.getElementById("pad-3")
    const music = new Audio('./Audios/chord3.mp3');
    music.play();
    pad3.classList.add('apertou');
    setTimeout(() => {
        pad3.classList.remove('apertou');
    }, 150);
}

function playPad4() {
    const pad4 = document.getElementById("pad-4")
    const music = new Audio('./Audios/shaker.mp3');
    music.play();
    pad4.classList.add('apertou');
    setTimeout(() => {
        pad4.classList.remove('apertou');
    }, 150);
}

function playPad5() {
    const pad5 = document.getElementById("pad-5")
    const music = new Audio('./Audios/sidestick.mp3');
    music.play();
    pad5.classList.add('apertou');
    setTimeout(() => {
        pad5.classList.remove('apertou');
    }, 150);
}

function playPad6() {
    const pad6 = document.getElementById("pad-6")
    const music = new Audio('./Audios/snare.mp3');
    music.play();
    pad6.classList.add('apertou');
    setTimeout(() => {
        pad6.classList.remove('apertou');
    }, 150);
}

function playPad7() {
    const pad7 = document.getElementById("pad-7")
    const music = new Audio('./Audios/kick.mp3');
    music.play();
    pad7.classList.add('apertou');
    setTimeout(() => {
        pad7.classList.remove('apertou');
    }, 150);
}

function playPad8() {
    const pad8 = document.getElementById("pad-8")
    const music = new Audio('./Audios/openhh.mp3');
    music.play();
    pad8.classList.add('apertou');
    setTimeout(() => {
        pad8.classList.remove('apertou');
    }, 150);
}

function playPad9() {
    const pad9 = document.getElementById("pad-9")
    const music = new Audio('./Audios/closedhh.mp3');
    music.play();
    pad9.classList.add('apertou');
    setTimeout(() => {
        pad9.classList.remove('apertou');
    }, 150);
}

// Usando o teclado

document.onkeydown = teclado;
function teclado(e) {
    switch(e.keyCode) {
        case 81:
            playPad1();
            break;
        case 87:
            playPad2();
            break;
        case 69:
            playPad3();
            break;
        case 65:
            playPad4();
            break;
        case 83:
            playPad5();
            break;
        case 68:
            playPad6();
            break;
        case 90:
            playPad7();
            break;
        case 88:
            playPad8();
            break;
        case 67:
            playPad9();
            break;
    }
}





