/*const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let totalTickets = 1

export const allTickets = () => {
    eventHub.addEventListener("click", clickEvent => {

        contentTarget.innerHTML = `Total tickets purchased: ${totalTickets}`
    })
}