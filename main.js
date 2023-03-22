const tetri = [];
const playerElements = document.querySelectorAll('.player');
[...playerElements].forEach(ele => {
	const canvas = ele.querySelector('canvas');
	const tetris = new Tetris(ele);
	tetri.push(tetris);
});

const keyListener = (event) => {
	[
		[65, 68, 83, 70, 71],
		[37, 39, 40, 96, 16]
	].forEach((key, index) => {
		const player = tetri[index].player;
		if (event.type === 'keydown') {
			if (event.keyCode === key[0]) {
				player.move(-1);
			} else if (event.keyCode === key[1]) {
				player.move(1);
			} else if (event.keyCode === key[3]) {
				player.rotate(-1);
			} else if (event.keyCode === key[4]) {
				player.rotate(1);
			}
		}

		if (event.keyCode === key[2]) {
			if (event.type === 'keydown') {
				if (player.dropInterval !== player.DROP_FAST){
					player.drop();
					player.dropInterval = player.DROP_FAST;
				}
			} else {
				player.dropInterval = player.DROP_SLOW;
			}
		} 
	});
};
document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);
