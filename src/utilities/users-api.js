// This is the base path of the Express route we'll define
import { getToken } from './users-service';
const BASE_URL = '/api/users';

export function signUp(userData) {
	return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

// the route for our checkToken function should be /api/users/check-token
export function checkToken() {
	return sendRequest(`${BASE_URL}/check-token`);
}

/*--- Helper Functions ---*/
async function sendRequest(url, method = 'GET', payload = null) {
	// Fetch takes an optional options object as the 2nd argument
	// used to include a data payload, set headers, etc.
	const options = { method };
	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}
	const token = getToken();
	if (token) {
		// Ensure the headers object exists
		options.headers = options.headers || {};
		// Add token to an Authorization header
		// Prefacing with 'Bearer' is recommended in the HTTP specification
		options.headers.Authorization = `Bearer ${token}`;
	}
<<<<<<< HEAD
}
=======
	const res = await fetch(url, options);
	// res.ok will be false if the status code set to 4xx in the controller action
	if (res.ok) return res.json();
	throw new Error('Bad Request');
}
>>>>>>> ba4b33282e5f5fdfabb8b59644a5c99bf28ed650
