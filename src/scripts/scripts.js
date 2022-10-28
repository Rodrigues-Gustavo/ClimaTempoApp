const html = document.querySelector('html');
const checkbox =  document.querySelector('#hide-checkbox');

function toggle() {
    checkbox.addEventListener('change',() => {
        html.classList.toggle('light-mode')
    });
};

toggle();