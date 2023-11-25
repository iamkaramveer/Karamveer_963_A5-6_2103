class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log(`Tuut tuut! This is a ${this.color} ${this.year} ${this.brand} ${this.model}, Price: ${this.price}, Gas left: ${this.gas}`);
    }

    // Method to simulate the race turn and gas consumption
    raceTurn(currentYear) {
        // New cars lose 5 liters per turn, older cars lose 1 additional liter per year of age
        const age = currentYear - this.year;
        const gasConsumption = age > 0 ? 5 + age : 5;
        this.gas -= gasConsumption;
        // Make sure gas doesn't go negative
        this.gas = Math.max(0, this.gas);
    }
}

// Create car objects
const cars = [
    new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45),
    new Car('Ford', 'F-150', 2020, 'Black', 25000, 30),
    new Car('BMW', 'X5', 2022, 'Green', 60000, 65),
    new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60),
    new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47),
    new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56)
];

// Function to simulate the race
function simulateRace() {
    const currentYear = new Date().getFullYear();
    const raceInfoDiv = document.getElementById('race-info');

    for (let i = 0; i < 7; i++) {
        cars.forEach(car => {
            car.raceTurn(currentYear);
            car.honk();
            const carInfoDiv = document.createElement('div');
            carInfoDiv.classList.add('car-info');
            carInfoDiv.textContent = `Turn ${i + 1}: ${car.brand} ${car.model} - Gas left: ${car.gas}`;
            raceInfoDiv.appendChild(carInfoDiv);
        });
    }
}

// Run the race simulation when the script loads
simulateRace();
