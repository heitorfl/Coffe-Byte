const button = document.querySelector("btn");
const modal = document.querySelector("dialog");

function mostrar(){
    modal.classList.add("active")
    modal.showModal();
}

function fechar(){
    modal.classList.remove("active")
    modal.close(); 
}