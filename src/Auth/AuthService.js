const API_BASE_URL = 'http://127.0.0.1:8000';

const AuthService = {
    async isLoggedIn() {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                return console.log.response;
            } else {
                throw new Error('Failed to check login status');
            }
        } catch (error) {
            console.error('Error checking login status:', error);
            return false; // Return false on error
        }
    },
};

export default AuthService;
