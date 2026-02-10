/// DISABLED
// // Canvas Animation
// const canvas = document.getElementById('header-canvas')
// const ctx = canvas.getContext('2d')
// let width, height, dots
// const isMobileScreen = () => window.matchMedia("(max-width: 768px)").matches
// const maxDots = isMobileScreen() ? 20 : 30
// const maxDistance = isMobileScreen() ? 400 : 700
// const maxSpeed = 0.1
// const root = document.documentElement
// const dotColor = root.style.getPropertyValue('--color-accent') || '#1872C8'
// const lineColor = '#1872C899'

// class Dot {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//     this.vx = (Math.random() - 0.5) * maxSpeed
//     this.vy = (Math.random() - 0.5) * maxSpeed
//     this.radius = Math.random() + 0.6
//   }

//   update() {
//     this.x += this.vx
//     this.y += this.vy

//     if (this.x < 0 || this.x > width) this.vx *= -1
//     if (this.y < 0 || this.y > height) this.vy *= -1
//   }

//   draw() {
//     ctx.beginPath()
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
//     ctx.fillStyle = dotColor
//     ctx.fill()
//   }
// }

// const initCanvas = () => {
//   width = canvas.width = window.innerWidth
//   height = canvas.height = window.innerHeight * (isMobileScreen() ? 0.6 : 0.5)
//   dots = []
//   for (let i = 0; i < maxDots; i++) dots.push(new Dot(Math.random() * width, Math.random() * height))
// }

// const runCanvas = () => {
//   // Clear the canvas completely for no trails
//   ctx.clearRect(0, 0, width, height)
//   ctx.fillStyle = `rgba(13, 13, 18, 0.0)`
//   ctx.fillRect(0, 0, width, height)

//   dots.forEach(dot1 => {
//     dot1.update()
//     dot1.draw()

//     dots.forEach(dot2 => {
//       const dx = dot1.x - dot2.x
//       const dy = dot1.y - dot2.y
//       const dist = Math.sqrt(dx * dx + dy * dy)

//       if (dist < maxDistance) {
//         ctx.beginPath()
//         ctx.moveTo(dot1.x, dot1.y)
//         ctx.lineTo(dot2.x, dot2.y)
//         ctx.strokeStyle = `rgba(90, 75, 156, ${0.5 * (1 - dist / maxDistance)})` // Fading effect with muted color
//         ctx.lineWidth = 0.5
//         ctx.stroke()
//       }
//     })
//   })
//   requestAnimationFrame(runCanvas)
// }

// window.addEventListener('load', 
//   () => {
//     initCanvas()
//     runCanvas()
//   }
// )
// window.addEventListener('resize', initCanvas)
