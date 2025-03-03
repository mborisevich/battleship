export {Ship, Coordinate, Gameboard}
class Ship {
    constructor(length){
        this.length = length;
        this.health = length;
        this.sunk = false;
        this.hitHull = [];
    }
    hit(){
        this.health = this.health - 1
        this.#checkSunk()
    }

    #checkSunk(){
        if (this.health < 0){
            this.sunk = true
        }
    }
}
class Coordinate {
    constructor(){
        this.contains = 0
    }
}
class Gameboard {
    constructor(){
        this.grid = this.initializeBoard()
        this.missedShots = []
        this.totalShips = 6
    }

    //Generate empty board with coordinate objects in a 10x10 grid
    initializeBoard(){
        let emptyGrid = []
        for (let i = 0; i < 10; i++){
            emptyGrid.push([])
            for (let j = 0; j < 10; j++){
                emptyGrid[i].push(new Coordinate)
            }
        }
        return emptyGrid
    }

    //Add ships to the board
    placeShip(ship, x, y, direction){
        if (direction == "left" && (x - ship.length >= 0)){
            for (let i = 0; i < ship.length; i++){
                this.grid[x-i][y].contains = ship
            }
        } else if (direction == "right" && (x+ ship.length <= 10)){
            for (let i = 0; i < ship.length; i++){
                this.grid[x+i][y].contains = ship
            }
        } else if (direction == "up" && (y + ship.length <= 10)){
            for (let i = 0; i < ship.length; i++){
                this.grid[x][y+i].contains = ship
            }
        } else if (direction == "down" && (y - ship.length >= 0)) {
            for (let i = 0; i < ship.length; i++){
                this.grid[x][y+i].contains = ship
            }
        } else {
            console.log("Ship cannot be placed this way!")
        }
    }

}