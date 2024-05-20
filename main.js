// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const glyph = document.querySelector(".like-glyph") /// selects the first glyph 
const allHearts = document.getElementsByClassName("like-glyph") //HTML Collection
const modal = document.querySelector("#modal")
const h2Modal = document.querySelector("#modal h2") // Where ERROR! coded

modal.classList.add("hidden")
// modal.textContent = "ERROR!"
// glyph.textContent = FULL_HEART
glyph.classList.add("activated-heart")
// console.log (glyph)
// console.log (modal)
// console.log (allHearts)

function activateHeart (event) {
  const glyphHeart = event.target
  
  console.log("server call")
  mimicServerCall()
    .then(() => {
      if (glyphHeart.textContent === EMPTY_HEART) {
        glyphHeart.classList.add("activate-heart")
        glyphHeart.textContent = FULL_HEART
      } else {
        glyphHeart.classList.remove("activate-heart")
        glyphHeart.textContent = EMPTY_HEART
      }
    })
    .catch(() => {
      modal.classList.remove("hidden")
      setTimeout(() => {
        modal.classList.add("hidden")
        }, 3000)
      })
}

mimicServerCall()





glyph.addEventListener("click", (event) => {
  activateHeart(event)
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
