// on cible l'élément « path » que l'on veut animer 
var triangle = document.querySelectorAll("#monSVG path")[0];
var cercle = document.querySelectorAll("#svg-01 circle")[0];
var rectangle = document.querySelectorAll("#svg-02 rect")[0];
var svg03 = document.querySelectorAll("#svg-03 path")[0];
var svg04 = document.querySelectorAll("#svg-04 path")[0];
var svg05 = document.querySelectorAll("#svg-05 path")[0];
// la longueur du chemin «path»
var longueur = triangle.getTotalLength();
var longueurCercle = getCircleLength(cercle);
var longueurRectangle = getRectLength(rectangle);
var longueurSvg03 = svg03.getTotalLength();
var longueurSvg04 = svg04.getTotalLength();
var longueurSvg05 = svg05.getTotalLength();

console.log(longueurSvg03 + ', ' + longueurSvg04 + ', ' + longueurSvg05);

// La longueur du tracé
triangle.style.strokeDasharray = longueur;
cercle.style.strokeDasharray = longueurCercle;
rectangle.style.strokeDasharray = longueurRectangle;
svg03.style.strokeDasharray = longueurSvg03;
svg04.style.strokeDasharray = longueurSvg04;
svg05.style.strokeDasharray = longueurSvg05;

// On fait disparaître le tracé en appliquant la propriété css strokeDashoffset sur toute la longueur du chemin
triangle.style.strokeDashoffset = longueur;
cercle.style.strokeDashoffset = longueurCercle;
rectangle.style.strokeDashoffset = longueurRectangle;
svg03.style.strokeDashoffset = longueurSvg03;
svg04.style.strokeDashoffset = longueurSvg04;
svg05.style.strokeDashoffset = longueurSvg05;

//On fait également disparaître les fonds des trois dernières formes
svg03.style.fillOpacity = svg04.style.fillOpacity = svg05.style.fillOpacity = 0;

// extraire la fraction du déplacement de la barre de défilement et  ajusté le tracé
window.addEventListener("scroll", maTrace);

function maTrace() {
	var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

	var trace = longueur * fractionDuScroll;
	var traceCercle = longueurCercle * fractionDuScroll;
	var traceRectangle = longueurRectangle * fractionDuScroll;
	var traceSvg03 = longueurSvg03 * fractionDuScroll;
	var traceSvg04 = longueurSvg04 * fractionDuScroll;
	var traceSvg05 = longueurSvg05 * fractionDuScroll;

	// tracé selon la fraction de «scroll»
	triangle.style.strokeDashoffset = longueur - trace ;
	cercle.style.strokeDashoffset = longueurCercle - traceCercle;
	rectangle.style.strokeDashoffset = longueurRectangle - traceRectangle;
	svg03.style.strokeDashoffset = longueurSvg03 - traceSvg03;
	svg04.style.strokeDashoffset = longueurSvg04 - traceSvg04;
	svg05.style.strokeDashoffset = longueurSvg05 - traceSvg05;

	svg03.style.fillOpacity = svg04.style.fillOpacity = svg05.style.fillOpacity = fractionDuScroll;
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