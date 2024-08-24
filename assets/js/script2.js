const colorButtons = document.querySelectorAll('button[id^="btn-"]');

const caja = document.getElementById('caja');

for (let i = 0; i < colorButtons.length; i++) {
colorButtons[i].addEventListener('click', function() {
    caja.style.backgroundColor = this.style.backgroundColor;
});
}
