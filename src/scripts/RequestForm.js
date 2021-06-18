import { sendPartyOrder } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParent = document.querySelector("input[name='serviceParent']").value
        const userChild = document.querySelector("input[name='serviceChild']").value
        const userNumOfChildren = document.querySelector("input[name='serviceNumOfChildren']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userPartyDate = document.querySelector("input[name='servicePartyDate']").value
        const userPartyHrs = document.querySelector("input[name='servicePartyHrs']").value

        const dataToSendToAPI = {
            parent: userParent,
            child: userChild,
            numOfChildren: userNumOfChildren,
            address: userAddress,
            partyDate: userPartyDate,
            partyHrs: userPartyHrs
        }

        sendPartyOrder (dataToSendToAPI)
    }
})


export const RequestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceParent">Parent</label>
            <input type="text" name="serviceParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceChild">Child</label>
            <input type="text" name="serviceChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceNumOfChildren">NumOfChildren</label>
            <input type="number" name="serviceNumOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address needed</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="servicePartyDate">PartyDate needed</label>
            <input type="date" name="servicePartyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="servicePartyHrs">PartyHrs needed</label>
            <input type="number" name="servicePartyHrs" class="input" />
        </div>

        <button class="button" id="submitRequest">Let's get to clowning!</button>
    `

    return html
}
