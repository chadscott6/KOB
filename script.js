const signupUrl = "https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM";
const accessPasswordHash = "b60c2f01c409a0c9add7d5bee23bae8dc62a63abdfc16ce3f38d3fdde0f5fe73";
const accessGrantedKey = "kob-access-granted";

document.querySelectorAll("[data-signup-link]").forEach((link) => {
  link.href = signupUrl;
  link.target = "_blank";
  link.rel = "noopener";
});

const accessGate = document.querySelector(".access-gate");
const accessForm = document.querySelector("#access-form");
const passwordInput = document.querySelector("#access-password");
const accessStatus = document.querySelector("#access-status");
const siteContent = document.querySelector("#site-content");

function unlockSite() {
  document.body.classList.remove("access-locked");
  accessGate.hidden = true;
  siteContent.removeAttribute("aria-hidden");
  sessionStorage.setItem(accessGrantedKey, "true");
}

async function hashPassword(value) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function setStatus(message, state) {
  accessStatus.textContent = message;
  accessStatus.classList.toggle("is-denied", state === "denied");
  accessStatus.classList.toggle("is-granted", state === "granted");
}

if (sessionStorage.getItem(accessGrantedKey) === "true") {
  unlockSite();
} else {
  passwordInput.focus();
}

accessForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setStatus("verifying...", null);

  const attemptHash = await hashPassword(passwordInput.value);

  if (attemptHash === accessPasswordHash) {
    setStatus("access granted", "granted");
    window.setTimeout(unlockSite, 420);
    return;
  }

  setStatus("access denied", "denied");
  passwordInput.value = "";
  passwordInput.focus();
});
