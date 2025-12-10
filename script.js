let car1 = {
    marka: "Mercedes",
    model: "190",
    color: "red",
    speed: 180
}

let car2 = {
    marka: "BMW",
    model: "X5",
    color: "white",
    speed: 240
}

function showProperty() {
    return this.model + this.color + this.speed;
}
// showProperty.call(car1);

// mercedes ya bmw secende li de onun propertyleri cixsin for in call islenmeli yazilmalidir

function show() {
    let select = document.getElementById('select').value;
    let data = "";
    let joinCar;
    if (select === "car1") {
        joinCar = car1;
    } else if (select === "car2") {
        joinCar = car2;
    }
    for (let key in joinCar) {
        data += `<li>${key} : ${showProperty.call(joinCar)}</li>`;
    }

    document.getElementById('list').innerHTML = data
}