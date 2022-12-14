score = 0;
document.onkeydown = function (em) {
    console.log("Key Code is " + em.keyCode);

    if (em.keyCode == 38) {
        deer = document.querySelector('.deer');
        deer.classList.add('animateDeer');
        setTimeout(() => {
            deer.classList.remove('animateDeer')
        }, 700);
    }

    else if (em.keyCode == 39) {
        deer = document.querySelector('.deer');
        deer.classList.add('animateDeer');
        dearX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
        deer.style.left = dearX + 150 + "px";

    }

    else if (em.keyCode == 37) {
        deer = document.querySelector('.deer');
        deer.classList.add('animateDeer');
        dearX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
        deer.style.left = (dearX - 150) + "px";

    }
}
pass = true;
setInterval(() => {
    deer = document.querySelector('.deer');
    over = document.querySelector('.over');
    car = document.querySelector('.car');

    dx = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(deer, null).getPropertyValue('top'));

    cx = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - cx);
    offsetY = Math.abs(dy - cy);
    console.log(offsetX, offsetY);

    if (offsetX < 80 && offsetY < 150) {
        over.style.visibility = 'visible';
        car.classList.remove('animateCar')
    }

    else if (offsetX < 80 && pass) {
        score += 1;
        Live_score(score);
        pass = false;
        setTimeout(() => {
            pass = true;
        }, 1000);

        setTimeout(() => {
            carSpeed = parseFloat(window.getComputedStyle(car, null).getPropertyValue('animation-duration'));
            carspeed2 = carSpeed - 0.1;
            car.style.animationDuration = carspeed2 + 's';
        }, 500);
    }
}, 70);

function Live_score(score) {
    LiveScore.innerHTML = "SCORE : " + score;

}