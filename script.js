score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("Key code is : ", e.keyCode)
    if(e.keyCode == 38){
        astro = document.querySelector('.astro');
        astro.classList.add('animateAstro');
        setTimeout(() => {
            astro.classList.remove('animateAstro');
        }, 700);

    }
    if(e.keyCode == 39){
        astro = document.querySelector('.astro');
      astroX = parseInt( window.getComputedStyle(astro, null).getPropertyValue('left'));
      astro.style.left = astroX + 112 + "px";
    }

    if(e.keyCode == 37){
        astro = document.querySelector('.astro');
      astroX = parseInt( window.getComputedStyle(astro, null).getPropertyValue('left'));
      astro.style.left =( astroX - 112) + "px";
    }
}
setInterval(() => {
    astro = document.querySelector('.astro');
    gameOver = document.querySelector('.gameOver');
    ufo =document.querySelector('.ufo');

    dx =parseInt( window.getComputedStyle(astro, null).getPropertyValue('left'));

    dy =parseInt( window.getComputedStyle(astro, null).getPropertyValue('top'));

    Ox =parseInt( window.getComputedStyle(ufo, null).getPropertyValue('left'));

    Oy =parseInt( window.getComputedStyle(ufo, null).getPropertyValue('top'));

     offsetX = Math.abs(dx-Ox);
    offsetY = Math.abs(dy-Oy);
    console.log(offsetX,offsetX);
    if(offsetX< 113 && offsetY<52){
        
        gameOver.style.visibility = ' visible';
        ufo.classList.remove('ufo');
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross =true;
        }, 1000);

        aniDur = parseFloat( window.getComputedStyle(ufo, null).getPropertyValue('animation- duration'));
    }

}, 10);

function updateScore(score){
   scoreCont.innerHTML = "Your Score :" + score;
}