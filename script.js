const burgerBtn = document.getElementById('burgerBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileHeaderOff = document.getElementById('mobileHeaderOff');
const mobileHeaderOn = document.getElementById('mobileHeaderOn');
let isOn = false

burgerBtn.addEventListener('click', () => {
	toggleMobileHeader();
	isOn = !isOn;
});

closeBtn.addEventListener('click', () => {
	toggleMobileHeader();
	isOn = !isOn;
})

function toggleMobileHeader() {
	if (!isOn) {
		// Hide header off
		mobileHeaderOff.classList.remove('d-flex');
		mobileHeaderOff.classList.add('d-none');
		// show header on
		mobileHeaderOn.classList.remove('d-none');
		mobileHeaderOn.classList.add('d-flex');
	}
	else {
		// hide header on
		mobileHeaderOn.classList.remove('d-flex');
		mobileHeaderOn.classList.add('d-none');
		// show header off
		mobileHeaderOff.classList.remove('d-none');
		mobileHeaderOff.classList.add('d-flex');
	}
}