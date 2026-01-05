const API_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL";

async function apiCall(payload) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Network error");
  }

  return response.json();
}
