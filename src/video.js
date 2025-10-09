const video = document.getElementById('intro-video')
const wrapper = document.querySelector('.video-wrapper')
const icon = document.getElementById('play-icon')
const txt = document.getElementById('play-text')

video.pause()

wrapper.addEventListener('click', () => {
  if(video.paused) {
    video.play()
    video.classList.remove('opacity-50')
    icon.classList.add('hidden')
    txt.classList.add('hidden')
  }
  else { 
    video.pause() 
    icon.classList.remove('hidden')
    video.classList.add('opacity-50')
  }
})
video.addEventListener('ended', () => setTimeout(() => { 
  video.currentTime = 0
  video.play()
}, 3000))