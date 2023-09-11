function verificacaoChute(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido. Fale um numéro</div>'
        return}

    if(numeroAlemDoPadrao(numero)){
        elementoChute.innerHTML += `<div>Errou!
        O numero secreto está entre: ${menorValor} e ${maiorValor}</div>`
        return}

    if(numero === numeroAleatorio){
        document.body.innerHTML = `<h2> Parabéns !!! Você acertou </h2>
        <h3> O número secreto é ${numeroAleatorio} </h3>
        <button id="jogar-novamente" class="botao-jogar-novamente">Jogar Novamente</button>
    `}

    else if(numero > numeroAleatorio){

       elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-circle-down"></i></div>`

    } else{

       elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-circle-up"></i></div>`
    }



    function chuteInvalido() {
        return Number.isNaN(numero);
    }

    function numeroAlemDoPadrao (numero) {
        return numero > maiorValor || numero < menorValor
    }
}

document.body.addEventListener('click' , e=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

} )