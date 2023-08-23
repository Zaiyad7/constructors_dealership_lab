const Dealership = require('./Dealership');
const Car = require('./Car');
const Customer = require('./Customer');

test('Dealership methods work', () => {
  const dealership = new Dealership('AutoTrader', 5);

  const car1 = new Car('Toyota', 25000, 'Petrol');
  const car2 = new Car('Honda', 28000, 'Electric');

  dealership.addCarToStock(car1);
  dealership.addCarToStock(car2);

  expect(dealership.countCarsInStock()).toBe(2);
  expect(dealership.getManufacturers()).toEqual(['Toyota', 'Honda']);
  expect(dealership.getCarsByManufacturer('Toyota')).toEqual([car1]);
  expect(dealership.calculateTotalValue()).toBe(53000);
});

test('Dealership can sell car to customer', () => {
    const dealership = new Dealership('AutoTrader', 5);
    const customer = new Customer('Ezio', 40000);
  
    const car1 = new Car('Toyota', 25000, 'Petrol');
    const car2 = new Car('Honda', 28000, 'Electric');
  
    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
  
    const soldCar = dealership.sellCar('Toyota', customer);
  
    expect(soldCar).toEqual(car1);
    expect(dealership.countCarsInStock()).toBe(1);
    expect(customer.car).toBe(car1);
    expect(customer.wallet).toBe(15000); 
  });
    