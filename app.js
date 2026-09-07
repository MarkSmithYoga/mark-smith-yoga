const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");
const formNote = document.querySelector("#form-note");
const contactForm = document.querySelector("#contact-form");
const contactName = document.querySelector("#name");
const contactNote = document.querySelector("#contact-note");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  formNote.textContent = `Thank you — ${emailInput.value} is on the list.`;
  formNote.classList.add("is-success");
  emailForm.reset();
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  contactNote.textContent = `Thanks, ${contactName.value} — your lesson request is ready to send.`;
  contactNote.classList.add("is-success");
  contactForm.reset();
});
