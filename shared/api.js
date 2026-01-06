const API_URL = "https://script.google.com/macros/s/AKfycbz1BMWoRzLcPWxSdlC-xI4Io8uGl3MibIxi69vCk9h2Ii1yOA8c1hAzG5_AJS-uMSaz/exec";

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
