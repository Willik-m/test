console.log("le code javaScript est executé");
const timelineElements = document.querySelectorAll('.fade-in');
console.log("nombre d'élément .fade-in :", timelineElements.length);

function handleScroll() {
  timelineElements.forEach(element => {
    console.log("Elément :",element);
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

  console.log("position de l'élément :", elementTop);

    // Condition pour vérifier si l'élément est visible à l'écran
    if (elementTop < windowHeight * 0.75) { // Ajustez 0.75 pour un déclenchement plus tôt ou plus tard
      element.classList.add('visible');
    } else {
      element.classList.remove('visible'); // Pour réinitialiser l'animation si l'élément n'est plus visible
    }
  });
}

window.addEventListener('scroll', handleScroll); // Écoute l'événement de défilement
window.addEventListener('load', handleScroll); // Pour afficher les éléments visibles au chargement de la page
