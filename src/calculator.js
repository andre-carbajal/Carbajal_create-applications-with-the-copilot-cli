#!/usr/bin/env node

/**
 * CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+): Add two or more numbers
 * - Subtraction (-): Subtract numbers
 * - Multiplication (×): Multiply two or more numbers
 * - Division (÷): Divide numbers with error handling for division by zero
 * - Modulo (%): Calculate the remainder of a divided by b
 * - Exponentiation (^): Raise base to the power of exponent
 * - Square Root (√): Calculate the square root of a number
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Addition operation
function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Subtraction operation
function subtract(...numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((result, num, index) => 
    index === 0 ? num : result - num
  );
}

// Multiplication operation
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Division operation
function divide(...numbers) {
  if (numbers.length === 0) return 0;
  
  return numbers.reduce((result, num, index) => {
    if (index === 0) return num;
    if (num === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return result / num;
  });
}

// Modulo operation
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// Power operation
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function calculate(operation, numbers) {
  switch (operation) {
    case '+':
    case 'add':
    case 'addition':
      return add(...numbers);
    
    case '-':
    case 'subtract':
    case 'subtraction':
      return subtract(...numbers);
    
    case '*':
    case 'x':
    case '×':
    case 'multiply':
    case 'multiplication':
      return multiply(...numbers);
    
    case '/':
    case '÷':
    case 'divide':
    case 'division':
      return divide(...numbers);
    
    case '%':
    case 'mod':
    case 'modulo':
      if (numbers.length !== 2) {
        throw new Error('Modulo requires exactly 2 numbers');
      }
      return modulo(numbers[0], numbers[1]);
    
    case '^':
    case 'pow':
    case 'power':
      if (numbers.length !== 2) {
        throw new Error('Power requires exactly 2 numbers (base and exponent)');
      }
      return power(numbers[0], numbers[1]);
    
    case 'sqrt':
    case 'squareroot':
    case '√':
      if (numbers.length !== 1) {
        throw new Error('Square root requires exactly 1 number');
      }
      return squareRoot(numbers[0]);
    
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

function displayMenu() {
  console.log('\n=== CLI Calculator ===');
  console.log('Supported Operations:');
  console.log('  + (Addition)');
  console.log('  - (Subtraction)');
  console.log('  × or * (Multiplication)');
  console.log('  ÷ or / (Division)');
  console.log('  % or mod (Modulo)');
  console.log('  ^ or pow (Power)');
  console.log('  sqrt or √ (Square Root)');
  console.log('\nEnter operation and numbers (e.g., + 5 3 2)');
  console.log('Type "exit" to quit\n');
}

function promptCalculation() {
  rl.question('Enter calculation: ', (input) => {
    input = input.trim();
    
    if (input.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }
    
    if (!input) {
      promptCalculation();
      return;
    }
    
    const parts = input.split(/\s+/);
    const operation = parts[0];
    const numbers = parts.slice(1).map(Number);
    
    if (numbers.some(isNaN)) {
      console.log('Error: Please enter valid numbers');
      promptCalculation();
      return;
    }
    
    if (numbers.length === 0) {
      console.log('Error: Please provide numbers to calculate');
      promptCalculation();
      return;
    }
    
    try {
      const result = calculate(operation, numbers);
      console.log(`Result: ${result}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
    
    promptCalculation();
  });
}

// Start the calculator
if (require.main === module) {
  displayMenu();
  promptCalculation();
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate
};
