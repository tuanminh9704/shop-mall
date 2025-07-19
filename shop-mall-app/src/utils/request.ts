const domain = 'http://localhost:8080/api/';

async function checkResponse(response: any) {
    if (!response.ok) {
        // Đọc body json hoặc text 1 lần
        const contentType = response.headers.get("content-type");
        let errorMessage = `HTTP error! status: ${response.status}`;
        if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            errorMessage = errorData.message || JSON.stringify(errorData);
        } else {
            const text = await response.text();
            if (text) errorMessage = text;
        }
        throw new Error(errorMessage);
    }

    // Nếu ok thì cũng đọc json 1 lần
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return await response.json();
    }

    return null;
}

export async function post(url: string, data: any) {
    const response = await fetch(domain + url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return checkResponse(response);
}

export async function get(url: string) {
    const response = await fetch(domain + url);
    return checkResponse(response);
}

export async function del(url : string) {
    const response = await fetch(domain + url, { method: 'DELETE' });
    return checkResponse(response);
}

export async function patch(url: string, data: any) {
    const response = await fetch(domain + url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return checkResponse(response);
}

export async function put(url: string, data: any) {
    const response = await fetch(domain + url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return checkResponse(response);
}