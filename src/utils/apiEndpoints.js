const BASE_URL = 'http://localhost:8080/api/v1.0';

export const apiEndpoints = {

    FETCH_FILES: `${BASE_URL}/files/my`,
    UPLOAD_FILE: `${BASE_URL}/files/upload`,
    TOGGLE_FILE: (id) => `${BASE_URL}/files/${id}/toggle-public`,
    DELETE_FILE: (id) => `${BASE_URL}/files/${id}`,
    DOWNLOAD_FILE: (id) => `${BASE_URL}/files/download/${id}`,

    GET_CREDITS: `${BASE_URL}/users/credits`,
}