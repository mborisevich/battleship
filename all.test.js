import {Ship, Coordinate, Gameboard} from "./classes.js"
import {Manager} from "./manager.js"


const testGameboard = new Gameboard()
const testShip = testGameboard.createBattleship()
testGameboard.placeShip(testShip, 0, 3, "right")
test("length is larger than 0", ()=> {
    expect(testShip.length).toBeGreaterThanOrEqual(0);
}
)
test("length is smaller than 5", ()=> {
    expect(testShip.length).toBeLessThan(5);
}
)


test("The gameboard contains 10 columns with Coordinate objects)", () => {
    expect(testGameboard.grid.length).toBe(10)
})
test("Each column contains 10 rows with with Coordinate objects)", () => {
    expect(testGameboard.grid[0].length).toBe(10)
})

test("The gameboard contains a ship at x = 0 and y = 3", () => {
    expect(testGameboard.containsShip(0,3)).toBe(true)
})
test("The gameboard contains a ship at x = 1 and y = 3", () => {
    expect(testGameboard.containsShip(1,3)).toBe(true)
})
test("The gameboard contains a ship at x = 2 and y = 3", () => {
    expect(testGameboard.containsShip(2,3)).toBe(true)
})
test("containsShip finds ship in correct grid", () => {
    expect(testGameboard.containsShip(0,3)).toBe(true)
})
test("Ship loses 1 health after ReceiveAttack is called on coordinates", () => {
    testGameboard.receiveAttack(0,3);
    expect(testShip.health).toBe(3)
})
test("Return random x,y coordinates and direction", () => {
    const expectedStrings = ["left","right","up","down"]
    const randomGrid = testGameboard.randomGrid()
    expect(randomGrid[0]).toBeGreaterThanOrEqual(0);
    expect(randomGrid[1]).toBeGreaterThanOrEqual(0);
    expect(randomGrid[0]).toBeLessThan(10);
    expect(randomGrid[1]).toBeLessThan(10);
    const numberofMatches = expectedStrings.filter(x => x == randomGrid[2])
    expect(numberofMatches.length).toEqual(1);
})
test("Place ship has been called during populate board", () => {
    const gameboardPop = new Gameboard();
    const placeShipSpy = jest.spyOn(gameboardPop, "placeShip")
    gameboardPop.populateBoard();
    expect(placeShipSpy).toHaveBeenCalled()
    gameboardPop.printBoard()
})