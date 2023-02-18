document.getElementById('calculate-triangle').addEventListener('click', function() {

    const triangleBfield = getInputFieldValueById('triangle-b-field');
    const triangleHfield = getInputFieldValueById('triangle-h-field');

    if(triangleBfield < 0 || isNaN(triangleBfield) || triangleHfield < 0 || isNaN(triangleHfield)){
        alert('put some valid number')
        return
    }
    const triangleArea = 0.5 * triangleBfield * triangleHfield

    const triangleAreafield = getTextElementValueById('triangle-area-field')

    const newTriangleArea = '1. Triangle ' + triangleArea + ' cm²'

    setTextElementValueById('triangle-area-field', newTriangleArea)
    triangleAreafield.innerText = ""

})
document.getElementById('calculate-rectangle').addEventListener('click', function(){

    const rectangleWfield = getInputFieldValueById('rectangle-w-field')
    const rectangleLfield = getInputFieldValueById('rectangle-l-field')

    if(rectangleWfield < 0 || isNaN(rectangleWfield) || rectangleLfield < 0 || isNaN(rectangleWfield)){
        alert('put some valid number')
    }

    const rectangleArea = rectangleWfield * rectangleLfield

    const rectangleAreafield = getTextElementValueById('rectangle-area-field')

    const newRectangleArea = '2. Rectangle ' + rectangleArea + ' cm²'

    setTextElementValueById('rectangle-area-field', newRectangleArea)
})