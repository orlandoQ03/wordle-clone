// spec/myAppSpec.js
describe('add', function () {
  it('should add two positive numbers correctly', function () {
    expect(add(2, 3)).toBe(5);
  });

  it('should add a positive and a negative number correctly', function () {
    expect(add(5, -3)).toBe(2);
  });

  it('should add two negative numbers correctly', function () {
    expect(add(-2, -3)).toBe(-5);
  });

  it('should add two floating-point numbers correctly', function () {
    expect(add(2.5, 3.5)).toBeCloseTo(6, 2); // Using toBeCloseTo for floating-point comparison
  });

  it('should add zero to a number and return the number', function () {
    expect(add(5, 0)).toBe(5);
  });

  // Add more test cases as needed for your specific function
});
