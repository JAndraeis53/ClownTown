import { fetchRequests } from "./dataAccess.js" 
import { buttonsClown } from "./buttonsClown.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = buttonsClown()
        }
    )
}

render()
