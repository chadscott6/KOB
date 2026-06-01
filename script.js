const signupUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfjcPTJBT0BhUzFIZHXzCtlmx8GigzqmC-qx__5Lbxuuy25pg/viewform?usp=publish-editor";

document.querySelectorAll("[data-signup-link]").forEach((link) => {
  link.href = signupUrl;
  link.target = "_blank";
  link.rel = "noopener";
});
