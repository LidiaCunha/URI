const area = function (){

    let raio = document.getElementById("raio").value;
    raio = parseFloat(raio);

    let area = 3.14 * (raio * raio);

    const resultado = document.getElementById("resultado");
    resultado.value = `A =  ${area}`;
}

document.getElementById("calcular").addEventListener('click', area)

