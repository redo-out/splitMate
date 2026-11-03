
// Récupérer les éléments HTML
let textInput = document.getElementById("text-input");
let montantInput = document.getElementById("montant-input");
let inputDate = document.getElementById("input-date");
let categorieInput = document.getElementById("categorie-input");
let payeurInput = document.getElementById("payeur-input");

let button = document.getElementById("button-despense");
let modifyBtn = document.getElementById("modifyBtn");

let despensesAray = JSON.parse(localStorage.getItem("despensesAray")) || [];


// Créer une dépense
function creatDespense() {

    let textInputValue = textInput.value.trim();
    let montantInputValue = montantInput.value.trim();
    let inputDateValue = inputDate.value;
    let categorieInputValue = categorieInput.value;
    let payeurInputValue = payeurInput.value;

    if (
        textInputValue.length <= 0 ||
        montantInputValue.length <= 0 ||
        inputDateValue.length <= 0
    ) {
        return;
    }

    let despense = {
        id: Date.now(),
        name: textInputValue,
        montant: montantInputValue,
        date: inputDateValue,
        categorie: categorieInputValue,
        payeur: payeurInputValue
    };

    despensesAray.push(despense);

    localStorage.setItem("despensesAray", JSON.stringify(despensesAray));

    textInput.value = "";
    montantInput.value = "";
    inputDate.value = "";

}

button.addEventListener("click", creatDespense);


// Récupérer la dépense à modifier
let despenseIndex = localStorage.getItem("despenseIndex");

if (despenseIndex !== null) {

    let index = Number(despenseIndex);

    let despense = despensesAray[index];

    if (despense) {

        textInput.value = despense.name;
        montantInput.value = despense.montant;
        inputDate.value = despense.date;
        categorieInput.value = despense.categorie;
        payeurInput.value = despense.payeur;

        button.style.display = "none";
        modifyBtn.style.display = "inline";
    }
}


// Enregistrer les modifications
modifyBtn.addEventListener("click", function (event) {

    event.preventDefault();

    let index = Number(localStorage.getItem("despenseIndex"));

    if (localStorage.getItem("despenseIndex") === null) {
        return;
    }

    if (!despensesAray[index]) {
        return;
    }

    despensesAray[index].name = textInput.value.trim();
    despensesAray[index].montant = montantInput.value;
    despensesAray[index].date = inputDate.value;
    despensesAray[index].categorie = categorieInput.value;
    despensesAray[index].payeur = payeurInput.value;

    localStorage.setItem("despensesAray", JSON.stringify(despensesAray));

    localStorage.removeItem("despenseIndex");

    window.location.href = "Dashboard.html";

});
