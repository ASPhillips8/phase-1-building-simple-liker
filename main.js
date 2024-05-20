// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const glyph = document.querySelector(".like-glyph") /// selects the first glyph 
const allHearts = document.getElementsByClassName("like-glyph") //HTML Collection
const modal = document.querySelector("#modal")
console.log (glyph)
console.log (modal)
console.log (allHearts)

// glyph.addEventListener("click", function updateLike() {
//   const liked = event.target.querySelector("span")
  
// })



glyph.addEventListener("click", function giveLikes (event) {
  console.log(event.target);
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
