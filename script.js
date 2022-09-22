let score = document.getElementById('score-value')
let h1 = document.querySelector('h1')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let reset = document.getElementById('reset')
let count = 0

// let plus =document.querySelector(".increment");

plus.addEventListener('click', () => {
  count++
  score.innerHTML = count
  colorStyle()
})

reset.addEventListener('click', () => {
  count = 0
  score.innerHTML = count
  colorStyle()
})

minus.addEventListener('click', () => {
  count--
  score.innerHTML = count
  colorStyle()
})

function colorStyle() {
  if (count > 0) {
    // h1.classList.remove("red");
    h1.classList.add('bg-green-400')
    h1.classList.add('text-black')
  } else if (count < 0) {
    h1.classList.add('bg-red-400');
    h1.classList.add('text-black')

    // score.classList.remove("green")
  } else {
    h1.classList.remove('bg-red-400')
    h1.classList.remove('bg-green-400')
  }
}
