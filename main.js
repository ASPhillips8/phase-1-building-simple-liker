// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const allHearts = document.getElementsByClassName("like-glyph") 
const modal = document.querySelector("#modal")

modal.classList.add("hidden")

function activateHeart (event) {
  const glyphHeart = event.target
  console.log("server call")
  mimicServerCall()
    .then(() => {
      if (glyphHeart.textContent === EMPTY_HEART) {
        glyphHeart.classList.add("activated-heart")
        glyphHeart.textContent = FULL_HEART
      } else {
        glyphHeart.classList.remove("activated-heart")
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

Array.from(allHearts).forEach((button) => {
  button.addEventListener("click", activateHeart)
});

mimicServerCall()


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
