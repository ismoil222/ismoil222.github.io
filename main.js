const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')
const $upgrade = document.querySelector("#upgrade")
const energyCount = document.getElementById('energy-count');
const clicks = 2

function start() {
    setScore(getScore())
    setImage()
}

function setScore(score) {
    localStorage.setItem('score', score)
    $score.textContent = score
}

function setImage() {
    if (getScore() >= 50) {
        $circle.setAttribute('src', 'logo-removebg-preview.png')
    }
}

function getScore() {
    return Number(localStorage.getItem('score')) ?? 0
}

function addOne() {
    setScore(getScore() + clicks);
    setImage();
}

$circle.addEventListener('click', (event) => {
    const rect = $circle.getBoundingClientRect()
    const offfsetX = event.clientX - rect.left - rect.width / 2
    const offfsetY = event.clientY - rect.top - rect.height / 2

    const DEG = 50

  const tiltX = (offfsetY / rect.height) * DEG
  const tiltY = (offfsetX / rect.width) * -DEG

  $circle.style.setProperty('--tiltX', `${tiltX}deg`)
  $circle.style.setProperty('--tiltY', `${tiltY}deg`)

  setTimeout(() => {
    $circle.style.setProperty('--tiltX', `0deg`)
    $circle.style.setProperty('--tiltY', `0deg`)
  }, 300)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = (`+${clicks}`)
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  $circle.parentElement.appendChild(plusOne)

  addOne()

  setTimeout(() => {
    plusOne.remove()
  }, 2000)
})

start()