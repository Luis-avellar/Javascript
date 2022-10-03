function calcular(){
    let ini = window.document.getElementById('n1')
    let fim = window.document.getElementById('n2')
    let passo = window.document.querySelector('#n3')
    let res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Dados incorretos!')
        res.innerHTML = 'Impossível de contar.'
    }else{
        res.innerHTML = 'Resultado:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
       
        if(i<f){
            //Contagem crescente
            for(cal=i; cal<=f; cal+=p){
                res.innerHTML+=` ${cal} \u{1F449}`
            }    
        }else {
            //Contagem decrescente
            for(cal=i; cal>=f; cal-=p){
                res.innerHTML+=` ${cal} \u{1F449}`
            } 
        }
        res.innerHTML+=`\u{1F3C1}`
    }
}