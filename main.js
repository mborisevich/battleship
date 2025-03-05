//export {Ship, Coordinate, Gameboard}
class Ship {
    constructor(name, length){
        this.name = name
        this.length = length;
        this.health = length;
        this.sunk = false;
        this.position = []
        this.hitHull = [];
    }
    hit(){
        this.health = this.health - 1
        this.#checkSunk()
    }
    giveName(){
        return this.name
    }

    #checkSunk(){
        if (this.health < 0){
            this.sunk = true
            console.log("Ship has sunk!")
        }
    }
}
class Coordinate {
    constructor(){
        this.contains = 0
    }
    printCoordinate(){
        console.log(contains)
    }
}
class Gameboard {
    constructor(){
        this.grid = this.initializeBoard()
        this.shots = []
        this.hits = []
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

    containsShip(x,y){
        if (this.grid[y][x].contains instanceof Ship){
            return true
        } else {
            return false
        }
    }
    getShip(x,y){
        return this.grid[y][x].contains
    }
    printBoard(){
        for (let i = 0; i < 10; i++){
            let displayedGrid = this.grid[i].map((val) => {
                if (val.contains instanceof Ship){
                    return "s"
                } else {
                    return "#"
                }
            })
            console.log(displayedGrid.toString())
        }
    }
    
    executeAttack(x,y){
        if (this.containsShip(x,y)){
            this.getShip(x,y).hit()
            this.hits.push([x,y])
            return console.log(`Ship hit at coordinates: x=${x},y=${y}`)
        }
        else {
            this.missedShots.push([x,y])
            return console.log("No hit!")
        }
    }
    receiveAttack(x,y){
        if (x > 10 || y > 10){
            console.log("Coordinates out of bounds!")
        } else if (this.hits.includes([x,y]) || this.shots.includes([x,y])){
            console.log("This grid has already been targeted")
        }
        else {
            return this.executeAttack(x,y)
        }
    }
    checkCollisions(ship, x, y , direction){
        let coordinateOccupied = false
        if (direction == "left"){
            for (let i = 0; i < ship.length; i++){
                if (this.containsShip(x-i,y)){
                    coordinateOccupied = true
                }
            }
        } else if (direction == "right"){
            for (let i = 0; i < ship.length; i++){
                if (this.containsShip(x+i,y)){
                    coordinateOccupied = true
                }
            }
        } else if (direction == "up") {
            for (let i = 0; i < ship.length; i++){
                if (this.containsShip(x,y+i)){
                    coordinateOccupied = true
                }
            }
        } else if (direction == "down"){
            for (let i = 0; i < ship.length; i++){
                if (this.containsShip(x-i,y)){
                    coordinateOccupied = true
                }
            }
        }
        return coordinateOccupied
    }
    createBattleship(){
        return new Ship("Battleship", 3)
    }
    createCruiser(){
        return new Ship("Cruiser", 2)
    }
    createDestroyer(){
        return new Ship("Destroyer", 1)
    }
    placeShip(ship, x, y, direction){
        if (direction == "left" && (x - ship.length >= 0) && !this.checkCollisions(ship,x,y,direction)){
            for (let i = 0; i < ship.length; i++){
                this.grid[y][x-i].contains = ship
            }
        } else if (direction == "right" && (x+ ship.length <= 10) && !this.checkCollisions(ship,x,y,direction)){
            for (let i = 0; i < ship.length; i++){
                this.grid[y][x+i].contains = ship
            }
        } else if (direction == "up" && (y + ship.length <= 10) && !this.checkCollisions(ship,x,y,direction)){
            for (let i = 0; i < ship.length; i++){
                this.grid[y+i][x].contains = ship
            }
        } else if (direction == "down" && (y - ship.length >= 0) && !this.checkCollisions(ship,x,y,direction)) {
            for (let i = 0; i < ship.length; i++){
                this.grid[y-i][x].contains = ship
            }
        } else {
            console.log("Ship cannot be placed this way!")
        }
    }

}

