const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", foodEvent => {
        if (foodEvent.detail.ticketPurchased !== "0") {
            contentTarget.innerHTML += `<div class="eater person"></div>`

        }
    })
}