function calcular(){
    var alc = document.getElementById('txtalc')
    var gas = document.getElementById('txtgas')
    var res = document.getElementById('res')

    if (alc.value.length == 0 || gas.value.length == 0) {
        res.innerHTML = 'Impossível calcular, digite os preços do Álcool e Gasolina.'
        res2.innerHTML = ""
    } else {
        var alcconv = Number(alc.value)
        var gasconv = Number(gas.value)
        var calc = alcconv / gasconv
        res.innerHTML = `A proporção atual entre Álcool e Gasolina é de ${calc}`
    
        if(calc >= 0.74){
        res2.innerHTML = 'Abasteça com Gasolina'
        } else {
        res2.innerHTML = 'Abasteça com Álcool'
        }
    }
}    
