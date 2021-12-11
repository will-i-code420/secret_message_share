document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const msgInput = document.querySelector('#message-input');
	const encoded = btoa(msgInput.value);
	const linkInput = document.querySelector('#link-input');
	msgInput.value = '';
	document.querySelector('#message-input-container').classList.add('hidden');
	linkInput.value = `${window.location}#${encoded}`;
	document.querySelector('#link-input-container').classList.remove('hidden');
});
