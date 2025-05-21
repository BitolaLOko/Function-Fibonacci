Função 

No ramo da programação serve como uma alternativa de deixar a linha de código mais organizada e principalmente evitar a repetição de comonandos e argumentos na linha de código. 
Resumindo, as funções são estrutura de código que são aproveitados durante a execução e oque estiver dentro de sua estrutura(escopo), fica separado do escopo global.
Toda função receberá “argumentos” para sua execução.
Exemplo:

function somar(a , b){
return a + b
}

console.log(somar(1 , 3))
// resultado = 4

Funções em looping:

Funções em looping, tem como em seu escopo uma "ação" que ira executar em repetição até a condição exigida.
Exemplo:

function numeros(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

numeros(10);
// será um looping do número 0 até a condição exigida, no caso "10". 0 1 2 3 4 5 6 7 8 9 10

Função recursiva:

Função recursiva é aquela que em seu escopo acaba por "chamar" ela mesma durante sua execução. Lembrando que é preciso de um parâmetro de parada.
Exemplo:

function verificarNumPar(n) {
  if (n - 1 < 2) {
    console.log("parar recurção");
  } else if (n % 2 != 0) {
    console.log(`ímpar: ${n}`);
    return parOuImpar(n - 1);
  } else {
    console.log(`par: ${n}`);
    return parOuImpar(n - 2);
  }
}

parOuImpar(11);
// resultado = ímpar: 11 par: 10 par: 8 par: 6 par: 4 parar recurção.
