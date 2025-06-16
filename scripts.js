// Currency variables
const USD = 5.50
const EUR = 6.38
const GBP = 7.48

// Get the form and input elements
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Make sure the amount input accepts only numbers
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Handle form submission
form.onsubmit = (event) => {
    event.preventDefault()
    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Function to handle the convertion
function convertCurrency(amount, price, symbol) {
    try {
        // Display currency selected
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        // Calculate and format total amount
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")
        result.textContent = `${total} reais`
        // Add class to display the result
        footer.classList.add("show-result")
    } catch (error) {
        footer.classList.remove("show-result")
        alert("Não foi possível converter o valor. Por favor, tente novamente.")
    }
}

// Format the value to BRL currency
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

