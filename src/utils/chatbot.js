const API_URL = import.meta.env.VITE_API_URL;


export async function sendMessage(message) {
  const isLocal = window.location.hostname === 'localhost';
  const api_url_intern = isLocal
    ? 'http://localhost:8000/api/chat/'
    : API_URL;
    const response = await fetch(api_url_intern, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Origin': 'chulosdesign.com'
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.response;
}
