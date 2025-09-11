class UserService {
    constructor() {
        this.apiUrl = 'https://api.example.com/v1';
        this.timeout = 8000; 
        this.cache = new Map();  
    }

    clearCache() {
        this.cache.clear();
    }

    async getUser(userId) {
        if (this.cache.has(`user_${userId}`)) {
            return this.cache.get(`user_${userId}`);
        }

        const response = await fetch(`${this.apiUrl}/users/${userId}`, {
            method: 'GET',
            headers: headers,
            timeout: this.timeout
        });
        const userData = await response.json();
        
        this.cache.set(`user_${userId}`, userData);
        return userData;
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
        
        const result = await response.json();
        
        this.cache.delete(`user_${userId}`);
        return result;
    }
}

module.exports = UserService;