// group js
// group js
// group js
let dateHandler = formatDate()
let NomGroupe = document.getElementById("nom");
let DescriptionGroupes = document.getElementById("description");
let DeviseGroupe = document.getElementById("Devise");
let DateGroupe = document.getElementById("data");
let formGroupe = document.getElementById("formGroupe");
let groupes = JSON.parse(localStorage.getItem("groupes")) || []; //fallback

function creerGroupe(event) {
  event.preventDefault();
  let NomGroupeValue = document.getElementById("nom").value.trim();
  let DescriptionGroupesValue = document
    .getElementById("description")
    .value.trim();
  let DeviseGroupeValue = document.getElementById("Devise").value;
  let DateGroupeValue = document.getElementById("data").value;

  if (
    NomGroupeValue.length <= 0 ||
    DeviseGroupeValue.length <= 0 ||
    DateGroupeValue.length <= 0 ||
    DateGroupeValue != dateHandler
  ) {
    return;
  }
  const groupe = {
    id: Date.now(),
    nom: NomGroupeValue,
    description: DescriptionGroupesValue,
    devise: DeviseGroupeValue,
    date: DateGroupeValue,
  };
  groupes.push(groupe);
  localStorage.setItem("groupes", JSON.stringify(groupes));
  NomGroupe.value = "";
  DescriptionGroupes.value = "";
  DateGroupe.value = "";
}
if (formGroupe) {
  formGroupe.addEventListener("submit", creerGroupe);
}

// despenses js
// despenses js
// despenses js
let textInput = document.getElementById("text-input");
let montantInput = document.getElementById("montant-input");
let inputDate = document.getElementById("input-date");
let categorieInput = document.getElementById("categorie-input");
let payeurInput = document.getElementById("payeur-input");
let buttonDespense = document.getElementById("button-despense");
let despensesAray = JSON.parse(localStorage.getItem("despensesAray")) || [];
let totalDespanse = 0;

// function payeurInputHnadler(){
//   members.forEach((member)=>{
//     option.innerHTML = `<option value="">${member.name}</option>`
//   })
//   payeurInput.appendChild(option);
// }
// payeurInputHnadler();

function creatDespense() {
  let textInputValue = document.getElementById("text-input").value.trim();
  let montantInputValue = document.getElementById("montant-input").value.trim();
  let inputDateValue = document.getElementById("input-date").value;
  let categorieInputValue = document.getElementById("categorie-input").value;
  let payeurInputValue = document.getElementById("payeur-input").value;
  console.log(dateHandler, " ", inputDateValue)
  if (
    textInputValue.length <= 0 ||
    montantInputValue.length <= 0 ||
    inputDateValue.length <= 0 ||
    inputDateValue != dateHandler
  ) {
    return;
  }
  totalDespanse += Number(montantInputValue);
  let despense = {
    id: Date.now(),
    name: textInputValue,
    montant: montantInputValue,
    date: inputDateValue,
    categorie: categorieInputValue,
    payeur: payeurInputValue,
  };
  despensesAray.push(despense);
  console.log(despensesAray); 
  localStorage.setItem("despensesAray", JSON.stringify(despensesAray));
  textInput.value = "";
  inputDate.value = "";
  montantInput.value = "";
  categorieInput.value = "";
}
if (buttonDespense) {
  buttonDespense.addEventListener("click", creatDespense);
}
// soldes js
// soldes js
// soldes js

// dashboard
// dashboard
// dashboard
// dashboard

// filter et affichage des groupes et des depenses:
const listGroupe = document.getElementById("listGroupes");
const listDesponse = document.getElementById("listDesponse");
const filterGroupe = document.getElementById("filterBottunGroupe");

function filtrerGroupesDevise() {
    listGroupe.innerHTML = "";
    groupes.forEach((element) => {
        if (element.devise.includes(filterGroupe.value)) {
            listGroupe.innerHTML += `
                <li>
                    <span>
                        ${element.nom} ==>
                        ${element.description} ==>
                        ${element.devise} ==>
                        ${element.date}
                    </span>
                    <div>
                        <button class="groupe-delete-button" data-id="${element.id}">
                            Supprimer
                        </button>

                        <button class="groupe-ajoute-button" data-id="${element.id}">
                            Ajouter member
                        </button>
                        <button class="groupe-modifier-button" data-id="${element.id}">
                            Modifier
                        </button>
                    </div>
                </li>
            `;
        }else if (filterGroupe.value === "Tous") {
            listGroupe.innerHTML += `
                <li>
                    <span>
                        ${element.nom} ==>
                        ${element.description} ==>
                        ${element.devise} ==>
                        ${element.date}
                    </span>

                    <div>
                        <button class="groupe-delete-button" data-id="${element.id}">
                            Supprimer
                        </button>

                        <button class="groupe-ajoute-button" data-id="${element.id}">
                            Ajouter member
                        </button>
                        <button class="groupe-modifier-button" data-id="${element.id}">
                            Modifier
                        </button>
                    </div>
                </li>
            `;
        }
    });
};
if(filterGroupe){
    filterGroupe.addEventListener("change", filtrerGroupesDevise);
    filtrerGroupesDevise();
};
let filterDespense = document.getElementById("filterBottundepense");
function filtrerDespenseCategorie() {
    listDesponse.innerHTML = "";
    despensesAray.forEach((element) => {
        if (element.categorie.includes(filterDespense.value)) {
            listDesponse.innerHTML += `
                <li style="display: flex; justify-content: space-between; align-items: center;">
                    <span>
                        ${element.name} ==>
                        ${element.montant} DH ==>
                        ${element.date} ==>
                        ${element.categorie} ==>
                        ${element.payeur}
                    </span>

                    <button class="despense-delete-button" data-id="${element.id}">
                        Supprimer
                    </button>
                    <button class="despense-modifier-button" data-id="${element.id}">
                        Modifier
                    </button>
                </li>
            `;
        } else if (filterDespense.value === "Tous") {

            listDesponse.innerHTML += `
                <li style="display: flex; justify-content: space-between; align-items: center;">
                    <span>
                        ${element.name} ==>
                        ${element.montant} DH ==>
                        ${element.date} ==>
                        ${element.categorie} ==>
                        ${element.payeur}
                    </span>

                    <button class="despense-delete-button" data-id="${element.id}">
                        Supprimer
                    </button>
                    <button class="despense-modifier-button" data-id="${element.id}">
                        Modifier
                    </button>
                </li>
            `;
        }
    });
};
if (filterDespense) {
    filterDespense.addEventListener("change", filtrerDespenseCategorie);
    filtrerDespenseCategorie();
}
let modifierGroupe = document.getElementById("modifierGroupe");
if (modifierGroupe) {
  filterDespense.addEventListener("change", filtrerDespenseCategorie);
  filtrerDespenseCategorie();
};
if (listGroupe) {
    listGroupe.addEventListener("click", (event) => {

        let modifeBtn = event.target.closest(".groupe-modifier-button");

        if (modifeBtn) {

            let id = Number(modifeBtn.dataset.id);

            let groupe = groupes.find(element => element.id === id);

            if (groupe) {
                localStorage.setItem("groupeModifier", JSON.stringify(groupe));
                window.location.href = "groupe.html";
            }
        }
    });
};
listGroupe.innerHTML = "";
listDesponse.innerHTML = "";
groupes.forEach((element, index) => {
  listGroupe.innerHTML += `
        <li style="display: flex; justify-content: space-between; align-items: center; data-index="${index}">
            <span>
                ${element.nom} ==>
                ${element.description} ==>
                ${element.devise} ==>
                ${element.date}
            </span>
            <div>
            <button class="groupe-delete-button" data-index="${index}">Supprimer</button>
            <button class="groupe-ajoute-button" data-id="${element.id}">Ajouter member</button>
            </div>
        </li>
    `;
});
despenses.forEach((element, index) => {
  listDesponse.innerHTML += `
        <li style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                ${element.name} ==>
                ${element.montant} DH ==>
                ${element.date} ==>
                ${element.categorie} ==>
                ${element.payeur}
            </span>
            <button class="despense-delete-button" data-index="${index}">Supprimer</button>
        </li>
    `;
});
let main = document.querySelector("main");
let members = JSON.parse(localStorage.getItem("members")) || [];
main.addEventListener("click", (event) => {
  if (event.target.classList.contains("groupe-delete-button")) {
    let index = event.target.dataset.index;
    groupes.splice(index, 1);
    localStorage.setItem("groupes", JSON.stringify(groupes));
    event.target.closest("li").remove();
  }

  if (event.target.classList.contains("despense-delete-button")) {
    let index = event.target.dataset.index;
    despenses.splice(index, 1);
    localStorage.setItem("despensesAray", JSON.stringify(despenses));
    event.target.closest("li").remove();
  }
  if (event.target.classList.contains("groupe-ajoute-button")) {
    let userFullName = prompt("Enter your full name:");
    if (!userFullName) return;
    let groupId = +(event.target.dataset.id);
    let member = {
      name: userFullName,
      id: groupId,
    };
    if (members.includes(member.name)) return;
    members.push(member);
    localStorage.setItem("members", JSON.stringify(members));
  }
});
function formatDate(){
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    return (formattedDate);
}




