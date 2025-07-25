// Simple Calculator Function
function calculator(operation, a, b) {
  // Validate inputs
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both operands must be numbers');
  }

  switch (operation.toLowerCase()) {
    case 'add':
    case '+':
      return a + b;
    
    case 'subtract':
    case '-':
      return a - b;
    
    case 'multiply':
    case '*':
      return a * b;
    
    case 'divide':
    case '/':
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    
    case 'power':
    case '**':
    case '^':
      return Math.pow(a, b);
    
    case 'modulo':
    case '%':
      if (b === 0) {
        throw new Error('Modulo by zero is not allowed');
      }
      return a % b;
    
    default:
      throw new Error(`Unsupported operation: ${operation}. Supported operations: add, subtract, multiply, divide, power, modulo`);
  }
}

// Advanced Calculator with more operations
function advancedCalculator() {
  return {
    // Basic operations
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    },
    
    // Advanced operations
    power: (a, b) => Math.pow(a, b),
    sqrt: (a) => {
      if (a < 0) throw new Error('Cannot calculate square root of negative number');
      return Math.sqrt(a);
    },
    
    // Trigonometric functions (in radians)
    sin: (a) => Math.sin(a),
    cos: (a) => Math.cos(a),
    tan: (a) => Math.tan(a),
    
    // Logarithmic functions
    log: (a) => {
      if (a <= 0) throw new Error('Logarithm of non-positive number');
      return Math.log(a);
    },
    log10: (a) => {
      if (a <= 0) throw new Error('Logarithm of non-positive number');
      return Math.log10(a);
    },
    
    // Utility functions
    abs: (a) => Math.abs(a),
    round: (a, decimals = 0) => Math.round(a * Math.pow(10, decimals)) / Math.pow(10, decimals),
    floor: (a) => Math.floor(a),
    ceil: (a) => Math.ceil(a),
    
    // Calculate percentage
    percentage: (value, total) => (value / total) * 100,
    
    // Calculate compound interest
    compoundInterest: (principal, rate, time, frequency = 1) => {
      return principal * Math.pow(1 + (rate / frequency), frequency * time);
    }
  };
}

// Test the calculator functions
console.log('=== Simple Calculator Tests ===');
try {
  console.log('Addition: 5 + 3 =', calculator('add', 5, 3));
  console.log('Subtraction: 10 - 4 =', calculator('subtract', 10, 4));
  console.log('Multiplication: 6 * 7 =', calculator('multiply', 6, 7));
  console.log('Division: 15 / 3 =', calculator('divide', 15, 3));
  console.log('Power: 2 ^ 3 =', calculator('power', 2, 3));
  console.log('Modulo: 17 % 5 =', calculator('modulo', 17, 5));
  
  // Test error handling
  console.log('\n=== Error Handling Tests ===');
  try {
    calculator('divide', 10, 0);
  } catch (error) {
    console.log('Division by zero error:', error.message);
  }
  
  try {
    calculator('invalid', 5, 3);
  } catch (error) {
    console.log('Invalid operation error:', error.message);
  }
  
} catch (error) {
  console.error('Error:', error.message);
}

console.log('\n=== Advanced Calculator Tests ===');
const calc = advancedCalculator();

console.log('Square root of 16:', calc.sqrt(16));
console.log('Sin(π/2):', calc.sin(Math.PI / 2));
console.log('Log of e:', calc.log(Math.E));
console.log('Absolute value of -5:', calc.abs(-5));
console.log('Round 3.14159 to 2 decimals:', calc.round(3.14159, 2));
console.log('Percentage: 25 of 100 =', calc.percentage(25, 100) + '%');
console.log('Compound Interest (1000, 5%, 2 years):', calc.round(calc.compoundInterest(1000, 0.05, 2), 2));

// Expression evaluator (bonus feature)
function evaluateExpression(expression) {
  // Simple expression evaluator for basic arithmetic
  // WARNING: This uses eval() which can be dangerous in production
  // This is just for demonstration purposes
  
  // Remove spaces and validate expression contains only safe characters
  const cleanExpr = expression.replace(/\s/g, '');
  const safePattern = /^[0-9+\-*/.()]+$/;
  
  if (!safePattern.test(cleanExpr)) {
    throw new Error('Invalid characters in expression');
  }
  
  try {
    return Function('"use strict"; return (' + cleanExpr + ')')();
  } catch (error) {
    throw new Error('Invalid mathematical expression');
  }
}

console.log('\n=== Expression Evaluator Tests ===');
console.log('2 + 3 * 4 =', evaluateExpression('2 + 3 * 4'));
console.log('(10 + 5) / 3 =', evaluateExpression('(10 + 5) / 3'));
console.log('2^3 using ** =', evaluateExpression('2**3'));

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculator,
    advancedCalculator,
    evaluateExpression
  };
}
