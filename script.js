const no = document.querySelector("#no")

const moveBtn = () =>{
    const maxWidth = window.innerWidth - no.clientWidth;
    const maxHeight = window.innerHeight - no.clientHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    no.style.position = 'fixed';
    no.style.left = randomX + 'px';
    no.style.top = randomY + 'px';
}

no.addEventListener('mouseover',moveBtn)


//for gana
window.addEventListener('DOMContentLoaded',function(){
    const audio = document.getElementById('bg-music');
audio.play()
})
