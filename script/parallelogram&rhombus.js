document.getElementById('calculate-parallelogram').addEventListener('click', function(){
    const breadth = 10
    const height = 12
    const parallelogramArea = breadth * height

    const parallelogramAreafield = getTextElementValueById('parallelogram-area-field')

    const newparallelogramArea = "3. Parallelogram " + parallelogramArea + " cm²"

    setTextElementValueById('parallelogram-area-field' , newparallelogramArea)
})
document.getElementById('calculate-rhombus').addEventListener('click', function(){
    const rhombusSideOne = 16
    const rhombusSideTwo = 8
    const rhombusArea = 0.5 * rhombusSideOne * rhombusSideTwo

    const rhombusAreafield = getTextElementValueById('rhombus-area-field');

    const newrhombusArea = "4. Rhombus " + rhombusArea + " cm²"

    setTextElementValueById('rhombus-area-field', newrhombusArea)
})