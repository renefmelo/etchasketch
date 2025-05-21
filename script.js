const container = document.querySelector('.container');
const gridBt = document.querySelector('.gridBt');

let gridSize = 80;

let columns = gridSize;
let lines = gridSize;

console.log(columns);
console.log(lines);
console.log(gridSize);

// Main code

createGrid(columns, lines);

// Mudar grid com botão

gridBt.addEventListener('click', (event) => {
	gridSize = Number(prompt(`say a grid size (100 or less)`));
	while (gridSize > 100) {
		gridSize = Number(prompt(`Patty don't start. 100 or less.`));
	}
	columns = gridSize;
	lines = gridSize;
	removeGrid();
	createGrid(columns, lines);
})


// Gerar Grid

function createGrid(columns, lines) {
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
}

function removeGrid() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

// Colorir no hover

container.addEventListener('mouseover', (event) => {
	let target = event.target;
	target.classList.add('squareHovered')
})


