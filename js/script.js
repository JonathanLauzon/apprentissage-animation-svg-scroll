// on cible l'élément « path » que l'on veut animer 
var triangle = document.querySelectorAll("#monSVG path")[0];
var cercle = document.querySelectorAll("#svg-01 circle")[0];
var rectangle = document.querySelectorAll("#svg-02 rect")[0];
// la longueur du chemin «path»
var longueur = triangle.getTotalLength();
var longueurCercle = getCircleLength(cercle);
var longueurRectangle = getRectLength(rectangle);

console.log(longueurRectangle);

// La longueur du tracé
triangle.style.strokeDasharray = longueur;
cercle.style.strokeDasharray = longueurCercle;
rectangle.style.strokeDasharray = longueurRectangle;

// On fait disparaître le tracé en appliquant la propriété css strokeDashoffset sur toute la longueur du chemin
triangle.style.strokeDashoffset = longueur;
cercle.style.strokeDashoffset = longueurCercle;
rectangle.style.strokeDashoffset = longueurRectangle;

// extraire la fraction du déplacement de la barre de défilement et  ajusté le tracé
window.addEventListener("scroll", maTrace);

function maTrace() {
	var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	var trace = longueur * fractionDuScroll;
	var traceCercle = longueurCercle * fractionDuScroll;
	var traceRectangle = longueurRectangle * fractionDuScroll;

	// tracé selon la fraction de «scroll»
	triangle.style.strokeDashoffset = longueur - trace ;
	cercle.style.strokeDashoffset = longueurCercle - traceCercle;
	rectangle.style.strokeDashoffset = longueurRectangle - traceRectangle;
}

function getCircleLength(el) {
	var r = el.getAttribute('r');
	var circleLength = 2 * Math.PI * r; 
	return circleLength;
}

function getRectLength(el) {
	var w = el.getAttribute('width');
	var h = el.getAttribute('height');

	return (w*2)+(h*2);
}