const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", gameEvent => {

        contentTarget.innerHTML += `<div class="player person"></div>`

    })

    eventHub.addEventListener("fullPackageTicketPurchased", fullPackageEvent => {

        contentTarget.innerHTML += `<div class="bigSpender person"></div>`


    })
}
