const container = document.querySelector('.container');

let columns = 80;
let lines = 80;

for (let i = 0; i < lines; i++){
	for (let j = 0; j < columns; j++) {
		const square = document.createElement('div');
		square.classList.add('square');
		container.appendChild(square);
	}
	const breaker = document.createElement('div');
	breaker.classList.add('breaker');
	container.appendChild(breaker);
}

container.removeChild(container.lastChild);

// Colorir no hover

container.addEventListener('mouseover', (event) => {
	let target = event.target;
	target.classList.add('squareHovered')
})


