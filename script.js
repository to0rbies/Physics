const firstinput = document.getElementById("firstinput")
const secondinput = document.getElementById("secondinput")
const btn = document.getElementById("btn")


btn.addEventListener("click", function () {
    console.log(`FirstInput: ${firstinput.value} , SecondInput: ${secondinput.value}`)
    result = Number(firstinput.value) + Number(secondinput.value)
    console.log(`Result: ${result}`)
})

