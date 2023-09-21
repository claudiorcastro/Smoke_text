//fragmento texto por letra
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

const letras = document.querySelectorAll('span');
for (let i = 0; i < letras.length; i++) {
    letras[i].addEventListener("mouseover", function(){
        letras[i].classList.add('active')
    })
    
}