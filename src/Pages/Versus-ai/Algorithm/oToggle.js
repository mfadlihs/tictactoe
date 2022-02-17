export default function oToggle(cell) {
	// cell.classList.add('o');
	// cell.classList.remove('empty');

	// return function () {
	// 	cell.classList.add('o');
	// 	console.log('click');
	// 	cell.classList.remove('empty');
	// 	cell.removeEventListener('click', oToggle(cell));
	// };
	cell.classList.add('o');
	console.log('click O');
	cell.classList.remove('empty');
}
