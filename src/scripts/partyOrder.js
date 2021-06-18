import { getPartyOrders, deleteRequest } from "./dataAccess.js"

export const partyOrder = () => {
    const requestedParties = getPartyOrders() 

    let html = `
        <ul>
            ${
                requestedParties.map(requestedParty => {
                    return `
                        <li>
                            ${requestedParty.partyDate}
                            <button class="request__delete"
                                    id="request--${requestedParty.id}">
                                Deny
                            </button>
                        </li>
                    `
                }).join("")
            }`
    return html
    }


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
