setInterval(function carregar() {
    var cabecalho = window.document.getElementById('cabecalho')
    var rodape = window.document.getElementById('rodape')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()    
    //msg.innerHTML = `Agora são ${hora} horas.`
    msg.innerHTML = `Agora são ${data.toLocaleTimeString()}`
    
    if (hora > 3 && hora < 12) {
        // BOM DIA!
        cabecalho.style.color = "#000000"
        rodape.style.color = "#000000"
        msg.innerHTML += `<p>Bom dia!</p>`
        img.src = 'imgs/manha.png'
        document.body.style.background = "#fdf0e1"
        
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        msg.innerHTML += `<p>Boa tarde!</p>`
        img.src = 'imgs/tarde.png'
        document.body.style.background = "#b9846f"
    } else {
        // BOA NOITE!
        msg.innerHTML += `<p>Boa noite!</p>`
        img.src = 'imgs/noite.png'
        document.body.style.background = "#1f3654"
    }
}, 1000);
