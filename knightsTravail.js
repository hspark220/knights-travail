class Board {
    constructor () {
        this.width = 8;
        this.height = 8;
        this.board = [
                    [' ',' ',' ',' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' ',' ',' ',' '],
                    [' ',' ',' ',' ',' ',' ',' ',' ']
                ];
        this.makeSquares();
    }

    makeSquares () {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j ++) {
                this.board[i][j] = new Square(i, j)
            }
        }
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j ++) {
                this.board[i][j].leftUp = this.makeNode(i,j, 'leftUp');
                this.board[i][j].upLeft = this.makeNode(i,j, 'upLeft');
                this.board[i][j].rightUp = this.makeNode(i,j, 'rightUp');
                this.board[i][j].upRight = this.makeNode(i,j, 'upRight');
                this.board[i][j].leftDown = this.makeNode(i,j, 'leftDown');
                this.board[i][j].downLeft = this.makeNode(i,j, 'downLeft');
                this.board[i][j].rightDown = this.makeNode(i,j, 'rightDown');
                this.board[i][j].downRight = this.makeNode(i,j, 'downRight');
            }
        }
    }

    makeNode (x, y, move) {
        if (move == 'leftUp') {
            const newX = x-1;
            const newY = y+2;
            return newX > 0 && newY > 0 && newX < this.width && newY < this.height ? this.board[newX][newY] : null
        } else if (move == 'upLeft') {
            const newX = x-2;
            const newY = y+1;
            return newX > 0 && newY > 0 && newX < this.width && newY < this.height ? this.board[newX][newY] : null
        }else if (move == 'rightUp') {
            const newX = x+1;
            const newY = y+2;
            return newX >  0 && newY > 0 && newX < this.width && newY < this.height ? this.board[newX][newY] : null
        } else if (move == 'upRight') {
            const newX = x+2;
            const newY = y+1;
            return newX > 0 && newY > 0 && newX < this.width && newY < this.height ? this.board[newX][newY] : null
        } else if (move == 'leftDown') {
            const newX = x-1;
            const newY = y-2;
            return newX > 0 && newY > 0 && newX < this.width && newY < this.height ? this.board[newX][newY] : null
        } else if (move == 'downLeft') {
            const newX = x-2;
            const newY = y-1;
            return newX > 0 && newY > 0 && newX < this.width && newY < this.height ? this.board[newX][newY] : null
        } else if (move == 'rightDown') {
            const newX = x+1;
            const newY = y-2;
            return newX > 0 && newY > 0 && newX < this.width && newY < this.height ? this.board[newX][newY] : null
        } else if (move == 'downRight') {
            const newX = x+2;
            const newY = y-1;
            return newX > 0 && newY > 0 && newX < this.width && newY < this.height ? this.board[newX][newY] : null
        } else {
            console.error('invalid move');
        }
    }

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

class Square {
    constructor (x = 0, y= 0, 
        leftUp = null, upLeft = null, rightUp = null, upRight = null,
        leftDown = null, downLeft = null, rightDown = null, downRight = null) {
        this.x = x;
        this.y = y;
        this.leftUp = leftUp;
        this.upLeft = upLeft;
        this.rightUp = rightUp;
        this.upRight = upRight;
        this.leftDown = leftDown;
        this.downLeft = downLeft;
        this.rightDown = rightDown;
        this.downRight = downRight;
    }

}

function knightMoves (start, dest, result = []) {
    const board = new Board().board;
    if (start.length != 2 || dest.length != 2) return 'bad start or destination arrays';
    const startX = start[0];
    const startY = start[1];
    const destX = dest[0];
    const destY = dest[1];

    const square = board[startX][startY];

    if (JSON.stringify(start)==JSON.stringify(dest)) {
        return result;
    } else {
        if (square.leftUp != null && !JSON.stringify(result).includes(JSON.stringify([square.x, square.y]))) {
            result.push([square.x, square.y]);
            return knightMoves([square.leftUp.x, square.leftUp.y], dest, result);
        }
        if (square.upLeft != null && !JSON.stringify(result).includes(JSON.stringify([square.x, square.y]))) {
            result.push([square.x, square.y]);
            return knightMoves([square.upLeft.x, square.upLeft.y],dest, result);
        } 
        if (square.rightUp != null && !JSON.stringify(result).includes(JSON.stringify([square.x, square.y]))) {
            result.push([square.x, square.y]);
            return knightMoves([square.rightUp.x, square.rightUp.y],dest, result);
        }
        if (square.upRight != null && !JSON.stringify(result).includes(JSON.stringify([square.x, square.y]))) {
            result.push([square.x, square.y]);
            return knightMoves([square.upRight.x, square.upRight.y],dest, result);
        } 
        if (square.leftDown != null && !JSON.stringify(result).includes(JSON.stringify([square.x, square.y]))) {
            result.push([square.x, square.y]);
            return knightMoves([square.leftDown.x, square.leftDown.y],dest, result);
        } 
        if (square.downLeft != null && !JSON.stringify(result).includes(JSON.stringify([square.x, square.y]))) {
            result.push([square.x, square.y]);
            return knightMoves([square.downLeft.x, square.downLeft.y],dest, result);
        }
        if (square.rightDown != null && !JSON.stringify(result).includes(JSON.stringify([square.x, square.y]))) {
            result.push([square.x, square.y]);
            return knightMoves([square.rightDown.x, square.rightDown.y],dest, result);
        }
        if (square.downRight != null && !JSON.stringify(result).includes(JSON.stringify([square.x, square.y]))) {
            result.push([square.x, square.y]);
            return knightMoves([square.downRight.x, square.downRight.y],dest, result);
        }
        else {
            return null;
        }
    }
    
}


// const board = new Board();
// console.log(board.board[0][0]);
 console.log(knightMoves([0,0],[1,2]));

// const array = [[2,3],[1,2]];
// console.log(array[0]);
// console.log([2,3]);
// console.log(JSON.stringify(array).includes(JSON.stringify([2,3])))

// console.log(JSON.stringify([2,3]) == JSON.stringify(array[0]))