document.addEventListener('DOMContentLoaded', () => {
	let state = true;

	// Buttons
	const keyButton = document.getElementById('keyButton');
	const bathButton = document.getElementById('bathButton');
	const bedButton = document.getElementById('bedButton');
	const kitchenButton = document.getElementById('kitchenButton');
	const livingButton = document.getElementById('livingButton');
	const buttons = [keyButton, bathButton, bedButton, kitchenButton, livingButton];

	// Images
	const key = document.querySelector('.key');
	const bathLight = document.querySelector('.bathLight');
	const bedLight = document.querySelector('.bedLight');
	const kitchenLight = document.querySelector('.kitchenLight');
	const livingLight = document.querySelector('.livingLight');
	const images = [key, bathLight, bedLight, kitchenLight, livingLight];

	// Functions
	const showNotification = device => {
		if (Notification.permission === 'denied') return;
		Notification.requestPermission().then(function (permission) {
			if (permission === 'granted') {
				new Notification('Dispositivo apagado', {
					body: `El dispositivo ${device} se apagó`,
					icon: '../../public/images/lights/apagado.png',
				});
			}
		});
	};

	const showAlert = () => {
		Swal.fire({
			title: 'Se cortó la luz',
			text: '¿Desea ver el instructivo?',
			icon: 'error',
			showCancelButton: true,
			confirmButtonText: 'No, gracias',
			cancelButtonText: 'Si, por favor',
			confirmButtonColor: '#f3594a',
			cancelButtonColor: '#62e0a3',
			allowEnterKey: false,
			allowEscapeKey: false,
			allowOutsideClick: false,
			focusConfirm: false,
		}).then(response => {
			if (response.dismiss) Swal.fire('Instructivo', '1. XXX, 2. XXX, 3. XXX', 'info');
		});
	};

	const turnOnLights = () => {
		buttons.forEach(button => {
			button.checked = true;
		});
		images.forEach(image => {
			image.classList.remove('off');
		});
		state = !state;
	};

	const turnOffLights = () => {
		buttons.forEach(button => {
			button.checked = false;
		});
		images.forEach(image => {
			image.classList.add('off');
		});
		state = !state;
		showAlert();
	};

	const checkKey = () => {
		const keyStatus = keyButton.checked;
		if (!keyStatus) {
			Swal.fire('Térmica baja', 'Antes de prender el dispositivo levante la térmica', 'error');
			return false;
		}
		return true;
	};

	const toggle = (button, light) => {
		const deviceName = light.classList[1];
		const device = deviceName.charAt(0).toUpperCase() + deviceName.slice(1, -5);
		const buttonStatus = button.checked;
		if (!buttonStatus) {
			button.checked = false;
			light.classList.add('off');
			showNotification(device);
		} else {
			button.checked = true;
			light.classList.remove('off');
		}
		if (checkLights()) turnOffLights();
	};

	const checkLights = () => {
		let acc = 0;
		buttons.forEach((button, index) => {
			if (index === 0) return;
			if (!button.checked) acc++;
		});
		if (acc <= 3) return false;
		return true;
	};

	const lightListener = (button, light) => {
		button.addEventListener('click', () => {
			if (!checkKey()) return;
			toggle(button, light);
		});
	};

	// Triggers
	keyButton.addEventListener('click', () => {
		if (!state) turnOnLights();
		else turnOffLights();
	});

	lightListener(bathButton, bathLight);
	lightListener(bedButton, bedLight);
	lightListener(kitchenButton, kitchenLight);
	lightListener(livingButton, livingLight);
});
