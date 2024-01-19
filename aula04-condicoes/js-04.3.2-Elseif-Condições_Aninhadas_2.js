var horaSistema = new Date()
var hora = horaSistema.getHours()
console.log(`Agora são exatamente ${horaSistema.getHours()} horas e ${horaSistema.getMinutes()} minutos.`)
if (hora >= 0 && hora < 5) {
    console.log(`Boa madrugada!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}




