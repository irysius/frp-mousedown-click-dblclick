var eventType = document.getElementById('event-type');
var eventPosition = document.getElementById('event-position');
var eventParagraph = document.getElementById('event-paragraph');
function updateWithPayload(payload) {
	if (eventType.hasOwnProperty('innerText')) {
		eventType.innerText = payload.type;
		if (!payload.position) {
			eventPosition.innerText = 'N/A';
		} else {
			eventPosition.innerText = payload.position.x + ', ' + payload.position.y;
		}
		eventParagraph.innerText = payload.paragraph;
	} else {
		eventType.textContent = payload.type;
		if (!payload.position) {
			eventPosition.textContent = 'N/A';
		} else {
			eventPosition.textContent = payload.position.x + ', ' + payload.position.y;
		}
		eventParagraph.textContent = payload.paragraph;
	}
}