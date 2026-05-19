const signupUrl = "https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM";

document.querySelectorAll("[data-signup-link]").forEach((link) => {
  link.href = signupUrl;
  link.target = "_blank";
  link.rel = "noopener";
});
