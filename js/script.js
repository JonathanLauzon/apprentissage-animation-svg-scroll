// on cible l'élément « path » que l'on veut animer 
var triangle = document.querySelectorAll("#monSVG path")[0];
// la longueur du chemin «path»
var longueur = triangle.getTotalLength();

console.log(longueur);

// La longueur du tracé
// https://developer.mozilla.org/en/docs/Web/SVG/Attribute/stroke-dasharray

triangle.style.strokeDasharray = longueur;

// On fait disparaître le tracé en appliquant la propriété css strokeDashoffset sur toute la longueur du chemin
triangle.style.strokeDashoffset = longueur;

// extraire la fraction du déplacement de la barre de défilement et  ajusté le tracé
window.addEventListener("scroll", maTrace);

function maTrace() {

	console.log('scrollTop de body = ' + document.body.scrollTop)
	console.log('scrollTop de documentElement = ' + document.documentElement.scrollTop)
	console.log('scrollHeight de documentElement = ' + document.documentElement.scrollHeight)	
	console.log('clientHeight de documentElement = ' + document.documentElement.clientHeight)			

https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight



  var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var trace = longueur * fractionDuScroll;

  // tracé selon la fraction de «scroll»
  triangle.style.strokeDashoffset = longueur - trace ;
}