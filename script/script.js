// ****************** QUESTÃO 1 *******************
dataExtenso = function () {
  let data = prompt("Informe uma data no formato dd/mm/aaaa ");

  let result1 = data.split("/");
  let result2 = data.split("/");

  let mes = result1.splice("1");
  mes = mes.splice(" ", 1);
  let dia = result1.splice(" ", 2);
  let ano = result2.splice("2");

  //Verificando o mes do ano
  if (mes == 01) {
    mes = "janeiro";

    //imprimindo na tela
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 02) {
    mes = "favereiro";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 03) {
    mes = "março";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 04) {
    mes = "abril";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 05) {
    mes = "maio";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 06) {
    mes = "junho";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 07) {
    mes = "julho";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 08) {
    mes = "agosto";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 09) {
    mes = "setembro";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 10) {
    mes = "outubro";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 11) {
    mes = "novembro";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  } else if (mes == 12) {
    mes = "dezembro";
    document.getElementById("dataExtenso").innerHTML =
      dia + " de " + mes + " de " + ano;
  }
};

// ****************** QUESTÃO 2 *******************
function Carta(pNumero, pNaipe) {
  this.numero = pNumero;
  this.naipe = pNaipe;
  this.exibir = function () {
    // return (document.getElementById("carta").innerHTML =
    //   this.numero + " de " + this.naipe);
    return alert(this.numero + " de " + this.naipe);
  };
}

chamaCarta = function () {
  const carta = new Carta(7, "paus");
  carta.exibir();
};

// ****************** QUESTÃO 3 *******************
encaixa = function () {
  let a = parseInt(prompt("Informe o primeiro numero"));
  let b = parseInt(prompt("Informe o segundo numero"));
  var valorA = a.toString().split("");
  var valorB = b.toString().split("");
  if (b === a) {
    document.getElementById("encaixe").innerHTML = "Encaixa";
  } else if (a > b) {
    var tamanhoB = valorA.length - valorB.length;
    var cont = 0;
    for (let k = 0; k < valorB.length; k++) {
      for (let i = tamanhoB; i < valorA.length; i++) {
        if (valorA[i] === valorB[k]) {
          var aux = 1;
        }
      }
      if (aux > 0) {
        cont++;
      }
    }
    if (cont == valorB.length) {
      document.getElementById("encaixe").innerHTML = "Encaixa";
    } else {
      document.getElementById("encaixe").innerHTML = " Não encaixa";
    }
  } else {
    document.getElementById("encaixe").innerHTML = " Não encaixa";
  }
};

// ****************** QUESTÃO 4 *******************
function getRandom(min, max) {
  return Math.random() * (max - min);
}

Sequencia = function () {
  let n = prompt("Informe numero:");
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(getRandom(-2, 1));
  }

  let arrayVerificado = [];

  for (let i = 0; i < array.length; i++) {
    let contador = 0;
    let repetiu = false;

    for (let z = 0; z < arrayVerificado.length; z++) {
      if (arrayVerificado[z] == array[i]) {
        //Verifico se no array auxiliar, o número já foi verificado, caso sim, seto a letiavel repetiu para true.
        repetiu = true;
      }
    }
    if (repetiu == false) {
      //caso não tenha repetido, eu deixo o padrão false.
      arrayVerificado.push(array[i]); //add no meu array auxiliar que este número vai ser verificado
      for (let j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
          //se ele achar, faço meu contador acrescentar +1
          contador++;
        }
      }
      alert("O número: " + array[i] + " repetiu: " + contador + " vezes");
    }
  }
  alert("Sequencia: " + array);
};

// ****************** QUESTÃO 5 *******************

Frase = function () {
  var frase = prompt("Informe a frase:");
  var fraseCase = frase.toUpperCase();
  var palavra = prompt("Informe a palavra:");
  var palavraCase = palavra.toUpperCase();

  var arrayPalavras = fraseCase.split(" ");
  var quantidade = 0;

  for (var i = 0; i < arrayPalavras.length; i++) {
    if (arrayPalavras[i].includes(palavraCase)) {
      quantidade++;
    }
  }

  document.getElementById("frase").innerHTML =
    " A palavra " + palavraCase + " apareceu " + quantidade + " vezes ";
};

// ****************** QUESTÃO 6 *******************
this.salario;
this.percentual;
this.aumento;
this.novoSalario;
this.perc20 = 0.2;
this.perc15 = 0.15;
this.perc10 = 0.1;
this.perc5 = 0.05;

SalarioColaborador = function () {
  salario = Number.parseInt(prompt("Informe o valor do salário:"));
  if (salario <= 280) {
    aumento = salario * 0.2;
    novoSalario = aumento + salario;
    percentual = perc20 * 100;
  } else if (salario > 280 && salario <= 700) {
    aumento = salario * 0.15;
    novoSalario = aumento + salario;
    percentual = perc15 * 100;
  } else if (salario > 700 && salario <= 1500) {
    aumento = salario * 0.1;
    novoSalario = aumento + salario;
    percentual = perc10 * 100;
  }

  if (salario > 1500) {
    aumento = salario * 0.1;
    novoSalario = aumento + salario;
    percentual = perc10 * 100;
  }

  document.getElementById("antigo").innerHTML =
    "O salário antes do reajuste: R$" + salario;
  document.getElementById("percentual").innerHTML =
    "<br> O percentual foi de:" + percentual + "%";
  document.getElementById("aumento").innerHTML =
    "<br> O aumento foi de: R$" + aumento;
  document.getElementById("reajuste").innerHTML =
    "<br> O salario após o reajuste: R$" + novoSalario;
};
