let cells = document.querySelectorAll('#field td');
console.log(cells);

let i = 0;
function start(cells) {
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            if (i % 2 == 0) {
                this.textContent = 'X';
            } else {
                this.textContent = '0';
            }

            this.removeEventListener('click', step);
            if (isWinner(cells) == true) {
                alert(`Победитель ${this.textContent}`);
            } else if (i == 8) {
                alert('ничья');
            };

            i++;
        })
    }
}

start(cells);

function isWinner(cells) {
    let combs = [
        [0, 1, 2], // comb
        [3, 4, 5], // comb
        [6, 7, 8], // comb
        [0, 3, 6], // comb
        [1, 4, 7], // comb
        [2, 5, 8], // comb
        [0, 4, 8], // comb
        [2, 4, 6]  // comb
    ]

    for (let comb of combs) {
        if (cells[comb[0]].textContent == cells[comb[1]].textContent && cells[comb[1]].textContent ==
            cells[comb[2]].textContent && cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}

// let comb
// comb = [0, 1, 2]
// если (cells[0]) == (cells[1]) ==  cells[2]]
// true

// comb = [3, 4, 5]