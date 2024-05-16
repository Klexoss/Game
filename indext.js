var computerChoiceInterval;

function getComputerChoice() {
  var choices = ['Img1.png', 'Img2.png', 'Img3.png'];
  var index = 0;
  if (computerChoiceInterval) {
    clearInterval(computerChoiceInterval);
  }
  computerChoiceInterval = setInterval(function() {
    var randomImageSource = "images/" + choices[index];
    document.querySelector(".comImage").setAttribute("src", randomImageSource);
    index = (index + 1) % choices.length;
  }, 200);
}

function getFinalComputerChoice() {
  clearInterval(computerChoiceInterval);
  var randomPic = Math.floor(Math.random() * 3 ) + 1;
  var randomPicImage = "Img" + randomPic + ".png";
  var randomImageSource = "images/" + randomPicImage;
  document.querySelector(".comImage").setAttribute("src", randomImageSource);
  return randomPicImage;
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie";
  } else if (
    (playerChoice === 'Img1.png' && computerChoice === 'Img3.png') ||
    (playerChoice === 'Img2.png' && computerChoice === 'Img1.png') ||
    (playerChoice === 'Img3.png' && computerChoice === 'Img2.png')
  ) {
    return "You win!";
  } else {
    return "You Lose Fool!!";
  }
}

document.getElementById('rock').addEventListener('click', () => game('Img1.png'));
document.getElementById('paper').addEventListener('click', () => game('Img2.png'));
document.getElementById('scissors').addEventListener('click', () => game('Img3.png'));

function game(playerChoice) {
  var computerChoice = getFinalComputerChoice();
  const result = getWinner(playerChoice, computerChoice);

  var resultText = document.querySelector('h1');

  if (result === 'You win!') {
    resultText.className = 'win';
  } else if (result === 'You Lose Fool!!') {
    resultText.className = 'lose';
  } else {
    resultText.className = 'tie';
  }

  resultText.innerHTML = result;
}
