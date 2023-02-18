document.getElementById('calculate-parallelogram').addEventListener('click', function(){
    const breadth = 10
    const height = 12
    const parallelogramArea = breadth * height

    const parallelogramAreafield = getTextElementValueById('parallelogram-area-field')

    const newparallelogramArea = "3. Parallelogram " + parallelogramArea + " cm²"

    setTextElementValueById('parallelogram-area-field' , newparallelogramArea)
})
