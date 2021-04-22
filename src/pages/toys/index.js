var range = document.querySelector('.range');

range.addEventListener('input', function () {
	var i = (this.value*100)/this.getAttribute('max');
	this.style.background = '-webkit-linear-gradient(left, #C29974 0%, #C29974 '+i+'%, rgba(0,0,0,0.5) '+i+'%, rgba(0,0,0,0.5) 100%)';
})
