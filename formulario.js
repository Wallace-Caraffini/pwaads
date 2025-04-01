const form = document.getElementById("form-contato")

form.addEventListener("submit", event => {
    if (!form.checkValidity()){
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add("was-validated")
}, false)