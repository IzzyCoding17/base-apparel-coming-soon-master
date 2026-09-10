document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById("email-form");
    const emailInput = document.getElementById("email-input");
    const emailError = document.getElementById("email-error");
    const emailErrorIcon = document.getElementById("email-error-icon");
    const emailSubmit = document.getElementById("email-pass")

  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);

    if(!isValidEmail){
        emailInput.classList.add("border-red-500")
        emailError.classList.remove("hidden")
        emailErrorIcon.classList.remove("hidden")
       emailSubmit.classList.add("hidden")

    }
    else{
      emailInput.classList.remove("border-red-500")
      emailError.classList.add("hidden")
      emailErrorIcon.classList.add("hidden")
        emailSubmit.classList.remove("hidden")
    }


  })

  emailInput.addEventListener("input", () => {
    emailInput.classList.remove("border-red-500")
    emailError.classList.add("hidden")
    emailErrorIcon.classList.add("hidden")
    emailSubmit.classList.add("hidden")
  })

})  
