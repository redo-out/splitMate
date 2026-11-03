let NomGroupe = document.getElementById("nom");
let DescriptionGroupes= document.getElementById("description");
let DeviseGroupe = document.getElementById("Devise");
let DateGroupe = document.getElementById("data");
let formGroupe = document.getElementById("formGroupe");
let groupes = JSON.parse(localStorage.getItem("groupes")) || [];

// Récupérer les groupes déjà enregistrés






function creerGroupe(event) {
    event.preventDefault();

        let NomGroupeValue = document.getElementById("nom").value.trim();
        let DescriptionGroupesValue = document.getElementById("description").value.trim();
        let DeviseGroupeValue = document.getElementById("Devise").value;
        let DateGroupeValue = document.getElementById("data").value;

        console.log(NomGroupeValue);
        console.log(DescriptionGroupesValue);
        console.log(DeviseGroupeValue);
        console.log(DateGroupeValue);
        
        if (NomGroupeValue === "") {
        return;
        };
        if (DeviseGroupeValue === "") {
        return;
        };
        const groupe = {
            id: Date.now(),
            nom: NomGroupeValue,
            description: DescriptionGroupesValue,
            devise: DeviseGroupeValue,
            date: DateGroupeValue,
            membres:[]
        };
        groupes.push(groupe);

        localStorage.setItem("groupes", JSON.stringify(groupes));

        console.log(groupe.membres);

        NomGroupe.value = "";
        DescriptionGroupes.value = "";
        DeviseGroupe.value = "";
        DateGroupe.value = "";
        



        
   
        




}
let modifyBtn = document.getElementById("modifyBtn");
let buttonGroupe = document.getElementById("buttonGroupe");

// Récupérer le groupe à modifier
let groupeIndex = localStorage.getItem("groupeIndex");

if (groupeIndex !== null) {

    let index = Number(groupeIndex);
    let groupe = groupes[index];

    if (groupe) {
        NomGroupe.value = groupe.nom;
        DescriptionGroupes.value = groupe.description;
        DeviseGroupe.value = groupe.devise;
        DateGroupe.value = groupe.date;

        buttonGroupe.style.display = "none";
        modifyBtn.style.display = "inline";
    }
}

// Modifier le groupe
modifyBtn.addEventListener("click", function(event) {

    event.preventDefault();

    let index = Number(localStorage.getItem("groupeIndex"));

    if (localStorage.getItem("groupeIndex") === null) {
        return;
    }

    if (!groupes[index]) {
        return;
    }

    groupes[index].nom = NomGroupe.value.trim();
    groupes[index].description = DescriptionGroupes.value.trim();
    groupes[index].devise = DeviseGroupe.value;
    groupes[index].date = DateGroupe.value;

    localStorage.setItem("groupes", JSON.stringify(groupes));

    localStorage.removeItem("groupeIndex");

    window.location.href = "Dashboard.html";
});


formGroupe.addEventListener("submit", creerGroupe);




// 























































// 


