let textInput = document.getElementById("text-input");
let montantInput = document.getElementById("montant-input");
let inputDate = document.getElementById("input-date");
let categorieInput = document.getElementById("categorie-input");
let payeurInput = document.getElementById("payeur-input");
let button = document.getElementById("button-despense");
let despensesAray = [];
let despenseId = 1;

function creatDespense() {
  let textInputValue = document.getElementById("text-input").value.trim();
  let montantInputValue = document.getElementById("montant-input").value.trim();
  let inputDateValue = document.getElementById("input-date").value;
  let categorieInputValue = document.getElementById("categorie-input").value;
  let payeurInputValue = document.getElementById("payeur-input").value;
  if (textInputValue.length <= 0 ||montantInputValue.length <= 0 ||inputDateValue.length <= 0) {
    return;
  }
  let despense = {
    id: despenseId++,
    name: textInputValue,
    montant: montantInputValue,
    date: inputDateValue,
    categorie: categorieInputValue,
    payeur: payeurInputValue
  };
  despensesAray.push(despense);
  console.log(despensesAray);
  
  textInput.value = "";
  inputDate.value = "";
  montantInput.value = "";
}
button.addEventListener('click', creatDespense);
