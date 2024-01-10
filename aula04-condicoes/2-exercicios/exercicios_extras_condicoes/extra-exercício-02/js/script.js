function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var pessoa = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            
            if (idade >= 0 && idade < 5) {
                // Bebê
                pessoa = 'bebê'
                img.setAttribute('src', 'imgs/bebe_m.png')
            } else if (idade < 13){
                // Criança
                pessoa = 'menino'
                img.setAttribute('src', 'imgs/crianca_m.png')
            } else if (idade < 25) {
                // Jovem
                pessoa = 'rapaz'
                img.setAttribute('src', 'imgs/jovem_m.png')
            } else if (idade < 60) {
                // Adulto
                pessoa = 'homem'
                img.setAttribute('src', 'imgs/adulto_m.png')
            } else {
                // Idoso
                pessoa = 'idoso'
                img.setAttribute('src', 'imgs/idoso_m.png')
            }
        } else if (fsex[1].checked) {
            
            if (idade >= 0 && idade < 5) {
                // Bebê
                pessoa = 'bebê'
                img.setAttribute('src', 'imgs/bebe_f.png')
            } else if (idade < 13){
                // Criança
                pessoa = 'menina'
                img.setAttribute('src', 'imgs/crianca_f.png')
            } else if (idade < 25) {
                // Jovem
                pessoa = 'moça'
                img.setAttribute('src', 'imgs/jovem_f.png')
            } else if (idade < 60) {
                // Adulto
                pessoa = 'mulher'
                img.setAttribute('src', 'imgs/adulto_f.png')
            } else {
                // Idoso
                pessoa = 'idosa'
                img.setAttribute('src', 'imgs/idoso_f.png')
            }
        }
        res.innerHTML = `<p>Essa pessoa é: ${pessoa} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}