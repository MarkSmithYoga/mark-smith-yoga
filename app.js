const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");
const formNote = document.querySelector("#form-note");
const contactForm = document.querySelector("#contact-form");
const contactName = document.querySelector("#name");
const contactEmail = document.querySelector("#contact-email");
const contactMessage = document.querySelector("#message");
const contactNote = document.querySelector("#contact-note");
const recipientEmail = "mrkasmith99@gmail.com";

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  const subject = encodeURIComponent("Smile Asana Playbook updates");
  const body = encodeURIComponent(`Please add this email to Smile Asana Playbook updates:\n\n${emailInput.value}`);
  window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  formNote.textContent = "Your email app is opening to send the sign-up request.";
  formNote.classList.add("is-success");
  emailForm.reset();
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const subject = encodeURIComponent("Smile Asana private lesson request");
  const body = encodeURIComponent(
    `Name: ${contactName.value}\nEmail: ${contactEmail.value}\n\nWhat I would like to work on:\n${contactMessage.value}`,
  );
  window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  contactNote.textContent = "Your email app is opening with your lesson request.";
  contactNote.classList.add("is-success");
  contactForm.reset();
});
