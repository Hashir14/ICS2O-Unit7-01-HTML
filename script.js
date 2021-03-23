// Connects "Did I win" button to "random" function.
document.getElementById('button').addEventListener('click', random)
// Connects "Generate a new number" to "redo" function, allowing the program to choose another random number.
document.getElementById('button2').addEventListener('click', redo)
// Variables will store the random number and the user's guess.
let randomNumber = 0
let guess = 0
randomNumber = (Math.random() * 6) + 1
randomNumber = parseInt(randomNumber)

function random () {
  guess = document.getElementById('input').value
  guess = parseInt (guess)
  if (guess === randomNumber) {
    document.getElementById('reveal').innerHTML = 'Congradulations! You Win. Refresh the page to play again.'
  }
}
function redo () {
  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)
  document.getElementById('reveal').innerHTML = ' ' 
}
