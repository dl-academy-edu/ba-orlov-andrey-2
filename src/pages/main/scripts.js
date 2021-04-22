var btn = document.querySelector('.slider-button');
var form = document.querySelector('.modal-form');
var overlay = document.querySelector('.overlay');
var close = document.querySelector('.btn-close');
var input = form.querySelector('input');

btn.addEventListener('click', function() {
    form.classList.add('show');
    overlay.classList.add('show');
    input.focus();
})

close.addEventListener('click', function() {
    form.classList.remove('show');
    overlay.classList.remove('show');
})


window.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        if(form.classList.contains('show')) {
            form.classList.remove('show');
            overlay.classList.remove('show');
        }
    }
})
