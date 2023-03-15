
const getTableSize = (coins, total) => {
    const rows = coins.length + 1;
    const cols = total + 1;
    return { rows, cols };
};

const createDPTable = (coins, total) => {
    const { rows, cols } = getTableSize(coins, total);
    const table = new Array(rows).fill(Infinity).map(() => new Array(cols).fill(Infinity));
    for (let row = 0; row < rows; row++) {
        table[row][0] = 0;
    }
    for (let row = 1; row < table.length; row += 1) {
        const coin = coins[row - 1];
        for (let col = 1; col < table[row].length; col += 1) {
            if (coin > col) {
                table[row][col] = table[row - 1][col];
            } else {
                table[row][col] = Math.min(table[row][col - coin] + 1, table[row - 1][col]);
            }
        }
    }
    for(let i = 1;i<table[0].length;i++){
        table[0][i] = i
    }
    for (let row = 1; row < rows; row++) {
        table[row][0] = coins[row - 1];
    }
    table[0][0] = ''
    return table;
};
