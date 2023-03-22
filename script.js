const valor = document.querySelector('#value');
const btnMais = document.querySelector('.btn-mais');
const btnMenos = document.querySelector('.btn-menos');

function adicionar() {
    valor.innerHTML = `${parseInt(valor.innerText) + 1}` 
}

function diminuir() {
    valor.innerHTML = `${parseInt(valor.innerText) - 1}` 
}

btnMais.addEventListener('click', adicionar);
btnMenos.addEventListener('click', diminuir);