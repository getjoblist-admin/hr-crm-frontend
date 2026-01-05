const API_URL = "https://script.google.com/macros/s/AKfycbwDZyDzBW4VtLaTXMza6OhVPpOfbRJAP2SBOv0kPQlhvu08Ci08OC6-DvB3_22Lqu3U/exec";

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
