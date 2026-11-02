
const groupes = JSON.parse(localStorage.getItem("groupes")) || [];
const despenses = JSON.parse(localStorage.getItem("despensesAray")) || [];

const listGroupe = document.getElementById("listGroupes");
const listDesponse = document.getElementById("listDesponse");

listGroupe.innerHTML = "";
listDesponse.innerHTML = "";
groupes.forEach((element, index) => {
    listGroupe.innerHTML += `
        <li style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                ${element.nom} ==>
                ${element.description} ==>
                ${element.devise} ==>
                ${element.date}
            </span>
            <button class="groupe-delete-button" data-index="${index}">Supprimer</button>
        </li>
    `;
});



despenses.forEach((element, index) => {
    listDesponse.innerHTML += `
        <li style="display: flex; justify-content: space-between; align-items: center;">
            <span>
                ${element.name} ==>
                ${element.montant} ==>
                ${element.date} ==>
                ${element.categorie} ==>
                ${element.payeur}
            </span>
            <button class="despense-delete-button" data-index="${index}">Supprimer</button>
        </li>
    `;
});



let main = document.querySelector("main");

main.addEventListener("click", (event) => {

    // Suprimer Groupe
    if (event.target.classList.contains("groupe-delete-button")) {

        let index = event.target.dataset.index;


        groupes.splice(index, 1);


        localStorage.setItem("groupes", JSON.stringify(groupes));


        event.target.closest("li").remove();
    }


    // Suprimer dajpense
    if (event.target.classList.contains("despense-delete-button")) {

        let index = event.target.dataset.index;


        despenses.splice(index, 1);



        localStorage.setItem("despensesAray", JSON.stringify(despenses));

        event.target.closest("li").remove();
    }
})








