function getComputerChoice () {
  var randomPic = Math.floor(Math.random() * 3 ) + 1;
  var randomPicImage = "Img" + randomPic + ".png";
  var randomImageSource = "images/" + randomPicImage;
  document.querySelector(".comImage").setAttribute("src", randomImageSource);
  return randomPicImage;  // Return the file name
  };
  
  
  
  function getWinner (playerChoice, ComputerChoice) {
    if (playerChoice === ComputerChoice) {
       return"It's a tie";
    } else if (
      (playerChoice === 'Img1.png' && ComputerChoice === 'Img3.png')||
       (playerChoice === 'Img2.png' && ComputerChoice === 'Img1.png')||
       (playerChoice === 'Img3.png' && ComputerChoice === 'Img2.png')
       ) {
        return"You win!";
       } else {
        return"You Lose Fool!!";
       }
  }
  
  
  document.getElementById('rock').addEventListener('click', ()=> game('Img1.png'));
  document.getElementById('paper').addEventListener('click', ()=> game('Img2.png'));
  document.getElementById('scissors').addEventListener('click', ()=> game('Img3.png'));
  
  
  function game (playerChoice) {
    const ComputerChoice = getComputerChoice();
    const result = getWinner (playerChoice, ComputerChoice);
  
    var resultText = document.querySelector('h1');
  
    if (result === 'You win!') {
      resultText.className = 'win';
    } else if (result === 'You Lose Fool!!') {
      resultText.className = 'lose';
    } else {
      resultText.className = 'tie';
    }
  
    resultText.innerHTML = result;
  };

  
  