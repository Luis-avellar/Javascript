function gerar(){
    let n1 = document.getElementById('txtnumber')
    let res = document.getElementById('txtres')
    let res2

    
    if(n1.value.length == null){
        alert('[ERRO]Você deve informar um numero válido')
    }else {
        for(c=0;c<=10;c++){
            res2= Number(n1.value)*c
            res.innerHTML = `${n1} x ${c} = ${res2}`
        }
    }
    
}