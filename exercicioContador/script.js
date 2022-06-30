function contar(){
    let inicio = document.getElementById ('tini')
    let fim = document.getElementById ('tfim')
    let passo = document.getElementById ('tpas')
    let res = document.getElementById ('res')

    // Verificando se os campos foram preenchidos
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else{ 
        res.innerHTML = 'Contando: '
        //Tranformando as strings e numbers
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<= 0){
        window.alert("Este passo é inválido! Será considerado passo 1.")
        p = 1
        }
        if(i < f){
            // Contagem crescente
            for (let cont = i; cont <= f; cont += p){
            res.innerHTML += `${cont} \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for(let cont = i; cont >= f; cont -= p){
             res.innerHTML += `${cont} \u{1F449}`   
            }
        }
    }
        res.innerHTML += `\u{1F3C1}`
}
    
