
const groupes = JSON.parse(localStorage.getItem("groupes")) || [];

const listGroupe = document.getElementById("listGroupes");

listGroupe.innerHTML = "";

groupes.forEach((element, index) => {
    listGroupe.innerHTML += `
        <li>
            <span>
                ${element.nom} ==>
                ${element.description} ==>
                ${element.devise} ==>
                ${element.date}
            </span>

            <button onclick="afficherActions(${element.id})">
                Actions ${index + 1}
            </button>

            <div id="actions-${element.id}" style="display:none">
                <button onclick="supprimerGroupe(${element.id})">
                    Supprimer groupe
                </button>

                <button onclick="ajouterPersonne(${element.id})">
                    Ajouter personne
                </button>

                <button onclick="modifierGroupe(${element.id})">
                    Modifier groupe
                </button>
            </div>
        </li>
    `;
});
function supprimerGroupe(){

};
function modifierGroupe(){

};
function ajouterPersonne(id) {

    let groupes = JSON.parse(localStorage.getItem("groupes")) || [];

    let groupe = groupes.find(element => element.id == id);

    if (!groupe) {
        console.log("Groupe introuvable");
        return;
    }

    groupe.membres = groupe.membres || [];

    let nom = prompt("Nom :");
    if (nom == '' || nom.trim().length <= 0){
        return;
    }
    let prenom = prompt("Prénom :");
    if (prenom == '' || prenom.trim().length <= 0){
        return;
    }
    if (!nom || !prenom) return;

    groupe.membres.push({
        nom: nom,
        prenom: prenom
    });

    localStorage.setItem("groupes", JSON.stringify(groupes));

  

    console.log(groupe.membres.length);
}


function afficherActions(id) {
    const actions = document.getElementById(`actions-${id}`);

    if (actions.style.display === "none") {
        actions.style.display = "flex";
    } else {
        actions.style.display = "none";
    }
}


