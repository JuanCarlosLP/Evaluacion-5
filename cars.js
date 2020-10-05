const cars = [{
        id: 1,
        brand: 'Nissan',
        model: 'March',
        color: 'Plata',
        year: 2017,
        price: 145000
    },
    {
        id: 2,
        brand: 'Ford',
        model: 'Focus',
        color: 'Rojo',
        year: 2014,
        price: 200000
    },
    {
        id: 3,
        brand: 'Chevrolet',
        model: 'Camaro',
        color: 'Negro',
        year: '2020',
        price: 450000
    }
];

let editingCar = false;

function printCars() {
    const tableBody = document.getElementById('users-table-body')
    tableBody.innerHTML = ''
    cars.forEach((car) => {
        const td = `<tr>
                        <td>
                            ${car.brand}
                        </td>
                        <td>
                            ${car.model}
                        </td>
                        <td>
                            ${car.color}
                        </td>
                        <td>
                            ${car.year}
                        </td>
                        <td>
                            ${car.price}
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="removeCar(${car.id})">
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick="editCarButton(${car.id})">
                                Editar
                            </button>
                        </td>
                    </tr>`
        tableBody.innerHTML += td;
    })
}

function submitCar() {
    console.log(editingCar)
    if (editingCar) {
        editCar();
    } else {
        addCar();
    }
}

function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    const newCar = {
        id: cars.length + 1,
        brand: brand,
        model: model,
        color: color,
        year: year,
        price: price
    }
    cars.push(newCar);

    printCars();
}

function removeCar(id) {

    const position = cars.findIndex((car) => car.id === id);
    cars.splice(position, 1);
    printCars();
}

function editCarButton(id) {
    const car = cars.find((car) => car.id === id);
    document.getElementById('brand').value = car.brand;
    document.getElementById('model').value = car.model;
    document.getElementById('color').value = car.color;
    document.getElementById('year').value = car.year;
    document.getElementById('price').value = car.price;
    editingCar = car;
}

function editCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    editingCar.brand = brand;
    editingCar.model = model;
    editingCar.color = color;
    editingCar.year = year;
    editingCar.price = price;
    printCars();
    editingCar = false;
    document.getElementById('brand').value = ''
    document.getElementById('model').value = ''
    document.getElementById('color').value = ''
    document.getElementById('year').value = ''
    document.getElementById('price').value = ''
}

printCars();