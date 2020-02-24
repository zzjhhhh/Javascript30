function removeTransition(e) {
  if (e.propertyName !== "transform") return
  this.classList.remove("playing")
}
function playSound(e) {
  // 利用 keydown 事件中的 keycode 属性获取对应的 audio 和 key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return

  key.classList.add("playing")
  audio.currentTime = 0
  audio.play()
}

const keys = Array.from(document.querySelectorAll(".key"))
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playSound)
