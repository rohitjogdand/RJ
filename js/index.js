document.addEventListener('DOMContentLoaded', () => {
    const yesI = document.getElementById('yesI');
    if (yesI) {
        yesI.addEventListener('click', () => {
            window.location.href = 'prop.html';
        });
    }

    const noI = document.getElementById('noI');
    const pop = document.querySelector('.pop');
    const enrtryi = document.querySelector('.enrtryi');
        noI.addEventListener('click', () => {
            pop.style.display = 'block';
            enrtryi.style.display='none';
        });
    const closePop = document.getElementById('closePop');
    if (closePop && pop) {
        closePop.addEventListener('click', () => {
            window.location.href='prop.html';
        });
    }
});