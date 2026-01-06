const API_URL = "https://script.google.com/macros/s/AKfycbxUtQSydhUohTsWFzGrlLG1QmprBldx5GNXkmTgYDEaL6Jkr2F-ZnvK3_OF2TREi9oq/exec";

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
