class TrafficLight
{
    constructor(selector)
    {
        this.$element = document.getElementById(selector)
    }
}

class Circle extends TrafficLight
{
    constructor(options)
    {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
    }
}

let color = prompt('Введите цвет светофора:').toLowerCase();
if (color === 'красный' || color === 'red') {
    const krasnyi = new Circle({
        selector: 'red',
        color: 'red',
    })
}
else if (color === 'желтый' || color === 'жёлтый' || color === 'yellow') {
    const jeltyi = new Circle({
        selector: 'yellow',
        color: 'yellow',
    })
}
else if (color === 'green' || color === 'зеленый' || color === 'зелёный') {
    const zelenyi = new Circle({
        selector: 'green',
        color: 'green',
    })
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зеленный')