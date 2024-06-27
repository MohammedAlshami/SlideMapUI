export function checkSessionAuthCookie() {
    if (typeof document !== 'undefined') {
      // Split cookies into an array
      const cookies = document.cookie.split(';');
    
      // Loop through each cookie to find session_auth cookie
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        
        // Check if the cookie starts with 'session_auth='
        if (cookie.startsWith('session_auth=')) {
          // If it exists, return true
          return true;
        }
      }
    }
    
    // If not found or in non-browser environment, return false
    return false;
  }
  