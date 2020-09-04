const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", gameEvent => {
        if (gameEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="player person"></div>`

        }
    })
}