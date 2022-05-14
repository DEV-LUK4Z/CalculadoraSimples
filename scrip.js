const visor = document.querySelector('.visor')
const igual = document.querySelector('.igual')

function inserir(valor){
    visor.innerHTML += valor
}

function limpar(){
    visor.innerHTML = ' '
}

function apagar(){
    if (visor.textContent){
        let tela = document.getElementById('tela').innerHTML
        visor.innerHTML = tela.substring(0, tela.length -1)
    }
}

function resultado(){
    if (visor.textContent != 'Erro'){
        document.getElementById('tela').innerHTML = eval(visor.innerHTML)
    }
}