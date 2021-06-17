const applicationState = {
    partyOrders: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requestedParties`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.partyOrders = serviceRequests
            }
        )
}


export const getPartyOrders = () => {
    return applicationState.partyOrders.map(partyOrder => ({...partyOrder}))
}