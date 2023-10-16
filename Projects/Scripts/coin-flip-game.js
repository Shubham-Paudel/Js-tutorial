let result = '';
//const Prob = Math.random();
 let score = JSON.parse(localStorage.getItem('score')) || {
   wins : 0,
   losses : 0
 };

 updateScore();

 function playGame()
 {
   const prob = Math.random();
   if(prob>=0 && prob<1/2)
   {
     result = 'Heads';
   }
   else if(prob>=1/2 && prob<1)
   {
     result = 'Tails';
   }
   return result;
 }

 function outcome(yourChoice)
 {
   let finalResult = '';
   compMove=playGame();
   if(yourChoice === 'Heads')
   {
     if(compMove === 'Heads')
     {
       finalResult = 'You Win'
     }
     else if(compMove === 'Tails')
     {
       finalResult = 'You Lose'
     }
   }
   else if(yourChoice === 'Tails')
   {
     if(compMove === 'Heads')
     {
       finalResult = 'You Lose'
     }
     else if(compMove === 'Tails')
     {
       finalResult = 'You Win'
     }
   }

   if(finalResult === 'You Win')
   {
     score.wins += 1;
   }
   else if(finalResult === 'You Lose')
   {
     score.losses += 1;
   }
   localStorage.setItem('score',JSON.stringify(score));

   updateScore();

   document.querySelector('.js-res')
     .innerHTML = finalResult;
   
   document.querySelector('.js-result')
     .innerHTML = `You <img src = "Images/${yourChoice}-image.PNG" class="Coin"> v/s <img src = "Images/${compMove}-image.PNG" class="Coin"> Computer`;
 }

  /* alert(`You chose ${yourChoice}. Actual outcome is ${compMove}. Result: ${finalResult}
Wins: ${score.wins} Losses: ${score.losses}`);
 }
 */

 function updateScore()
   {
     document.querySelector('.js-score')
       .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;          
   }
