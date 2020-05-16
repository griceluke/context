export function lockVerticalScroll() {
	document.body.style.overflowY = 'hidden';
}

export function unlockVerticalScroll() {
	document.body.style.overflowY = 'scroll';
}
