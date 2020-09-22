let totalTickets = 0
const ticketCountTarget = document.querySelector(".customers")
const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const selectedTicket = clickEvent.target.value

        let stateChangeEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }

        })
        allTickets(totalTickets++)
        eventHub.dispatchEvent(stateChangeEvent)
    }

    else if (clickEvent.target.id === "foodTicket") {
        const selectedTicket = clickEvent.target.value

        let stateChangeEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }
        })
        allTickets(totalTickets++)
        eventHub.dispatchEvent(stateChangeEvent)
    }
    else if (clickEvent.target.id === "gameTicket") {
        const selectedTicket = clickEvent.target.value

        let stateChangeEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }
        })
        allTickets(totalTickets++)
        eventHub.dispatchEvent(stateChangeEvent)
    }
    else if (clickEvent.target.id === "sideshowTicket") {
        const selectedTicket = clickEvent.target.value

        let stateChangeEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }
        })
        allTickets(totalTickets++)
        eventHub.dispatchEvent(stateChangeEvent)
    }
    else if (clickEvent.target.id === "fullPackageTicket") {
        const selectedTicket = clickEvent.target.value

        let stateChangeEvent = new CustomEvent("fullPackageTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }
        })
        allTickets(totalTickets++)
        eventHub.dispatchEvent(stateChangeEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

export const allTickets = () => {
    eventHub.addEventListener("click", clickEvent => {
        ticketCountTarget.innerHTML = `Total tickets purchased: ${totalTickets}`
    })
}



