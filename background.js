/*
    This script automatically clicks the sign in
    button on the following website
    https://nbc-school.boxofbooks.io/auth/page/signin/
*/

// Run main() after the page is loaded
window.addEventListener('load', main, false);
function main(event) {

  // Every 1000 ms, run try_click()
  var timer = setInterval(try_click, 1000);
  // Stop trying after 10 attempts.
  var max_attempts = 3;

  function try_click() {
    max_attempts -= 1;
    if (max_attempts > 0) {
      clearInterval(timer);
      console.log("Attempts left: " + max_attempts);
      // Find the button.
      var b = document.querySelector(".btn-primary");
      // If we found the button, click on it.
      if (b) {
        max_attempts = 0;
        console.log("Clicking on sms button");
        b.click();
      }
    }
  }
}