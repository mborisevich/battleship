import {Ship,Coordinate,Gameboard,Player} from "./classes.js"
import ocean_grid from "./assets/oceangrid.png"
import ships from "./assets/battleships.png"
import "./style.css";
import "./template.html"

function DOMController(){
    const playerBoard = document.querySelector(".board-container-player")
    const enemyBoard = document.querySelector(".board-container-enemy")
    function initGraphics(){
        initBackground(playerBoard)
        initBackground(enemyBoard)
    } 
    function renderShip(rootCoordinate, direction, ship){
        y = rootCoordinate[1]
        x = rootCoordinate[0]

        console.log("Rendering ship.")
        switch (direction){
            case "up":
                break
            case "down":
                break
            case "left":
                break
            case "right":
                for (let i = 0; i < ship.length; i++){
                    const row = playerBoard.querySelector(`#row-${y}`)
                    const col = row.querySelector(`#col-${x+i}`)
                    const content = col.querySelector('grid-content')
                    let xPos = x + 8.6*i
                    let yPos = 0
                    content.style.backgroundPosition = `${xPos} ${yPos}`
                }
                break
        }
    }
    function renderShip(rootCoordinate, direction, ship){
     
    }
    function initBackground(board){
        const rows = board.querySelectorAll(".row")
        rows.forEach((node, nodeindex) =>{
            console.log(nodeindex)
            let y = 0 + nodeindex * 34.2
            const columns = node.querySelectorAll(".col")
            columns.forEach((colNode, colNodeindex) =>{
                let x = 0 + colNodeindex * 34.2
                console.log(x)
                colNode.style.backgroundPosition = `${x}px ${y}px`;
            })
        })
    }
    function createContentElements(board){
        const rows = board.querySelectorAll(".row")
        rows.forEach((node) => {
            const columns = node.querySelectorAll(".col")
            columns.forEach((col) => {

                const contDiv = document.createElement("div")
                contDiv.classList.add("grid-content")
                col.appendChild(contDiv)
            })
        })
    }
    createContentElements(playerBoard)
    createContentElements(enemyBoard)
    return {initGraphics, createContentElements}
}
const testBoard = new Gameboard()
const destroyer = testBoard.createDestroyer()
testBoard.placeShip(destroyer,0,0,"down")
const controller = DOMController()
controller.initGraphics();