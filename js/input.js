const inputs = document.querySelectorAll('.soft-input')

const formatNumber = number => number.slice(0, 2)

inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.value = formatNumber(input.value)
    })
})
