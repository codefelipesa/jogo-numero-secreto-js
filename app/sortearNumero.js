const maiorValor = 100
const menorValor = 1

const numeroAleatorio = geradorNumero()

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

function geradorNumero() {
    return parseInt(Math.random()* maiorValor +1)
    
}


console.log(numeroAleatorio)
