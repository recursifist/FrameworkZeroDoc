const box = document.getElementById("img-box")
const img = box.querySelector("img")
const imgs = document.querySelectorAll("a img")

imgs.forEach(x => {
    x.addEventListener("click", e => {
        if (window.innerWidth < 1024) return
        e.preventDefault()
        img.src = e.target.src
        box.classList.remove("invisible")
    })
})

box.addEventListener("click", e => {
    img.src = ""
    box.classList.add("invisible")
})

