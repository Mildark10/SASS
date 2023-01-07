const JsonData = [{
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];
let dataJson = [...JsonData];
//variables
let charBarsContainer = document.querySelector('.chart__bars-container');
let values = [];
dataJson.forEach(element => {
    values.push(element.amount);
    charBarsContainer.innerHTML += `
    <div class="chart__bar">
        <div class="chart__bar--label">${element.amount}</div>
        <div class="chart__bar--day">${element.day}</div>
    </div>`
});
let alturaMaxima = 150;
let MaxValue = Math.max(...values);

let barras = document.querySelectorAll('.chart__bar');
barras = [...barras];
barras.forEach(element => {

    let nuevoValor = parseFloat(element.childNodes[1].innerText.slice(0));
    let alturaActualpx = (nuevoValor * alturaMaxima) / MaxValue;

    element.style.height = `${alturaActualpx}px`;
    if (nuevoValor === MaxValue) {
        element.style.backgroundColor = 'hsl(186,34%,60%)';
    }
    element.addEventListener('mouseover', event => {
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = 'block';
    });


    element.addEventListener('mouseout', event => {
        let labelElement = event.target.childNodes[1];
        labelElement.style.display = 'none';
    });
});