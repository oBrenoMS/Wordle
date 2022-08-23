const palavrasValidas = ["ARROZ", "amora", "teste"];
const palavraDoDia = "ARROZ";
let linha = 0;
let entrada = [];
let chancesRestantes = 6
const ouvinteDeTeclas = (event) => {
  let char = event.key.toUpperCase();
  let alfabeto = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'ENTER', 'BACKSPACE'
  ];
  if (!alfabeto.includes(char)) {
    console.log("tecla inválida", char);
    return null;
  } else if (char == "ENTER" && entrada.length >= 5) {
    validarEntrada();
    entrada.splice(0, entrada.length);
    linha += 1;
    return;
  } else if (char == "BACKSPACE") {
    entrada.pop();
    console.log(entrada);
    apagarLetra();
    return;
  } else if (char == "ENTER") {
    return null;
  }
  if (entrada.length < 5) {
    entrada.push(char);
    exibeLetra(char);
  }
};
function apagarLetra() {
  let elId = `l${linha}c${entrada.length}`;
  const el = document.getElementById(elId);
  el.textContent = "";
}
function exibeLetra(char) {
  let elId = `l${linha}c${entrada.length - 1}`;
  const el = document.getElementById(elId);
  el.textContent = char;

}

/* function tecladoFuncional(tag) {
  console.log(tag.innerHTML)
  let elId = `l${0}c${0}`;
  const el = document.getElementById(elId);
  el.textContent = tag.innerHTML
  entender eventos como botar html com text content inner html ++
} */
/*           if (resultado[i] == palavraDoDia[i] && newWord.includes(entrada[i])) {
            corDaLetra = '#c9b458'//AMARELO
            console.log("entrada no amarelo")
            console.log(newWord)
            console.log("ACIMAAAAAA")
          } */
/*           console.log("entrooooo")
          let letra = entrada[i]
          console.log(letra)
          if (palavraDoDia.replace(new RegExp('R', ""), ""))
          newWord = palavraDoDia.replace(new RegExp('R', ""), "")
          console.log(newWord)
          console.log("ACIMAAAAAA") */
          /*           var reg = new RegExp(letra, "g");
                    palavraDoDia.replace(reg, ""); */
/*           console.log(palavraDoDia.split('').splice(0, 1))  */
/*           var acertei = arrayDoDia.splice([i], 1) */

function validarEntrada() {
  resultado = entrada[0] + entrada[1] + entrada[2] + entrada[3] + entrada[4];
  console.log("validar se " + resultado + " é igual " + palavraDoDia);
  console.log(resultado)
  console.log(entrada)

  if (entrada.length != 5) {
    alert("Digite 5 letras")
    return
  }
/*   if (!PALAVRAS.includes(entrada)) {
    alert("Palavra não reconhecida")
    return
} */

  for (let i = 0; i < 5; i++) {
    let corDaLetra = ''
    let elId = `l${linha}c${i}`;
    let el = document.getElementById(elId)
    let amarelos = []
    let posicaoDaLetra = palavraDoDia.indexOf(entrada[i])
    let newWord = palavraDoDia.replace(new RegExp(resultado[i], ""), "")

    if (posicaoDaLetra === -1) {
      corDaLetra = '#787c7e' //CINZA
    } else if (resultado[i] === palavraDoDia[i]) {
      //atenção com entrada e resultado
          corDaLetra = '#6aaa64'//VERDE
          console.log(resultado)
        } else if (palavraDoDia.includes(resultado[i])){
          corDaLetra = '#c9b458'//AMARELO
          console.log("entrou no amarelo")
          console.log(entrada[i])
          amarelos.push(resultado[i])
        }
        palavraDoDia[posicaoDaLetra] = "#"


    for (let j = 0; j < amarelos.length; j++) {
      if (newWord.includes(amarelos[j])) {
        corDaLetra = '#c9b458' //yelou
        let elId = `l${linha}c${j}`;
        let el = document.getElementById(elId);
/*         el.classList.add("correct"); */
      } else {
        el.classList.add("incorrect");
        corDaLetra = '#787c7e' //CINZA
        console.log("loooooop")
        console.log(entrada[j])
        console.log(amarelos[j])
        console.log(newWord)
      }
    }

  let delay = 250 * i
  setTimeout(()=> {
      //shade box
      el.style.backgroundColor = corDaLetra
      /* shadeKeyBoard(letra, corDaLetra) */
  }, delay)
  
  }
/*   function finalCheck() {
    //depois de checar toda a linha, devo chamar essa função para corrigir os amarelos.
    if (!newWord.includes(amarelos[i])) {
      corDaLetra = '#787c7e' //CINZA
    }
  } */
/*             if (verdes.includes(resultado[i])) {
              //falta quantidade, maybe colocar id neles em cada.
              corDaLetra = 'grey'
              console.log("jafoi")
            } */

  if (resultado === palavraDoDia) {
    alert("GANHOUUUU")
    chancesRestantes = 0
  } else {
    chancesRestantes -= 1;
    entrada = [];
    proximaLetra = 0;
    console.log("Chances")
    console.log(chancesRestantes)
    if (chancesRestantes < 1) {
      alert("acabaram as tentativas")
      alert(`A palavra certa era: "${palavraDoDia}"`)
    }
  }
}
document.body.addEventListener("keydown", ouvinteDeTeclas);