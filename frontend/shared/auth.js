function saveSession(token, role) {
  localStorage.setItem("session_token", token);
  localStorage.setItem("session_role", role);
}

function getToken() {
  return localStorage.getItem("session_token");
}

function getRole() {
  return localStorage.getItem("session_role");
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

function requireRole(expectedRole) {
  const token = getToken();
  const role = getRole();

  if (!token || role !== expectedRole) {
    logout();
  }
}
