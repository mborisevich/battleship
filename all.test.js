import {Ship, Coordinate, Gameboard} from "./main.js"
const testShip = new Ship(3)
const testGameboard = new Gameboard()
testGameboard.placeShip(testShip, 3, 0, "up")
test("length is larger than 0", ()=> {
    expect(testShip.length).toBeGreaterThanOrEqual(0);
}
)
test("length is smaller than 4", ()=> {
    expect(testShip.length).toBeLessThan(4);
}
)

testShip.hit()

test("expect health to be 2 after 1 hit", () => {
    expect(testShip.health).toBe(2);
})

test("The gameboard contains 10 columns with Coordinate objects)", () => {
    expect(testGameboard.grid.length).toBe(10)
})
test("Each column contains 10 rows with with Coordinate objects)", () => {
    expect(testGameboard.grid[0].length).toBe(10)
})

test("The gameboard contains a ship at x = 0 and y = 3", () => {
    expect(testGameboard.grid[3][0].contains).toBe(testShip)
})
test("The gameboard contains a ship at x = 1 and y = 3", () => {
    expect(testGameboard.grid[3][1].contains).toBe(testShip)
})
test("The gameboard contains a ship at x = 2 and y = 3", () => {
    expect(testGameboard.grid[3][2].contains).toBe(testShip)
})

test("return missed shot coordinates", () => {
    expect(testGameboard.receiveAttack(5,7).toBe([5,7]))
})