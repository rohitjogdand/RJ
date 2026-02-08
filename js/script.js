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


const yes = document.querySelector('#yes');
yes.addEventListener('click' , ()=>{
    document.querySelector('.mainimg').style.display = 'none';
    document.querySelector('.rj').style.display='block';
})

document.querySelector('#slast').addEventListener('click',()=>{
    document.querySelector('.rj').style.display='none'
    document.querySelector('.jr').style.display='block';
})

document.getElementById('lno').addEventListener('click',(e)=>{
    const message = document.createElement('span');
    message.innerText = "Gift toh milke hi milega! ❤️";
    message.classList.add('fade-text');


    const bottomOffset = 60;
    const topPos = window.pageYOffset + window.innerHeight - bottomOffset;
    message.style.fontSize='30px';
    message.style.left = '0px';
    message.style.top = topPos + 'px';
    document.body.appendChild(message);

    const leftPos = Math.max(8, e.pageX - message.offsetWidth / 2);
    message.style.left = leftPos + 'px';

    setTimeout(() => {
        message.remove();
    }, 4000);
});


document.querySelector('#lyes').addEventListener('click', ()=>{
    document.querySelector('.jr').style.display='none'
    document.querySelector('.last').style.display='block';
})