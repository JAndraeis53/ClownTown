// import { RequestForm } from "./RequestForm.js"
// import { partyOrder } from "./partyOrder.js"

export const buttonsClown = () => {
    return `
        <h1>Hire Buttons and Lollipop the Clowns</h1>
        <section class="requestForm">
            {RequestForm()}
        </section>

        <section class="partyOrders">
            <h2>Order a Party today!</h2>
            {partyOrder()}
        </section>
    `
}
