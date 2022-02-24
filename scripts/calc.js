// função para calcular média das notas

function Calcular() {
  var nota1 = document.getElementById("nota1");
  var nota2 = document.getElementById("nota2");
  var nota3 = document.getElementById("nota3");
  var nota4 = document.getElementById("nota4");

  // converter de string para float
  var nota1Converted = parseFloat(nota1.value);
  var nota2Converted = parseFloat(nota2.value);
  var nota3Converted = parseFloat(nota3.value);
  var nota4Converted = parseFloat(nota4.value);

  // calculo da média
  var media =
    (nota1Converted + nota2Converted + nota3Converted + nota4Converted) / 4;
  var mediaRounded = parseFloat(media.toFixed(1));

  // imprimir resultado no HTML
  var mediaCalculada = document.getElementById("notaFinal");
  var notaFinal = `Sua média final é ${mediaRounded}`;
  mediaCalculada.innerHTML = notaFinal;
}
