let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
  };

  updateScoreElement();
/*
if (!score)
{
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function autoP()
      {
        const buttonElement = document.querySelector('.js-auto-play');
  
        if(buttonElement.innerText === 'Auto play')
        {
          buttonElement.innerText = 'Stop play';
          buttonElement.classList.add('is-stop');
        }
        else{
          buttonElement.innerText = 'Auto play';
          buttonElement.classList.remove('is-stop');
        }
      }


let isAutoPlaying = false;
let intervalId;
function autoPlay()
{
  if(!isAutoPlaying){
  intervalId = setInterval(() =>
  {
    const playerMove = pickComputerMove();
    playgame(playerMove);
  }, 1000);
  isAutoPlaying = true;
  }
  else
  {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.body.addEventListener('keydown', (event)=>
{
  if(event.key === 'r')
  {
    playgame('Rock');
  }
  else if(event.key === 'p')
  {
    playgame('Paper');
  }
  else if(event.key === 's')
  {
    playgame('Scissors');
  }
})

document.querySelector('.js-rock-button')
  .addEventListener('click', ()=>
  {
    playgame('Rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () =>
  {
    playgame('Paper')
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', ()=>
  {
    playgame('Scissors');
  })
let computerMove='';
let result='';

function playgame(playerMove)
{
  computerMove=pickComputerMove();
if(playerMove==='Rock')
  {
    if(computerMove==='Rock')
    {
      result='Tie';
    }
    else if(computerMove==='Paper')
    {
      result='You lose';
    }
    else
    {
      result='You win';
    }
}
else if(playerMove==='Paper')
{
  if(computerMove==='Rock')
    {
      result='You win';
    }
    else if(computerMove==='Paper')
    {
      result='Tie';
    }
    else
    {
      result='You lose';
    }
}
else if(playerMove === 'Scissors')
{
  if(computerMove==='Rock')
    {
      result='You lose';
    }
    else if(computerMove==='Paper')
    {
      result='You win';
    }
    else
    {
      result='Tie';
    }
}

if(result === 'You win')
{
  score.wins += 1;
}
else if(result === 'You lose')
{
  score.losses += 1;
}
else if(result === 'Tie')
{
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
  .innerHTML = result;

document.querySelector('.js-moves')
  .innerHTML = `You <img src="Images/${playerMove}-emoji.png" class="move-icon">
<img src = "Images/${computerMove}-emoji.png" class="move-icon">Computer`;
}

function updateScoreElement()
{
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove()
{
  let computerMove='';
  const randomNum = Math.random();
  if(randomNum >= 0 && randomNum <1/3)
  {
  computerMove='Rock';
  }
  else if (randomNum >=1/3 && randomNum<2/3)
  {
    computerMove='Paper';
  }
  else if(randomNum>=2/3 && randomNum<1)
  {
  computerMove='Scissors';
  }
  return computerMove;
}