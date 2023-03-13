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
}

class Knight {
    constructor (startX = 0, startY= 0) {
        this.position = [startX, startY]
    }

    //different possible movements
    moveLeftUp () {
        this.position[0] -= 1;
        this.position[1] += 2;
    }

    moveUpLeft () {
        this.position[0] -= 2;
        this.position[1] += 1;
    }

    moveRightUp () {
        this.position[0] += 1;
        this.position[1] += 2;
    }

    moveUpRight () {
        this.position[0] += 2;
        this.position[1] += 1;
    }

    moveLeftDown () {
        this.position[0] -= 1;
        this.position[1] -= 2;
    }

    moveDownLeft () {
        this.position[0] -= 2;
        this.position[1] -= 1;
    }

    moveRightDown () {
        this.position[0] += 1;
        this.position[1] -= 2;
    }

    moveDownRight () {
        this.position[0] += 2;
        this.position[1] -= 1;
    }

}

const knight = new Knight(0,0);
knight.moveDownLeft();
console.log(knight.position);
