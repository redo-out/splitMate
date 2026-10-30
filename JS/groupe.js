let NomGroupe = document.getElementById("nom");
let DescriptionGroupes= document.getElementById("description");
let DeviseGroupe = document.getElementById("Devise");
let DateGroupe = document.getElementById("data");
let formGroupe = document.getElementById("formGroupe");
const groupes = [];
let conteurGroupe = 1;


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
            date: DateGroupeValue 
        };
        groupes.push(groupe);
        // console.log(groupes);
        localStorage.setItem("groupes", JSON.stringify(groupes));

        NomGroupe.value = "";
        DescriptionGroupes.value = "";
        DeviseGroupe.value = "";
        DateGroupe.value = "";
        const groupes = JSON.parse(localStorage.getItem("groupes")) || [];



        console.log(groupesRecuperes);
   
        




}

formGroupe.addEventListener("submit", creerGroupe);




// 























































// 


