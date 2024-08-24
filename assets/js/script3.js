document.getElementById('btn-sumar').addEventListener('click', function() {
    let valor1 = parseInt(document.getElementById('valor1'). value) || 0;
    let valor2 = parseInt(document.getElementById('valor2').value) || 0;
    let resultado = valor1 + valor2;
    document.querySelector('.resultado').textContent = resultado;
    
});

document.getElementById('btn-restar').addEventListener('click', function () {
    let valor1 = parseInt(document.getElementById('valor1').value) || 0;
    let valor2 = parseInt(document.getElementById('valor2').value) || 0;
    let resultado = valor1 - valor2;
    if (resultado < 0) {
        document.querySelector('.resultado').textContent = 0;
    } else {
        document.querySelector('.resultado').textContent = resultado;
    }
});