let theScore = document.getElementById('highscores')



let scoreHistory = JSON.parse(localStorage.getItem('highScores')) || []

if (scoreHistory.length > 0) {
  // sort the scoreHistory array for the highest to lowest
  for (let i = 0; i < scoreHistory.length; i++) {
    const Scores = scoreHistory[i];
    console.log(Scores)
    // create list in the HTML document
    let listEL = document.createElement("li")
    listEL.textContent = Scores.initials + " : " + Scores.score
    // append/adds the scores to the list in the HTML document
    theScore.append(listEL)
  }
}


// clears the high scores
// 1) connect to the id in highscores.html by creating a variable
let theButton = document.getElementById('clear')
// create a function to execute the action
function Clear() {
  localStorage.clear('highScores')
}


//connect the function to connect to the HTML
theButton.addEventListener('click', Clear)