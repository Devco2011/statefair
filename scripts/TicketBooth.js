const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const selectedTicket = clickEvent.target.value

        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        const selectedTicket = clickEvent.target.value

        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {
        const selectedTicket = clickEvent.target.value

        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }
        })
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sideshowTicket") {
        const selectedTicket = clickEvent.target.value

        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                ticket: selectedTicket
            }
        })
        eventHub.dispatchEvent(sideshowEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}



