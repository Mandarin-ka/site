const images = document.querySelectorAll('.personal-img')
function remover(){
    images.forEach(e=>{
        e.classList.remove('active')
    })
}

images.forEach(e=>{
    e.addEventListener('click', t =>{
        if(window.matchMedia("(min-width: 550px)").matches){
            t.preventDefault();
            remover();
            e.classList.add('active');
        }
    })
})