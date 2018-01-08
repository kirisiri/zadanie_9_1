
function getTriangleArea(a, h) {
	if ( ( a <= 0 ) ||  ( h <= 0 ) ) {
	alert ('Nieprawidlowe dane') }
	return a*h/2;
}
//alert ('Your triangle\'s area is: ' + getTriangleArea(10, 6));
console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(0, 6);
alert ('Pole pierwszego trojkata wynosi: ' + triangle1Area);
var triangle2Area = getTriangleArea(2, 7);
alert ('Pole drugiego trojkata wynosi: ' + triangle2Area);
var triangle3Area = getTriangleArea(3, 1);
alert ('Pole trzeciego trojkata wynosi: ' + triangle3Area);