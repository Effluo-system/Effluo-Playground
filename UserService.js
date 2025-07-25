class UserService {
    constructor() {
        this.apiUrl = 'https://api.example.com/v1';
        this.timeout = 5000;
    }

    async getUser(userId) {
        const response = await fetch(`${this.apiUrl}/users/${userId}`, {
            method: 'GET',
            timeout: this.timeout
        });
        return response.json();
    }

    async updateUser(userId, userData) {
        const response = await fetch(`${this.apiUrl}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
            timeout: this.timeout
        });
        return response.json();
    }
}

module.exports = UserService;
