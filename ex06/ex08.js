var agora = new Date()
var time = agora.getHours()
var time = 4
console.log(`Agora são ${time} horas.`)
if (time >=6 && time < 12) {
    console.log('Bom dia!')
} else if (time >= 12 && time < 18) {
    console.log('Boa tarde.')
} else if (time >= 18 && time < 24) {
    console.log('Boa noite')
} else {
    console.log('Madrugada')
}