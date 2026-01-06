const API_URL = "https://script.google.com/macros/s/AKfycbzwH9m1dn7hug6mFbwSZNarNBPbVN84OQbyNQjao6tonxCJEewR-_vKZxt5FGWiZtd0/exec";

async function apiCall(payload) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    }
  });

  return response.json();
}
