const button = document.querySelector('#main_nav_btn');

const menu = document.querySelector('#main_nav');

button.addEventListener('click', () => {
	button.classList.toggle('open');
	menu.classList.toggle('open')
})
