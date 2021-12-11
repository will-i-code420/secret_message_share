const { hash } = window.location;
const msg = atob(hash.replace('#', ''));
if (msg) {
	document.querySelector('#message-input-container').classList.add('hide');
	document.querySelector('#message-display-container').classList.remove('hide');
	document.querySelector('#message-dispaly').innerHTML = msg;
}

document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();
	const msgInput = document.querySelector('#message-input');
	const encoded = btoa(msgInput.value);
	const linkInput = document.querySelector('#link-input');
	msgInput.value = '';
	document.querySelector('#message-input-container').classList.add('hide');
	const linkVal = `${window.location}#${encoded}`;
	linkInput.value = linkVal;
	document.querySelector('#link-input-container').classList.remove('hide');
	linkInput.select();
});
