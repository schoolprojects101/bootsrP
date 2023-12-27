
const buttonColors = {
	btnLike: "blue",
	btnHeart: "red",
	btnWow: "yellow",
	btnSad: "brown",
	btnAngry: "red",
};

function buttonClick(button) {
	const buttons = document.querySelectorAll(".btn");

	// Set all buttons to grey
	buttons.forEach((btn) => (btn.style.color = "gray"));

	// Set the clicked button to its specific color
	button.style.color = buttonColors[button.id];
}

$(document).ready(function () {
	$(".dropdown-toggle").dropdown();
});
