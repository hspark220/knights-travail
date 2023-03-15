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

function knightMoves (start, dest) {
    const board = new Board().board;
    if (start.length != 2 || dest.length != 2) return 'bad start or destination arrays';
    const startX = start[0];
    const startY = start[1];

    let square = board[startX][startY];
    const queue = [square];
    const visitedSquares = [];
    const result = [];

    while (queue.length > 0) {
        square = queue.pop();
        if (square != null) {
            if (JSON.stringify([square.x, square.y]) == JSON.stringify(dest)) {
                return result;
            }
            if (!visitedSquares.includes(JSON.stringify([square.x, square.y]))) {
                visitedSquares.push([square.x, square.y]);
                result.push([square.x, square.y]);
                queue.unshift(square.leftUp);
                queue.unshift(square.upLeft);
                queue.unshift(square.rightUp);
                queue.unshift(square.upRight);
                queue.unshift(square.leftDown);
                queue.unshift(square.downLeft);
                queue.unshift(square.rightDown);
                queue.unshift(square.downRight);
            } else {
                continue;
            }
        } else {
            result.push('null');
        }
        /*
        if (square.leftUp != null) {
            if (!visitedSquares.includes(JSON.stringify([square.leftUp.x, square.leftUp.y]))) queue.unshift(square.leftUp);
        } else { visitedSquares.pop()}
        if(square.upLeft != null) {
            if (!visitedSquares.includes(JSON.stringify([square.upLeft.x, square.upLeft.y]))) queue.unshift(square.upLeft);
        }else { visitedSquares.pop()}
        if(square.rightUp != null) {
            if (!visitedSquares.includes(JSON.stringify([square.rightUp.x, square.rightUp.y]))) queue.unshift(square.rightUp);
        }else { visitedSquares.pop()}
        if(square.upRight != null) {
            if (!visitedSquares.includes(JSON.stringify([square.upRight.x, square.upRight.y]))) queue.unshift(square.upRight);
        }else { visitedSquares.pop()}
        if(square.leftDown != null) {
            if (!visitedSquares.includes(JSON.stringify([square.leftDown.x, square.leftDown.y]))) queue.unshift(square.leftDown);
        }else { visitedSquares.pop()}
        if(square.downLeft != null) {
            if (!visitedSquares.includes(JSON.stringify([square.downLeft.x, square.downLeft.y]))) queue.unshift(square.downLeft);
        }else { visitedSquares.pop()}
        if(square.rightDown != null) {
            if (!visitedSquares.includes(JSON.stringify([square.rightDown.x, square.rightDown.y]))) queue.unshift(square.rightDown);
        } else { visitedSquares.pop()}
        if(square.downRight != null) {
            if (!visitedSquares.includes(JSON.stringify([square.downRight.x, square.downRight.y]))) queue.unshift(square.downRight);
        }else { visitedSquares.pop()}
    */        

    }
    return false
    
}

const result = knightMoves([3,3],[4,3])
console.log(result)