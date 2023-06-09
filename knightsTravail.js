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

    let square = board[start[0]][start[1]];
    const previousNodes = [[square, '']];
    let previousNode;
    const queue = [square];
    const visitedSquares = [];
    const result = [];

    while (queue.length > 0) {
        square = queue.pop();
        if (square == 'newNode') {
            let newPrevious;
            //get rid of "empty" nodes
            while (square == 'newNode') {
                square = queue.pop();
                newPrevious = previousNodes.pop();
            }
            if (newPrevious[0] != null) previousNode = [newPrevious[0].x, newPrevious[0].y, newPrevious[1]];
        }

        queue.unshift('newNode')
        if (square != null) {
            if (JSON.stringify([square.x, square.y]) == JSON.stringify(dest)) {
                result.push([square.x, square.y, previousNode]);
                return result[result.length-1];
            }
            if (!JSON.stringify(visitedSquares).includes(JSON.stringify([square.x, square.y]))) {
                visitedSquares.push([square.x, square.y]);
                result.push([square.x, square.y, previousNode]);
                queue.unshift(square.leftUp);
                previousNodes.unshift([square.leftUp, [square.x, square.y, previousNode]]);
                queue.unshift(square.upLeft);
                previousNodes.unshift([square.upLeft, [square.x, square.y, previousNode]]);
                queue.unshift(square.rightUp);
                previousNodes.unshift([square.rightUp, [square.x, square.y, previousNode]]);
                queue.unshift(square.upRight);
                previousNodes.unshift([square.upRight, [square.x, square.y, previousNode]]);
                queue.unshift(square.leftDown);
                previousNodes.unshift([square.leftDown, [square.x, square.y, previousNode]]);
                queue.unshift(square.downLeft);
                previousNodes.unshift([square.leftDown, [square.x, square.y, previousNode]]);
                queue.unshift(square.rightDown);
                previousNodes.unshift([square.rightDown, [square.x, square.y, previousNode]]);
                queue.unshift(square.downRight);
                previousNodes.unshift([square.downRight, [square.x, square.y, previousNode]]);
            } 
        } 

    }
    return false
    
}

const result = knightMoves([2,2],[3,4])
let tempResult = result;
const realResult = [];
while (tempResult != null) {
    realResult.push([tempResult[0],tempResult[1]])
    tempResult = tempResult[2];
}

console.log(`You made it in ${realResult.length-2} moves! Here's your path:`)
for (let i = realResult.length-1; i >= 0; i--) {
    console.log(realResult[i]);
}


