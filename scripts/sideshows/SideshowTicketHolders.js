const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", sideshowEvent => {
        if (sideshowEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="gawker person"></div>`

        }
    })
    eventHub.addEventListener("fullPackageTicketPurchased", fullPackageEvent => {
        if (fullPackageEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="bigSpender person"></div>`

        }
    })
}