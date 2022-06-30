function gerarTabuada(){
    let numero = document.getElementById('num')
    let tabuada = document.getElementById('tab')

    if (numero.value.length == 0){
        window.alert ('Digite um número para gerar a tabuada.')
    } else {
        let n = Number(numero.value)
        tabuada.innerHTML = '' // Limpa o select após mostrar a tabuada
        for (let cont = 0; cont <= 10; cont ++){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}` // Preenche o texto do seletor
            item.value = `tab${cont}` // Preenche o valor do seletor
            tabuada.appendChild(item)
        }
    }
}