// Get switches:
const cheap = document.querySelector('.cheap');
const fast = document.querySelector('.fast');
const nice = document.querySelector('.nice');

// Switches states:
const switchState = switchName => switchName.classList.contains('active');
const toggleActive = switchName => switchName.classList.toggle('active');
const removeActive = switchName => switchName.classList.remove('active');

// Switches listeners:
cheap.addEventListener('click', () => {
	toggleActive(cheap);
	if (switchState(fast) && switchState(nice)) removeActive(nice);
});

fast.addEventListener('click', () => {
	toggleActive(fast);
	if (switchState(cheap) && switchState(nice)) removeActive(cheap);
});

nice.addEventListener('click', () => {
	toggleActive(nice);
	if (switchState(cheap) && switchState(fast)) removeActive(fast);
});