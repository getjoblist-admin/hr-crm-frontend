requireRole("ADMIN");

/* LOGIN */
async function login() {
  try {
    const res = await apiCall({
      action: "login",
      email: email.value.trim(),
      password: password.value
    });

    if (res.success && res.role === "ADMIN") {
      saveSession(res.token, res.role);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid admin login");
    }
  } catch {
    alert("Server error");
  }
}

/* REASSIGN */
async function reassign() {
  try {
    const res = await apiCall({
      action: "admin_reassign",
      token: getToken(),
      candidate_id: candidateId.value.trim(),
      new_caller_id: callerId.value.trim()
    });

    alert(res.success ? "Reassigned successfully" : "Failed");
  } catch {
    alert("Error reassigning");
  }
}
