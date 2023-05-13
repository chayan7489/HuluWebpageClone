const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');


loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);


function openModal(){
    // we have kept display as none in css so once modal is clicked open it and change display to block
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = "none";
}

function outsideClick(e){
    if(e.target == modal){
        closeModal();
    }
}