class Calculator {
    constructor() {
        this.operations = {
            add: (a, b) => a + b,
            subtract: (a, b) => a - b,
            multiply: (a, b) => a * b,
            divide: (a, b) => a / b
        };
    }

    calculate(operation, a, b) {
        validateInput(a, b);
        
        if (!this.operations[operation]) {
            throw new Error(`Unknown operation: ${operation}`);
        }
        return this.operations[operation](a, b);
    }

    getAvailableOperations() {
        return Object.keys(this.operations);
    }
}

function validateInput(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    if (!isFinite(a) || !isFinite(b)) {
        throw new Error('Arguments must be finite numbers');
    }
}

module.exports = { Calculator, validateInput }; 