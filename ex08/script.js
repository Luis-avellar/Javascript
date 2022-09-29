function verificar () {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','foto-bebe.png')
            } else if(idade <21) {
                // jovem
                img.setAttribute('src','foto-homem-j.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src','foto-homem-a.png')
            } else {
                // velho
                img.setAttribute('src','foto-homem-v.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','foto-bebe.png')
            } else if(idade <21) {
                // jovem
                img.setAttribute('src','foto-mulher-j.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src','foto-mulher-a.png')
            } else {
                // velho
                img.setAttribute('src','foto-mulher-v.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}