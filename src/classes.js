export {Ship, Coordinate, Gameboard, Player}
class Ship {
    constructor(name, length){
        this.name = name
        this.length = length;
        this.health = length;
        this.sunk = false;
        this.position = [];
        this.direction = undefined;
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
        this.grid = this.#initializeBoard()
        this.shots = []
        this.hits = []
        this.totalShips = 6
    }

    //Generate empty board with coordinate objects in a 10x10 grid
    #initializeBoard(){
        let emptyGrid = []
        for (let i = 0; i < 10; i++){
            emptyGrid.push([])
            for (let j = 0; j < 10; j++){
                emptyGrid[i].push(new Coordinate)
            }
        }
        return emptyGrid
    }
    restartBoard(){
        let newGrid = this.#initializeBoard()
        this.grid = newGrid
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
            let displayedGrid = this.grid[i].map((coordinate) => {
                if (coordinate.contains instanceof Ship){
                    return coordinate.contains.name[0]
                } else {
                    return "#"
                }
            })
            console.log(displayedGrid.toString())
        }
    }
    
    #executeAttack(x,y){
        if (this.containsShip(x,y)){
            targettedShip=this.getShip(x,y)
            targettedShip.hit()
            targettedShip.hitHull.push(x,y)
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
            return this.#executeAttack(x,y)
        }
    }
    #checkCollisions(ship, x, y , direction){
        let coordinateOccupied = false
        if (direction == "left"){
            for (let i = 0; i < ship.length;i++){
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
                if (this.containsShip(x,y-i)){
                    coordinateOccupied = true
                }
            }
        }
        return coordinateOccupied
    }
    createBattleship(){
        return new Ship("Battleship", 4)
    }
    createCruiser(){
        return new Ship("Cruiser", 3)
    }
    createDestroyer(){
        return new Ship("Destroyer", 2)
    }
    placeShip(ship, x, y, direction){
        if (direction == "left" && (x - ship.length >= 0) && !this.#checkCollisions(ship,x,y,direction)){
            for (let i = 0; i < ship.length; i++){
                this.grid[y][x-i].contains = ship
                ship.position.push([y,x-i])
                ship.direction = "left"
            }
            return ship
        } else if (direction == "right" && (x+ ship.length <= 9) && !this.#checkCollisions(ship,x,y,direction)){
            for (let i = 0; i < ship.length; i++){
                this.grid[y][x+i].contains = ship
                ship.position.push([y,x+i])
                ship.direction = "right"
            }
            return ship
        } else if (direction == "up" && (y + ship.length <= 9) && !this.#checkCollisions(ship,x,y,direction)){
            for (let i = 0; i < ship.length; i++){
                this.grid[y+i][x].contains = ship
                ship.position.push([y+i,x])
                ship.direction = "up"
            }
            return ship
        } else if (direction == "down" && (y - ship.length >= 0) && !this.#checkCollisions(ship,x,y,direction)) {
            for (let i = 0; i < ship.length; i++){
                this.grid[y-i][x].contains = ship
                ship.position.push([y-i,x])
                ship.direction = "down"
            }
            return ship
        } else {
            console.log("Ship cannot be placed this way!")
        }
    }
    randomGrid(){
        const directions = ["left", "right", "up", "down"]
        let randomY= Math.ceil(Math.random() * 9)
        let randomX = Math.ceil(Math.random() * 9)
        let randomDir = Math.ceil(Math.random() * (directions.length - 1))
        return [randomX, randomY, directions[randomDir]]
    }
    placeOnRandomGrid(ship, attempts=0){
        let grid = this.randomGrid()
        let placedShip = this.placeShip(ship, grid[0], grid[1], grid[2])
        if (!placedShip && attempts < 1000){
            this.placeOnRandomGrid(ship)
        }
    }
    generateShipDeck(numBattleships, numCruisers, numDestroyers){
        let ships = []
        for (let i = 0; i <= numBattleships; i++){
            ships.push(this.createBattleship())
        }
        for (let i = 0; i <= numCruisers; i++){
            ships.push(this.createCruiser())
        }
        for (let i = 0; i <= numDestroyers; i++){
            ships.push(this.createDestroyer())
        }
        return ships
        
    }
    populateBoard(){
        const ships = this.generateShipDeck(1, 3, 4)
        for (let i = 0; i < ships.length; i++){
            this.placeOnRandomGrid(ships[i])
        }
    }
}
class Player{
    constructor(name){
        this.name = name
        this.type = "player"
        this.board = new Gameboard()
        this.wins = 0
        this.losses = 0
    }
    set type(playerType){
        if (playerType == "player" || playerType=="ai"){
            this.type = playerType
        } else {
            console.log("invalid player type")
        }
    }
    winRound(){
        this.wins++
    }
    lostRound(){
        this.losses--
    }
}

