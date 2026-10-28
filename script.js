const hamBtn = document.querySelector('#hamBtn');
const hamMenu = document.querySelector('.hamburger-menu');
let hamD = true;

hamBtn.addEventListener('click', ()=>{
  
  if (hamD) {
    hamMenu.classList.remove('d');
    hamMenu.classList.add('a');
    hamD = false;
  } else {
    hamMenu.classList.add('d');
    hamMenu.classList.remove('a');
    hamD = true
  }
})