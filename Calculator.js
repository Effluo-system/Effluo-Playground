class Calculator {
    constructor() {
        this.operations = {
            add: (a, b) => a + b,
            subtract: (a, b) => a - b,
            multiply: (a, b) => a * b,
            divide: (a, b) => a / b,
            power: (a, b) => Math.pow(a, b),  
            modulo: (a, b) => a % b          
        };
    }

    calculate(operation, a, b) {
        if (!this.operations[operation]) {
            throw new Error(`Unknown operation: ${operation}`);
        }
        

        validateNumbers(a, b);
        return this.operations[operation](a, b);
    }

    getAvailableOperations() {
        return Object.keys(this.operations);
    }
}

function validateNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
}


module.exports = { Calculator, validateNumbers };