const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", gameEvent => {
        if (gameEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="player person"></div>`

        }
    })
    eventHub.addEventListener("fullPackageTicketPurchased", fullPackageEvent => {
        if (fullPackageEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="bigSpender person"></div>`

        }
    })
}