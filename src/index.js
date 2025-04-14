import {Ship,Coordinate,Gameboard,Player} from "./classes.js"
import ocean_grid from "./assets/oceangrid.png"
import "./style.css";
import "./template.html"

function DOMController(){
    function initGraphics(){
        const playerBoard = document.querySelector(".board-container-player")
        const enemyBoard = document.querySelector(".board-container-enemy")
        initBackground(playerBoard)
        initBackground(enemyBoard)
    } 
    function initBackground(playerBoard){
        const rows = playerBoard.querySelectorAll(".row")
        rows.forEach((node, nodeindex) =>{
            console.log(nodeindex)
            let y = 10 + nodeindex * 10
            const columns = node.querySelectorAll(".col")
            columns.forEach((colNode, colNodeindex) =>{
                let x = 10 + colNodeindex * 10
                console.log(x)
                colNode.style.backgroundPosition = `${x}% ${y}%`;
            })
        })
    }

    return {initGraphics}
}
const controller = DOMController()
controller.initGraphics();