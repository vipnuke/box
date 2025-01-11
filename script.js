const cuboid = document.querySelector(".cuboid");
let isDragging = false;
let startX, startY;
let currentX = 0,
	currentY = 0;

cuboid.addEventListener("mousedown", (e) => {
	isDragging = true;
	startX = e.clientX;
	startY = e.clientY;
	cuboid.style.animation = "none"; // Pause animation when dragging
});

document.addEventListener("mousemove", (e) => {
	if (!isDragging) return;

	const deltaX = e.clientX - startX;
	const deltaY = e.clientY - startY;
	startX = e.clientX;
	startY = e.clientY;

	currentX += deltaY * 0.5;
	currentY += deltaX * 0.5;

	cuboid.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
});

document.addEventListener("mouseup", () => {
	isDragging = false;
	cuboid.style.animation = "autoRotate 10s infinite linear"; // Resume animation after dragging
});
