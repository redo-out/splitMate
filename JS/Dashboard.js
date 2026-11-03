const groupes = JSON.parse(localStorage.getItem("groupes")) || [];

const listGroupe = document.getElementById("listGroupes");

let filterBottunGroupeDevise = document.getElementById("filterBottunGroupe");

function afficherGroupes() {

    let deviseChoisie = filterBottunGroupeDevise.value;

    listGroupe.innerHTML = "";

    // Filtrer les groupes
    let groupesFiltres = groupes.filter(element => {

        return deviseChoisie === "Tous" ||
               element.devise.toLowerCase() === deviseChoisie.toLowerCase();

    });

    // Afficher les groupes
    groupesFiltres.forEach(element => {

        let index = groupes.indexOf(element);

        listGroupe.innerHTML += `
            <li style="display: flex; justify-content: space-between; align-items: center;">
                <span>
                    ${element.nom} ==>
                    ${element.description} ==>
                    ${element.devise} ==>
                    ${element.date}
                </span>

                <div>
                    <button class="groupe-delete-button" data-index="${index}">
                        Supprimer
                    </button>

                    <button class="groupe-modify-button" data-index="${index}">
                        Modifier
                    </button>
                </div>
            </li>
        `;
    });
}

// Event listener خارج function
filterBottunGroupeDevise.addEventListener("change", afficherGroupes);

// Affichage initial
afficherGroupes();
// Afficher tous les groupes au début
afficherGroupes();
// Afficher les depenses

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
            <div>

                <button class="despense-delete-button" data-index="${index}">
                    Supprimer
                </button>

                <button class="despense-modify-button" data-index="${index}">
                    Modifier
                </button>
            </div>
        </li>
    `;
});

let main = document.querySelector("main");

main.addEventListener("click", (event) => {

    // Supprimer groupe
    if (event.target.classList.contains("groupe-delete-button")) {

        let index = Number(event.target.dataset.index);

        groupes.splice(index, 1);

        localStorage.setItem("groupes", JSON.stringify(groupes));

        event.target.closest("li").remove();
    }

    // Supprimer dapense
    if (event.target.classList.contains("despense-delete-button")) {

        let index = Number(event.target.dataset.index);

        despenses.splice(index, 1);

        localStorage.setItem("despensesAray", JSON.stringify(despenses));

        event.target.closest("li").remove();
    }
    // Modifier groupe
    if (event.target.classList.contains("groupe-modify-button")) {
        let index = Number(event.target.dataset.index);

        localStorage.setItem("groupeIndex", index);

        window.location.href = "groupe.html";
    }

    // Modifier daqpense
    if (event.target.classList.contains("despense-modify-button")) {

        let index = Number(event.target.dataset.index);

        localStorage.setItem("despenseIndex", index);

        window.location.href = "depense.html";
    }

});

