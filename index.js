function getComputerChoice () {
  var randomPic = Math.floor(Math.random() * 3 ) + 1;
  var randomPicImage = "Img" + randomPic + ".png";
  var randomImageSource = "images/" + randomPicImage;
  document.querySelector(".comImage").setAttribute("src", randomImageSource);
  return randomPicImage;  // Return the file name
  };
  
  
  
  function getWinner (playerChoice, ComputerChoice) {
    if (playerChoice === ComputerChoice) {
       alert("It's a tie");
    } else if (
      (playerChoice === 'Img1.png' && ComputerChoice === 'Img3.png')||
       (playerChoice === 'Img2.png' && ComputerChoice === 'Img1.png')||
       (playerChoice === 'Img3.png' && ComputerChoice === 'Img2.png')
       ) {
        alert("You win!");
       } else {
        alert("You Lose Fool!!");
       }
  }
  
  
  document.getElementById('rock').addEventListener('click', ()=> game('Img1.png'));
  document.getElementById('paper').addEventListener('click', ()=> game('Img2.png'));
  document.getElementById('sciccors').addEventListener('click', ()=> game('Img3.png'));
  
  
  function game (playerChoice) {
    const ComputerChoice = getComputerChoice();
    const result = getWinner (playerChoice, ComputerChoice);
    result = h1.body.innerHTML = "Good game!! ";
  };
  