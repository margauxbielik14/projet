const form = document.querySelector("#comment-form");
const nomInput = document.querySelector("#nom");
const commentaireInput = document.querySelector("#commentaire");
const errorMessage = document.querySelector("#error-message");
const commentairesList = document.querySelector("#commentaires-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = nomInput.value.trim();
    const commentaire = commentaireInput.value.trim();

    errorMessage.textContent = "";

    if (nom.length < 2) {
        errorMessage.textContent = "Le nom doit contenir au moins 2 caractères.";
        return;
    }

    if (commentaire.length < 10) {
        errorMessage.textContent = "Le commentaire doit contenir au moins 10 caractères.";
        return;
    }

    const commentaireCard = document.createElement("article");
    commentaireCard.classList.add("commentaire");

    const auteur = document.createElement("h3");
    auteur.textContent = nom;

    const texte = document.createElement("p");
    texte.textContent = commentaire;

    const supprimerButton = document.createElement("button");
    supprimerButton.textContent = "🗑️ Supprimer";
    supprimerButton.type = "button";
    supprimerButton.classList.add("delete-button");

    supprimerButton.addEventListener("click", function() {
        commentaireCard.remove();
    });

    commentaireCard.appendChild(auteur);
    commentaireCard.appendChild(texte);
    commentaireCard.appendChild(supprimerButton);

    commentairesList.appendChild(commentaireCard);

    form.reset();
});