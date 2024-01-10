window.onload = function() {
    var hatch = document.getElementById('hatch');
    var seda = document.getElementById('seda');
    var esportivo = document.getElementById('esportivo');
    var branco = document.getElementById('branco');
    var prata = document.getElementById('prata');
    var preto = document.getElementById('preto');
    var vermelho = document.getElementById('vermelho');

    hatch.onclick = handler;
    seda.onclick = handler;
    esportivo.onclick = handler;
    branco.onclick = handler;
    prata.onclick = handler;
    preto.onclick = handler;
    vermelho.onclick = handler;
  }

function handler() {
    var img = document.getElementById('img');

    if (hatch.checked) {
        img.setAttribute('src', 'imgs/hatch.png')
    } else if (seda.checked) {
        img.setAttribute('src', 'imgs/seda.png')
    } else if (esportivo.checked) {
        img.setAttribute('src', 'imgs/esportivo.png')
    }

    if (branco.checked) {
        document.body.style.background = '#ffffff';
    } else if (prata.checked) {
        document.body.style.background = '#888686';
    } else if (preto.checked) {
        document.body.style.background = '#2B2730';
    } else if (vermelho.checked) {
        document.body.style.background = '#e62020';
    }
}

function verificar() {
    dias = document.getElementById('txtdias')
    res = document.getElementById('res')

    if (dias.value.length == 0) {
        window.alert('[ERRO] Por favor, preencha a quantidade de dias.')
    } else if (dias.value == 0 || dias.value > 30) {
        window.alert('[ERRO] Por favor, escolha um período de 1 a 30 dias.')
    } else {
        let modelo = document.getElementsByName('radmodelo')
        let valor = 0
        let dias = document.getElementById('txtdias')

        if (modelo[0].checked) {
            valor = 80
        } else if (modelo[1].checked) {
            valor = 100
        } else if (modelo[2].checked) {
            valor = 300
        }

        let aluguel = valor * dias.value
        res.innerHTML = `<p><br>O valor total do alguel do carro ficará em <strong>${aluguel.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</strong> para um período de <strong>${dias.value}</strong> dias.</p>`
    }
}