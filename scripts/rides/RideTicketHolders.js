const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", rideEvent => {
        if (rideEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="rider person"></div>`

        }
    })
    eventHub.addEventListener("fullPackageTicketPurchased", fullPackageEvent => {
        if (fullPackageEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="bigSpender person"></div>`

        }
    })
}

