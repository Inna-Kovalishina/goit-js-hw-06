const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormBtnSubmit);

function onFormBtnSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value.trim();
    const password = formElements.password.value.trim(); 


    if (mail === "" || password === "") {
        alert('Attention, all fields must be filled!');
        return;
    }
    const formProperties = {
        mail,
        password,
    };
    console.log(formProperties)

    event.target.reset();
}
