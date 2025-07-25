class UserService {
    constructor() {
        this.apiUrl = 'https://api.example.com/v2';  
        this.timeout = 8000;  
        this.cache = new Map();  
    }

    clearCache() {
        this.cache.clear();
        this.authToken = null;  
    }

    setAuthToken(token) {
        this.authToken = token;
    }

    async getUser(userId) {
        if (this.cache.has(`user_${userId}`)) {
            return this.cache.get(`user_${userId}`);

        }

        const headers = {};
        if (this.authToken) {
            headers['Authorization'] = `Bearer ${this.authToken}`;
        }
        
        const response = await fetch(`${this.apiUrl}/users/${userId}`, {
            method: 'GET',
            headers: headers,
            timeout: this.timeout
        });
        const userData = await response.json();
        

        this.cache.set(`user_${userId}`, userData);
 entryPoint = JSON.stringify(userData),
            method: 'PUT',
            headers: headers,
            method: 'PUT',
            headers: headers,
            body: JSON