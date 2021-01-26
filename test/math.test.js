const { fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math');

test('Should calculate to Celsius', () => {
    const celsius = fahrenheitToCelsius(50);
    expect(celsius).toBe(10);
});

test('Should calculate to Fahrenheit', () => {
    const fahrenheit = celsiusToFahrenheit(10);
    expect(fahrenheit).toBe(50);
});
