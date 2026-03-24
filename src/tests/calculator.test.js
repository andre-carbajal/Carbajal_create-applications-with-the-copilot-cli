/**
 * Comprehensive Unit Tests for Calculator Functions
 * 
 * Tests all four basic arithmetic operations with various scenarios:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * Includes edge cases and error handling tests
 */

const calculator = require('../calculator.js');

describe('Calculator - Addition Tests', () => {
  
  test('should add two positive numbers (2 + 3 = 5)', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('should add two numbers with decimal places', () => {
    expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
  });

  test('should add multiple numbers', () => {
    expect(calculator.add(1, 2, 3, 4, 5)).toBe(15);
  });

  test('should add negative numbers', () => {
    expect(calculator.add(-5, -3)).toBe(-8);
  });

  test('should add positive and negative numbers', () => {
    expect(calculator.add(10, -3)).toBe(7);
  });

  test('should return 0 when no arguments provided', () => {
    expect(calculator.add()).toBe(0);
  });

  test('should handle zero correctly', () => {
    expect(calculator.add(0, 5)).toBe(5);
    expect(calculator.add(5, 0)).toBe(5);
  });

  test('should handle large numbers', () => {
    expect(calculator.add(1000000, 2000000)).toBe(3000000);
  });

  test('should work with calculate function using +', () => {
    expect(calculator.calculate('+', [2, 3])).toBe(5);
  });

  test('should work with calculate function using "add"', () => {
    expect(calculator.calculate('add', [10, 20])).toBe(30);
  });
});

describe('Calculator - Subtraction Tests', () => {
  
  test('should subtract two positive numbers (10 - 4 = 6)', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('should subtract two numbers with decimal places', () => {
    expect(calculator.subtract(10.5, 4.2)).toBeCloseTo(6.3);
  });

  test('should subtract multiple numbers from left to right', () => {
    expect(calculator.subtract(20, 5, 3, 2)).toBe(10);
  });

  test('should handle negative results', () => {
    expect(calculator.subtract(5, 10)).toBe(-5);
  });

  test('should subtract negative numbers', () => {
    expect(calculator.subtract(10, -5)).toBe(15);
  });

  test('should return 0 when no arguments provided', () => {
    expect(calculator.subtract()).toBe(0);
  });

  test('should handle zero correctly', () => {
    expect(calculator.subtract(10, 0)).toBe(10);
    expect(calculator.subtract(0, 5)).toBe(-5);
  });

  test('should handle subtracting from zero', () => {
    expect(calculator.subtract(0, 10)).toBe(-10);
  });

  test('should work with calculate function using -', () => {
    expect(calculator.calculate('-', [10, 4])).toBe(6);
  });

  test('should work with calculate function using "subtract"', () => {
    expect(calculator.calculate('subtract', [20, 8])).toBe(12);
  });
});

describe('Calculator - Multiplication Tests', () => {
  
  test('should multiply two positive numbers (45 * 2 = 90)', () => {
    expect(calculator.multiply(45, 2)).toBe(90);
  });

  test('should multiply two numbers with decimal places', () => {
    expect(calculator.multiply(2.5, 4)).toBeCloseTo(10);
  });

  test('should multiply multiple numbers', () => {
    expect(calculator.multiply(2, 3, 4)).toBe(24);
  });

  test('should handle multiplication by zero', () => {
    expect(calculator.multiply(5, 0)).toBe(0);
    expect(calculator.multiply(0, 10)).toBe(0);
  });

  test('should handle multiplication by one', () => {
    expect(calculator.multiply(5, 1)).toBe(5);
    expect(calculator.multiply(1, 10)).toBe(10);
  });

  test('should multiply negative numbers', () => {
    expect(calculator.multiply(-5, -3)).toBe(15);
    expect(calculator.multiply(-5, 3)).toBe(-15);
    expect(calculator.multiply(5, -3)).toBe(-15);
  });

  test('should return 1 when no arguments provided', () => {
    expect(calculator.multiply()).toBe(1);
  });

  test('should handle large numbers', () => {
    expect(calculator.multiply(1000, 1000)).toBe(1000000);
  });

  test('should work with calculate function using *', () => {
    expect(calculator.calculate('*', [45, 2])).toBe(90);
  });

  test('should work with calculate function using ×', () => {
    expect(calculator.calculate('×', [6, 7])).toBe(42);
  });

  test('should work with calculate function using "multiply"', () => {
    expect(calculator.calculate('multiply', [8, 9])).toBe(72);
  });
});

describe('Calculator - Division Tests', () => {
  
  test('should divide two positive numbers (20 / 5 = 4)', () => {
    expect(calculator.divide(20, 5)).toBe(4);
  });

  test('should divide two numbers with decimal result', () => {
    expect(calculator.divide(10, 4)).toBeCloseTo(2.5);
  });

  test('should divide multiple numbers from left to right', () => {
    expect(calculator.divide(100, 5, 2)).toBe(10);
  });

  test('should handle division resulting in decimal', () => {
    expect(calculator.divide(7, 2)).toBeCloseTo(3.5);
  });

  test('should handle division by one', () => {
    expect(calculator.divide(10, 1)).toBe(10);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('should throw error when any divisor is zero', () => {
    expect(() => calculator.divide(100, 5, 0)).toThrow('Division by zero is not allowed');
  });

  test('should handle zero divided by a number', () => {
    expect(calculator.divide(0, 5)).toBe(0);
  });

  test('should divide negative numbers', () => {
    expect(calculator.divide(-20, 5)).toBe(-4);
    expect(calculator.divide(20, -5)).toBe(-4);
    expect(calculator.divide(-20, -5)).toBe(4);
  });

  test('should return 0 when no arguments provided', () => {
    expect(calculator.divide()).toBe(0);
  });

  test('should work with calculate function using /', () => {
    expect(calculator.calculate('/', [20, 5])).toBe(4);
  });

  test('should work with calculate function using ÷', () => {
    expect(calculator.calculate('÷', [30, 6])).toBe(5);
  });

  test('should work with calculate function using "divide"', () => {
    expect(calculator.calculate('divide', [50, 10])).toBe(5);
  });

  test('should throw error with calculate function when dividing by zero', () => {
    expect(() => calculator.calculate('/', [10, 0])).toThrow('Division by zero is not allowed');
  });
});

describe('Calculator - Integration Tests from Image Examples', () => {
  
  test('Image Example 1: 2 + 3 = 5', () => {
    expect(calculator.calculate('+', [2, 3])).toBe(5);
  });

  test('Image Example 2: 10 - 4 = 6', () => {
    expect(calculator.calculate('-', [10, 4])).toBe(6);
  });

  test('Image Example 3: 45 * 2 = 90', () => {
    expect(calculator.calculate('*', [45, 2])).toBe(90);
  });

  test('Image Example 4: 20 / 5 = 4', () => {
    expect(calculator.calculate('/', [20, 5])).toBe(4);
  });
});

describe('Calculator - Error Handling Tests', () => {
  
  test('should throw error for unknown operation', () => {
    expect(() => calculator.calculate('%', [10, 5])).toThrow('Unknown operation: %');
  });

  test('should throw error for invalid operation', () => {
    expect(() => calculator.calculate('invalid', [10, 5])).toThrow('Unknown operation: invalid');
  });

  test('should handle empty operation gracefully', () => {
    expect(() => calculator.calculate('', [10, 5])).toThrow();
  });
});

describe('Calculator - Edge Cases', () => {
  
  test('should handle very small decimal numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('should handle single number operations', () => {
    expect(calculator.add(5)).toBe(5);
    expect(calculator.multiply(5)).toBe(5);
  });

  test('should handle chained operations correctly', () => {
    const result1 = calculator.add(2, 3);
    const result2 = calculator.multiply(result1, 4);
    expect(result2).toBe(20);
  });

  test('should maintain precision with floating point arithmetic', () => {
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});
