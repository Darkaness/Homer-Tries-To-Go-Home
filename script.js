const character = document.getElementById('character');
const block = document.getElementById('block');
const score = document.getElementById('score');

function jump() {
    character.classList.add('jump-animation');
    setTimeout(() => {
        character.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    if (!character.classList.contains('jump.animation')){
        jump();
    }
});
setInterval(() => {
    score.innerText++;
    const characterTop = parseInt(window.getComputedStyle(character)
    .getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block)
    .getPropertyValue('left'));
    if (blockLeft <0) {
        block.style.display = 'none';
    } else {
        block.style.display = '';
    }
    if (blockLeft < 50 && blockLeft > 0 && characterTop > 150) {
        alert("U got a score of: " + score.innerText + "Play again?");
        location.reload();
    }
}, 50);