const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", rideEvent => {

        contentTarget.innerHTML += `<div class="rider person"></div>`

    })

    eventHub.addEventListener("fullPackageTicketPurchased", fullPackageEvent => {

        contentTarget.innerHTML += `<div class="bigSpender person"></div>`

    })
}

