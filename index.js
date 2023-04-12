const player = document.querySelector('#player');
const wrapper = document.querySelector('#wrapper');
const enemyOne = document.querySelector('#enemy-one');
const enemyTwo = document.querySelector('#enemy-two');
const enemyThree = document.querySelector('#enemy-three');
const enemyFour = document.querySelector('#enemy-four');
const enemyFive = document.querySelector('#enemy-five');
const enemySix = document.querySelector('#enemy-six');
const bullet1 = document.querySelector('.bullet1');
const bullet2 = document.querySelector('.bullet2');
const bullet3 = document.querySelector('.bullet3');
const bullet4 = document.querySelector('.bullet4');
const bullet5 = document.querySelector('.bullet5');
const bullet6 = document.querySelector('.bullet6');
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

function setTime(direction) {
    switch (direction) {
        case "left":
            let x_left = (wrapper.clientWidth - (wrapper.clientWidth - player.offsetLeft));
            let z_left = x_left * 1 / wrapper.clientHeight;
            let countTimeLeft = ((z_left * 1200) / 1000).toFixed(1).toString();
            time = countTimeLeft + "s";
            player.style.transition = `all ${time} linear`;
            break;
        case "right":
            let x_right = (wrapper.clientWidth - player.offsetLeft);
            let z_right = x_right * 1 / wrapper.clientHeight;
            let countTimeRight = ((z_right * 1200) / 1000).toFixed(1).toString();
            time = countTimeRight + "s";
            player.style.transition = `all ${time} linear`;
            break;
    }
}

window.addEventListener("keydown", (event) => {
    let x = event.keyCode;
    switch (event.keyCode) {
        case 39: setTime("right"); player.style.left = (wrapper.offsetLeft + wrapper.clientWidth / 2 - player.clientWidth) + 'px'; break;
        case 37: setTime("left"); player.style.left = (wrapper.offsetLeft - wrapper.clientWidth / 2) + 'px'; break;
    }
})
window.addEventListener("keyup", (event) => {
    let test12 = wrapper.offsetLeft + wrapper.clientWidth / 2 - player.clientWidth;
    let x = event.keyCode;
    switch (event.keyCode) {
        case 39: player.style.left = player.offsetLeft + "px"; break;
        case 37: player.style.left = player.offsetLeft + "px"; break;
    }
})

window.addEventListener('load', () => {
    setInterval(() => {
        createBullets1();
    }, 1500)

    setInterval(() => {
        count1 % 2 == 0 ? enemyOne.style.left = (wrapper.offsetLeft + wrapper.clientWidth / 2 - enemyOne.clientWidth) + 'px' : enemyOne.style.left = (wrapper.offsetLeft - wrapper.clientWidth / 2) + 'px';
        count1 += 1;
        shoot1();
    }, 1500)
});

window.addEventListener('load', () => {
    setInterval(() => {
        count2 % 2 == 0 ? enemyTwo.style.left = (wrapper.offsetLeft + wrapper.clientWidth / 2 - enemyTwo.clientWidth) + 'px' : enemyTwo.style.left = (wrapper.offsetLeft - wrapper.clientWidth / 2) + 'px';
        count2 += 1;
    }, 2000)
});

window.addEventListener('load', () => {
    setInterval(() => {
        createBullets2();
    }, 2500)

    setInterval(() => {
        count3 % 2 == 0 ? enemyThree.style.left = (wrapper.offsetLeft + wrapper.clientWidth / 2 - enemyThree.clientWidth) + 'px' : enemyThree.style.left = (wrapper.offsetLeft - wrapper.clientWidth / 2) + 'px';
        count3 += 1;
        shoot2();
    }, 2500)
})

window.addEventListener('load', () => {
    setInterval(() => {
        count4 % 2 == 0 ? enemyFour.style.left = (wrapper.offsetLeft + wrapper.clientWidth / 2 - enemyThree.clientWidth) + 'px' : enemyFour.style.left = (wrapper.offsetLeft - wrapper.clientWidth / 2) + 'px';
        count4 += 1;
    }, 3000)
})

window.addEventListener('load', () => {
    setInterval(() => {
        createBullets3();
    }, 3500)

    setInterval(() => {
        count5 % 2 == 0 ? enemyFive.style.left = (wrapper.offsetLeft + wrapper.clientWidth / 2 - enemyFive.clientWidth) + 'px' : enemyFive.style.left = (wrapper.offsetLeft - wrapper.clientWidth / 2) + 'px';
        count5 += 1;
        shoot3();
    }, 3500)
})

window.addEventListener('load', () => {
    setInterval(() => {
        count6 % 2 == 0 ? enemySix.style.left = (wrapper.offsetLeft + wrapper.clientWidth / 2 - enemySix.clientWidth) + 'px' : enemySix.style.left = (wrapper.offsetLeft - wrapper.clientWidth / 2) + 'px';
        count6 += 1;
    }, 4000)
})

const deleteBullet = () => {
    const isBullet1 = document.querySelector('.bullet1');
    const isBullet2 = document.querySelector('.bullet2');
    const isBullet3 = document.querySelector('.bullet3');
    const isBullet4 = document.querySelector('.bullet4');
    const isBullet5 = document.querySelector('.bullet5');
    const isBullet6 = document.querySelector('.bullet6');
    isBullet1 && isBullet1.remove();
    isBullet2 && isBullet2.remove();
    isBullet3 && isBullet3.remove();
    isBullet4 && isBullet4.remove();
    isBullet5 && isBullet5.remove();
    isBullet6 && isBullet6.remove();
}

const createBullets1 = () => {
    const bullet1 = document.querySelector('.bullet1');
    const bullet4 = document.querySelector('.bullet4');
    bullet1 && bullet1.remove();
    bullet4 && bullet4.remove();
    let shootOrNot1 = Math.floor(Math.random() * 8) + 1;
    if (shootOrNot1 % 2 == 0) {
        const newBullet1 = document.createElement('div');
        const newBullet4 = document.createElement('div');
        newBullet1.classList.add('bullet1');
        newBullet4.classList.add('bullet4');
        enemyOne.appendChild(newBullet1);
        enemyFour.appendChild(newBullet4)
    };
}

const shoot1 = () => {
    const bullet1 = document.querySelector('.bullet1');
    const bullet4 = document.querySelector('.bullet4');
    const possition = 495;
    const time = 1.5;
    bullet1 ?
        (bullet1.style.transform = `translateY(${possition}px)`,
            bullet1.style.transition = `all ${time}s linear`) : "";
    bullet4 ?
        (bullet4.style.transform = `translateY(${possition}px)`,
            bullet4.style.transition = `all ${time}s linear`) : "";
}

const createBullets2 = () => {
    const bullet2 = document.querySelector('.bullet2');
    const bullet5 = document.querySelector('.bullet5');
    bullet2 && bullet2.remove();
    bullet5 && bullet5.remove();
    let shootOrNot2 = Math.floor(Math.random() * 8) + 1;
    if (shootOrNot2 % 2 == 0) {
        const newBullet2 = document.createElement('div')
        const newBullet5 = document.createElement('div')
        newBullet2.classList.add('bullet2');
        newBullet5.classList.add('bullet5');
        enemyTwo.appendChild(newBullet2);
        enemyFive.appendChild(newBullet5)
    };
}

const shoot2 = () => {
    const bullet2 = document.querySelector('.bullet2');
    const bullet5 = document.querySelector('.bullet5');
    const possition = 495;
    const time = 2.5;
    bullet2 &&
        (bullet2.style.transform = `translateY(${possition}px)`,
            bullet2.style.transition = `all ${time}s linear`);
    bullet5 &&
        (bullet5.style.transform = `translateY(${possition}px)`,
            bullet5.style.transition = `all ${time}s linear`);
}

const createBullets3 = () => {
    const bullet3 = document.querySelector('.bullet3');
    const bullet6 = document.querySelector('.bullet6');
    bullet3 && bullet3.remove();
    bullet6 && bullet6.remove();
    let shootOrNot3 = Math.floor(Math.random() * 8) + 1;
    if (shootOrNot3 % 2 == 0) {
        const newBullet3 = document.createElement('div')
        const newBullet6 = document.createElement('div')
        newBullet3.classList.add('bullet3');
        newBullet6.classList.add('bullet6');
        enemyThree.appendChild(newBullet3);
        enemySix.appendChild(newBullet6)
    };
}


const shoot3 = () => {
    const bullet3 = document.querySelector('.bullet3');
    const bullet6 = document.querySelector('.bullet6');
    const possition = 495;
    const time = 3.5;

    bullet3 &&
        (bullet3.style.transform = `translateY(${possition}px)`,
            bullet3.style.transition = `all ${time}s linear`);
    bullet6 &&
        (bullet6.style.transform = `translateY(${possition}px)`,
            bullet6.style.transition = `all ${time}s linear`);
}