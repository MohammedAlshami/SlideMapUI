const GetJwtToken = (): string | null => {
    const jwtCookie = document.cookie.split("; ").find(row => row.startsWith('session_jwt='));
    if (jwtCookie) {
      return jwtCookie.split('=')[1];
    }
    return null;
  };
  
  export default GetJwtToken;
  