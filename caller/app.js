requireRole("CALLER");

let currentCandidate = null;

/* LOGIN */
async function login() {
  try {
    const res = await apiCall({
      action: "login",
      email: email.value.trim(),
      password: password.value
    });

    if (res.success && res.role === "CALLER") {
      saveSession(res.token, res.role);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials");
    }
  } catch {
    alert("Server error");
  }
}

/* FETCH CANDIDATE */
async function fetchCandidate() {
  try {
    const res = await apiCall({
      action: "get_next_candidate",
      token: getToken()
    });

    if (!res.candidate_id) {
      alert(res.message || "No candidates");
      return;
    }

    currentCandidate = res;
    renderCandidate(res);
  } catch {
    alert("Error fetching candidate");
  }
}

/* RENDER */
function renderCandidate(c) {
  candidateBox.innerHTML = `
    <h5>${c.name}</h5>
    <p><strong>Mobile:</strong> ${c.mobile}</p>
    <p><strong>Role:</strong> ${c.role}</p>

    <select id="callStatus" class="form-select mb-2">
      <option value="HOT">Hot</option>
      <option value="WARM">Warm</option>
      <option value="COLD">Cold</option>
      <option value="NO_ANSWER">No Answer</option>
    </select>

    <textarea id="comment" class="form-control mb-2" placeholder="Comment"></textarea>

    <button class="btn btn-primary w-100" onclick="submitCall()">Submit Call</button>
  `;
}

/* SUBMIT CALL */
async function submitCall() {
  try {
    await apiCall({
      action: "submit_call",
      token: getToken(),
      candidate_id: currentCandidate.candidate_id,
      call_result: callStatus.value,
      follow_up_required: "NO",
      comment: comment.value.trim()
    });

    location.reload();
  } catch {
    alert("Submission failed");
  }
}