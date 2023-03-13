class Board {
    constructor () {
        this.width = 8;
        this.height = 8;
        this.board = [width][height];
    }

    isValid (x, y) {
        if (x > width || x < 0 || y < 0 || y > height) return false;
        return true;
    }

    mark(x,y) {
        board[x][y] = 'x';
    }

    isFull() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if (this.board[i][j] != 'x') return false;
            }
        }
        return true;
    }

    clear() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.board[i][j] = '';
            }
        }
    }
}

class Knight {
    constructor (startX = 0, startY= 0, 
        leftUp = null, upLeft = null, rightUp = null, upRight = null,
        leftDown = null, downLeft = null, rightDown = null, downRight = null) {
        this.position = [startX, startY]
        this.leftUp = leftUp;
        this.upLeft = upLeft;
        this.rightUp = rightUp;
        this.upRight = upRight;
        this.leftDown = leftDown;
        this.downLeft = downLeft;
        this.rightDown = rightDown;
        this.downRight = downRight;
    }

    // //different possible movements
    // moveLeftUp () {
    //     this.position[0] -= 1;
    //     this.position[1] += 2;
    // }

    // moveUpLeft () {
    //     this.position[0] -= 2;
    //     this.position[1] += 1;
    // }

    // moveRightUp () {
    //     this.position[0] += 1;
    //     this.position[1] += 2;
    // }

    // moveUpRight () {
    //     this.position[0] += 2;
    //     this.position[1] += 1;
    // }

    // moveLeftDown () {
    //     this.position[0] -= 1;
    //     this.position[1] -= 2;
    // }

    // moveDownLeft () {
    //     this.position[0] -= 2;
    //     this.position[1] -= 1;
    // }

    // moveRightDown () {
    //     this.position[0] += 1;
    //     this.position[1] -= 2;
    // }

    // moveDownRight () {
    //     this.position[0] += 2;
    //     this.position[1] -= 1;
    // }

}

const knightMoves = (() => {
    const board = new Board();
    const knight = new Knight();

    const buildMoveList = knight => {
        if (board.isValid(knight.position[0], knight.position[1])) return null;

        if (board.isFull()) return null;
        else {
            board.mark(knight.position[0], knight.position[1]);
        }
    }
})();

const knight = new Knight(0,0);
knight.moveDownLeft();
console.log(knight.position);
