// Select elements
const fullHeight = document.body.scrollHeight - window.innerHeight;
const line = document.querySelector('.parallaxLine');
const texts = [
	document.querySelector('.firstText'),
	document.querySelector('.secondText'),
	document.querySelector('.thirdText'),
	document.querySelector('.fourthText'),
	document.querySelector('.fifthText'),
	document.querySelector('.sixthText'),
	document.querySelector('.seventhText'),
	document.querySelector('.eighthText'),
];

const textsPoints = [300, 600, 950, 1300, 1700, 2000, 2400, 2710];

// Scroll listener
window.addEventListener('scroll', () => {
	let scroll = window.scrollY;
	const progress = (scroll / fullHeight) * 100;
	line.style.width = `${progress}vw`;

	for (let i = 0; i < textsPoints.length; i++) {
		if (scroll >= textsPoints[i]) texts[i].style.display = 'flex';
		else texts[i].style.display = 'none';
	}
});
