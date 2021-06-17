import { getPartyOrders } from "./dataAccess.js"

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
                                Delete
                            </button>
                        </li>
                    `
                })
            }`
    return html
    }