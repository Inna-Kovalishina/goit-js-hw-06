const inputSymbols = document.querySelector('#validation-input');

inputSymbols.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.classList = '';
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('valid');
        return;
    }
    event.currentTarget.classList.add('invalid');
}
