document.addEventListener("DOMContentLoaded", (event) => {
  // Fonction pour envoyer le mail
  function sendMail() {
    // fonction pour envoyer un mail par js
  }

  // Sélectionner le formulaire
  let form = document.getElementById("contact-form");
  let audioForm = document.getElementById("form-audio");

  // Ajouter un écouteur d'événement pour la soumission du formulaire
  form.onsubmit = function (e) {
    // Empêcher le rechargement de la page
    e.preventDefault();
    audioForm.play();

    // Fonction pour envoyer le mail via js
    sendMail();

    // Message HTML  a afficher après avoir soumis le formulaire
    let thankYouMessage =
      '<div class="display-6 p-5 rounded-2 text-white text-center bg-success">' +
      "<p>Merci pour votre message !</p>" +
      "<p>Nous vous contacterons bientôt.</p>" +
      "</div>";

    // Remplacer le contenu du formulaire par le message de remerciement
    form.innerHTML = thankYouMessage;
  };
});
