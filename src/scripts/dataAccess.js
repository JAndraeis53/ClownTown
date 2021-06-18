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

const mainContainer = document.querySelector("#container");

export const sendPartyOrder = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/requestedParties`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}

export const deleteRequest = (id) => {
    return fetch(`${API}/requestedParties/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
