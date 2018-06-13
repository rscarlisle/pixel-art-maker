document.addEventListener("DOMContentLoaded", function (event) {
    paint();
});

function paint() {
    let colorsArray = ['yellow', 'black', 'green', 'purple', 'grey', 'blue', 'red', 'orange', 'cyan', 'darkGreen', 'pink', 'white'];
    let paintColors = document.getElementById('paintcolors');
    let paintBox = document.getElementById('paintbox');
    let color;
    for (let i = 0; i < 1012; i++) {
        var newDiv = document.createElement("div");
        paintBox.appendChild(newDiv);
        newDiv.classList.add('pixels');
    }
    for (let i = 0; i < colorsArray.length; i++) {
        let newDiv = document.createElement('div');
        paintColors.appendChild(newDiv);
        newDiv.classList.add('colorPalette');
        newDiv.style.backgroundColor = colorsArray[i];

        if (i === colorsArray.length - 1) {
            let colorIndicator = document.createElement('div');
            colorIndicator.classList.add('thisColor');
            colorIndicator.style.backgroundColor = 'white';
            paintColors.appendChild(colorIndicator);
        }
    }
    paintBox.addEventListener('mousedown', function (event) {
        console.log("Wow-1!!!");
        let paint = event.target;
        paint.style.backgroundColor = color;

    })
    paintColors.addEventListener('mousedown', function (event) {
        console.log("Wow-2!!!");
        color = event.target.style.backgroundColor;
        document.getElementsByClassName('thisColor')[0].style.backgroundColor = color;


    })    
}
