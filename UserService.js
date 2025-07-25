class UserService {
    constructor() {
        this.apiUrl = 'https://api.example.com/v2';  
        this.timeout = 5000;
        this.authToken = null; 
    }

    setAuthToken(token) {
        this.authToken = token;
    }

    async getUser(userId) {
        const headers = {};
        if (this.authToken) {
            headers['Authorization'] = `Bearer ${this.authToken}`;
        }
        
        const response = await fetch(`${this.apiUrl}/users/${userId}`, {
            method: 'GET',
            headers: headers,
            timeout: this.timeout
        });
        return response.json();
    }

    async updateUser(userId, userData) {
        const headers = {
            'Content-Type': 'application/json'
        };
        if (this.authToken) {
            headers['Authorization'] = `Bearer ${this.authToken}`;
        }

        const response = await fetch(`${this.apiUrl}/users/${userId}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(userData),
            timeout: this.timeout
        });
        return response.json();
    }
}

module.exports = UserService;