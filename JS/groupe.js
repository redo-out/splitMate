let NomGroupe = document.getElementById("nom");
let DescriptionGroupes= document.getElementById("description");
let DeviseGroupe = document.getElementById("Devise");
let DateGroupe = document.getElementById("data");
let formGroupe = document.getElementById("formGroupe");
let groupes = JSON.parse(localStorage.getItem("groupes")) || []; //fallback
let conteurGroupe = groupes.length + 1;

function creerGroupe(event) {
    event.preventDefault();
        let NomGroupeValue = document.getElementById("nom").value.trim();
        let DescriptionGroupesValue = document.getElementById("description").value.trim();
        let DeviseGroupeValue = document.getElementById("Devise").value;
        let DateGroupeValue = document.getElementById("data").value;

        if (NomGroupeValue.length <= 0 || DeviseGroupeValue.length <= 0 || DateGroupeValue.length <= 0){
            return;
        }
        const groupe = {
            id: Date.now,
            nom: NomGroupeValue,
            description: DescriptionGroupesValue,
            devise: DeviseGroupeValue,
            date: DateGroupeValue,
            membres:[]
        };
        groupes.push(groupe);
        localStorage.setItem("groupes", JSON.stringify(groupes));

        NomGroupe.value = "";
        DescriptionGroupes.value = "";
        DeviseGroupe.value = "";
        DateGroupe.value = "";
}
formGroupe.addEventListener("submit", creerGroupe);
