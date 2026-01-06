const API_URL = "https://script.google.com/macros/s/AKfycbzK_RzNs0g9kGvxXCAjNDvlRntxk4KNEiOPXBit_Ld_bNkrR8115wCZ3QOBcnIXTpZq/exec";

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
