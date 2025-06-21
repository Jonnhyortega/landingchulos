const API_URL = import.meta.env.VITE_API_URL;

let firstInteraction = true;

export async function sendMessage(message, context = "jonathan") {
  const isLocal = window.location.hostname === "localhost";
  const apiUrl = isLocal
    ? "http://localhost:8000/api/chat/"
    : API_URL;

  const payload = { message, context };

  if (!firstInteraction) {
    payload.history = [];
  }
  firstInteraction = false;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.response;
}
