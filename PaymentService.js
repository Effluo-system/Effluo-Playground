class PaymentService {
    constructor(paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    /**
     * Processes a payment.
     * @param {Object} paymentDetails - { amount, currency, source, description }
     * @returns {Promise<Object>} - Payment result
     */
    async processPayment(paymentDetails) {
        try {
            const result = await this.paymentGateway.charge(paymentDetails);
            return {
                success: true,
                transactionId: result.id,
                status: result.status,
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
            };
        }
    }

    /**
     * Refunds a payment.
     * @param {string} transactionId
     * @param {number} amount
     * @returns {Promise<Object>} - Refund result
     */
    async refundPayment(transactionId, amount) {
        try {
            const result = await this.paymentGateway.refund({ transactionId, amount });
            return {
                success: true,
                refundId: result.id,
                status: result.status,
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
            };
        }
    }
}

module.exports = PaymentService;