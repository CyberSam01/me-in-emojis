// 1. Loop through the myEmojis array and log each of them out to the console

const myEmojis = ["👋", "👩‍🦰", "👨‍👩‍👧", "♈", "☀️", "👩‍💻","🚵", "🏃‍♀️", "⛺", "🏖️", "🗺️", "🍔", "🍟", "🍫", "🌈"]
const container = document.getElementById("emojiContainer")
const pushBtn = document.getElementById("push-btn")
const popBtn = document.getElementById("pop-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const shiftBtn = document.getElementById("shift-btn")
const input = document.getElementById("emoji-input")

function renderEmojis() {
    container.textContent = ""
    const span = document.createElement("span")
    myEmojis.map(function(x) {
        span.textContent += `${x} `
        container.appendChild(span)
    })
    input.value = ""
}
renderEmojis()

pushBtn.addEventListener("click", function(){
    if (input.value){
    myEmojis.push(input.value)
    renderEmojis()
}
})

unshiftBtn.addEventListener("click", function(){
    if (input.value){
    myEmojis.unshift(input.value)
    renderEmojis()
    } 
})

popBtn.addEventListener("click", function(){
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    renderEmojis()
})