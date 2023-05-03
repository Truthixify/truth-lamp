const room = document.querySelector("main")
const lightSwitch = document.querySelector(".switch")
const light = document.querySelector(".light")

console.log(lightSwitch)

lightSwitch.addEventListener("click", () => {
    lightSwitch.classList.toggle("switch-toggle")
    light.classList.toggle("light-toggle")
    room.classList.toggle("room-toggle")
})