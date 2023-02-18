document.getElementById('calculate-pentagon').addEventListener('click', function(){
    const pentagonParameter = 6;
    const pentagonBase = 10;
    const pentagonArea = 0.5 * pentagonParameter * pentagonBase;

    const pentagonAreafield = getTextElementValueById('pentagon-area-field')

    const newpentagonArea = "5. Pentagon " + pentagonArea.toFixed(2) + " cm²"

    setTextElementValueById('pentagon-area-field', newpentagonArea)
})
document.getElementById('calculate-ellipse').addEventListener('click', function(){
    const ellipseA = 10;
    const ellipseB = 4;
    const ellipseArea = 3.14 * ellipseA * ellipseB;

    const ellipseAreafield = getTextElementValueById('ellipse-area-field');

    const newellipseArea = "6. Ellipse " + ellipseArea.toFixed(2) + " cm²"

    setTextElementValueById('ellipse-area-field', newellipseArea)
})