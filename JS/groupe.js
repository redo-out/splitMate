let NomGroupe = document.getElementById("nom");
let DescriptionGroupes= document.getElementById("description");
let DeviseGroupe = document.getElementById("Devise");
let DateGroupe = document.getElementById("data");
let formGroupe = document.getElementById("formGroupe");
let groupes = JSON.parse(localStorage.getItem("groupes")) || [];
let conteurGroupe = groupes.length + 1;
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
            id: conteurGroupe++,
            nom: NomGroupeValue,
            description: DescriptionGroupesValue,
            devise: DeviseGroupeValue,
            date: DateGroupeValue,
            membres:[]
        };
        groupes.push(groupe);

        let groupeR = localStorage.setItem("groupes", JSON.stringify(groupes));

        console.log(groupes.membres);

        NomGroupe.value = "";
        DescriptionGroupes.value = "";
        DeviseGroupe.value = "";
        DateGroupe.value = "";
        



        
   
        




}

formGroupe.addEventListener("submit", creerGroupe);




// 























































// 


