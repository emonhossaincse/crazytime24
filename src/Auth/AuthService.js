
const API_BASE_URL = 'http://127.0.0.1:8000'; // Update this with your server's base URL

const AuthService = {
  async isLoggedIn() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/isloggedin`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // You may need to include authentication headers if required by your server
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.isLoggedIn; // Assuming the server returns { isLoggedIn: true } or { isLoggedIn: false }
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
