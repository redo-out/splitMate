// crear les despense
let textInput = document.getElementById("text-input");
let montantInput = document.getElementById("montant-input");
let inputDate = document.getElementById("input-date");
let categorieInput = document.getElementById("categorie-input");
let payeurInput = document.getElementById("payeur-input");
let button = document.getElementById("button-despense");
let despensesAray = [];3
let despenseId = 1;
let totalDespanse = 0;

function creatDespense() {
  let textInputValue = document.getElementById("text-input").value.trim();
  let montantInputValue = document.getElementById("montant-input").value.trim();
  let inputDateValue = document.getElementById("input-date").value;
  let categorieInputValue = document.getElementById("categorie-input").value;
  let payeurInputValue = document.getElementById("payeur-input").value;
  if (textInputValue.length <= 0 ||montantInputValue.length <= 0 ||inputDateValue.length <= 0) {
    return;
  }
  totalDespanse += Number(montantInputValue);
  console.log(totalDespanse);
  
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

// ajouter les despense au dashbord

let despensesDash = document.getElementById('despenses-dash');
function addDepense(){
    temp = '';
    despensesAray.forEach((item)=>{
        temp += `<li> ${item.payeurInputValue} de group ${item.groupName} ==> ${item.montantInputValue}
        categorie: ${item.categorieInputValue} au ${item.inputDateValue}`
    })
    despensesDash.innerHTML = temp;
}



