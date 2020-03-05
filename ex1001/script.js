//Criar função antes de chama-la
//Script no html tem que ser depois no <main>
const $calcular = document.getElementById("calcular");

console.log ($calcular);

const soma = function (){
    let a = document.getElementById("n1").value;
    let b = document.getElementById("n2").value;

    a = parseInt(a);
    b = parseInt(b);

    const x = (a+b);

    const resultado = document.getElementById("resultado");
    resultado.value = `X =  ${x}`;
}

$calcular.addEventListener('click', soma);






    
