// Function to fetch JWT token from cookies
const getJwtToken = () => {
  const jwtCookie = document.cookie.split("; ").find(row => row.startsWith('session_jwt='));
  if (jwtCookie) {
    return jwtCookie.split('=')[1];
  }
  return null;
};

// Function to decode JWT token manually
const decodeJwtToken = (token) => {
  if (!token) {
    return null;
  }

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  console.log(JSON.parse(jsonPayload));
  return JSON.parse(jsonPayload);
};

// Function to check if the user is authenticated and has access to the current URL
export const checkAccessAndRedirect = () => {
  const jwtToken = getJwtToken();
  
  if (!jwtToken) {
    const currentUrl = window.location.pathname;
    if (currentUrl !== "/login" && currentUrl !== "/register") {
      window.location.href = "/login";
    }
    return false;
  }

  // Decode the JWT token to get user information
  const decodedToken = decodeJwtToken(jwtToken);
  if (!decodedToken) {
    console.error('Error decoding JWT token');
    return false;
  }
  
  console.log(decodedToken);
  const userEmail = decodedToken.sub; // Assuming 'sub' contains the email
  const isAdmin = decodedToken.isAdmin || false; // Assuming 'isAdmin' is a boolean in the token

  const authenticatedUrls = getAuthenticatedUrls();
  const adminUrls = getAdminUrls();

  const currentUrl = window.location.pathname;

  if (!isAdmin && !authenticatedUrls.includes(currentUrl)) {
    window.location.href = "/";
    return false;
  }

  if (isAdmin && !adminUrls.includes(currentUrl)) {
    window.location.href = "/";
    return false;
  }

  return true;
};

// Function to get the list of URLs accessible to authenticated users
const getAuthenticatedUrls = () => {
  return ["/report", "/profile/reports", "/profile"];
};

// Function to get the list of URLs accessible only to admins
const getAdminUrls = () => {
  return ["/profile/all_reports", "/profile/all_users"];
};

export default getJwtToken; // Export the getJwtToken function for reuse
