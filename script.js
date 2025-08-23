function CalcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (!peso || !altura) {
        resultado.innerText = "Por favor, preencha peso e altura.";
        return;
    }
    const imc = peso / (altura * altura);
    let classificação = "";
    
    if (imc < 18.5) classificação = "Abaixo do peso";
    else if (imc < 25) classificação = "Peso normal";
    else if (imc < 30) classificação = "Sobrepeso";
    else classificação = "Obesidade";
    
    resultado.innerText = `Seu IMC é ${imc.toFixed(2)} (${classificação})`;
}