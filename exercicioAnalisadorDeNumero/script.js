let num = document.getElementById('txtnum')
let array = document.getElementById('txtlis') 
let res = document.getElementById('res')
var lista = []

function adicionar(){
    var n = Number(num.value)
    if(n<=0 || n>100 || lista.indexOf(n) != -1){ // Verifica se o número esta entre 1 e 100 e se já não esta na lista
        window.alert('Valor inválido! Digite um número entre 1 e 100 que ainda não esteja na lista.')
    } else {
        lista.push(n)
        let item = document.createElement('option')
        item.text = `O valor ${n} foi adicionado`
        item.value = `lista[0]`
        array.appendChild(item) 
        res.innerHTML = '' // Apaga resultado após inserir novo número
    }
    num.value = '' // Apaga valor após ser adicionado a lista
    num.focus() // Foco volta para o número
}

function finalizar(){
    if (lista.lenght == 0){ // Verifica se teve a entrada de valores
        window.alert('Adicione valores antes de finalizar!')
    } else {
        lista.sort((a,b) => a-b)
        let quant = lista.length
        let maior = lista[lista.length-1]
        let menor = lista[0]
        let soma = 0
        for(let pos = 0; pos<lista.length; pos++){
            soma += lista[pos]
        }
         let media = soma / lista.length

         res.innerHTML = ''

         res.innerHTML +=`Foram cadastrados ${quant} números.<br>O maior número foi ${maior}.<br>O menor valor foi ${menor}.<br>A soma de todos os valores foi de ${soma}.<br>A média dos valores foi de ${media}.` 
    }
    
    
}
 
