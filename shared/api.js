const API_URL = "https://script.google.com/macros/s/AKfycby6i4CFE16v7SRaYeXth4eJWWs92xVCq1BU_c3OuKFAtOmtKqTzXZMa-iM5uY5knsby/exec";

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
