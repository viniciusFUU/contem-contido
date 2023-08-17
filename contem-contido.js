const checkButton = document.getElementById("button");
//Campos de entrada de dados
const setAInput = document.getElementById("setA");
const setBInput = document.getElementById("setB");
//Onde o resultado será exibido
const resultText = document.getElementById("resultC");

//adicionando evento de click no bottão
checkButton.addEventListener("click", () => {
  //"set" transforma em conjuntos os dados e o "split" separa os objetos por vírgulas
  //"() =>" função de callback
  const setA = new Set(setAInput.value.split(",").map((item) => item.trim()));
  const setB = new Set(setBInput.value.split(",").map((item) => item.trim()));

  //definindo dois parâmetros para função isSubset, verificando se os objetos do setA estão contidos no setB
  if (isSubset(setA, setB)) {
    resultText.textContent = "Conjunto A é subconjunto de Conjunto B.";
    //verficando se os objetos do setB estão contidos no setA
  } else if (isSubset(setB, setA)) {
    resultText.textContent = "Conjunto B é subconjunto de Conjunto A.";
    //caso nenhuma das anteriores procederem:
  } else {
    resultText.textContent =
      "Os conjuntos não possuem relação de contém e contido.";
  }
});

function isSubset(setA, setB) {
  for (const item of setA) {
    if (!setB.has(item)) {
      return false;
    }
  }
  return true;
}
