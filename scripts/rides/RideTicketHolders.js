const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", rideEvent => {
        if (rideEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="rider person"></div>`

        }
    })
}

