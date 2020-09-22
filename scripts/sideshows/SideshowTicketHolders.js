const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", sideshowEvent => {

        contentTarget.innerHTML += `<div class="gawker person"></div>`

    })

    eventHub.addEventListener("fullPackageTicketPurchased", fullPackageEvent => {

        contentTarget.innerHTML += `<div class="bigSpender person"></div>`

    })
}