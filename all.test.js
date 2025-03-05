import {Ship, Coordinate, Gameboard} from "./main.js"
const testGameboard = new Gameboard()
const testShip = testGameboard.createBattleship()
testGameboard.placeShip(testShip, 0, 3, "right")
test("length is larger than 0", ()=> {
    expect(testShip.length).toBeGreaterThanOrEqual(0);
}
)
test("length is smaller than 4", ()=> {
    expect(testShip.length).toBeLessThan(4);
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
    expect(testShip.health).toBe(2)
})
