
const score0EL=document.querySelector('#score--0')
const score1EL=document.querySelector('#score--1')
const current0EL=document.querySelector('#current--0')
const current1EL=document.querySelector('#current--1')
const diceEL=document.querySelector('.dice')
const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')
const player0EL=document.querySelector('.player--0')
const player1EL=document.querySelector('.player--1')


// let scores=[0,0]
// let currentScore=0
// let activePlayer=0
// score0EL.textContent=0
// score1EL.textContent=0
// let playing=true

let scores,currentScore,activePlayer,playing

const init=function(){
    currentScore=0
    activePlayer=0
    scores=[0,0]
    score0EL.textContent=0
    score1EL.textContent=0
    current0EL.textContent=0
    current1EL.textContent=0
    diceEL.classList.add('hidden')
    player0EL.classList.remove('player--winner')
    player1EL.classList.remove('player--winner')
    player0EL.classList.add('player--active')
    player1EL.classList.remove('player--active')
    playing=true
}
init()
const switchPlayer=function()
{
    document.querySelector(`#current--${activePlayer}`).textContent=0
          currentScore=0
          activePlayer=activePlayer===0?1:0
          player0EL.classList.toggle('player--active')
          player1EL.classList.toggle('player--active')
}
// console.log(score0EL)
diceEL.classList.add('hidden')

btnRoll.addEventListener('click',function(){
  if(playing){
      // 1.generate random dice roll  from 1-6
      const dice=Math.trunc(Math.random()*6)+1
      // 2.display dice
      diceEL.classList.remove('hidden')
      diceEL.src=`dice-${dice}.jpg`
      // 3.check for dice roll 1
      if(dice!==1)
      {
          currentScore+=dice;
          console.log(currentScore)
          document.querySelector(`#current--${activePlayer}`).textContent=currentScore
      }
      else{
          // 4.switch to next player
        //   document.querySelector(`#current--${activePlayer}`).textContent=0
        //   currentScore=0
        //   activePlayer=activePlayer===0?1:0
        //   player0EL.classList.toggle('player--active')
        //   player1EL.classList.toggle('player--active')
        switchPlayer() //applied dry(donot repeat yourself) principle
  }
  }
})

btnHold.addEventListener('click',function(){
    if(playing)
    {
            // 1.add current score to active player score
    scores[activePlayer]+=currentScore
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer]

    if(scores[activePlayer]>=20)
    {
        playing=false
        diceEL.classList.add('hidden')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }
    else{
        // 4.switch to next player
        // document.querySelector(`#current--${activePlayer}`).textContent=0
        // currentScore=0
        // activePlayer=activePlayer===0?1:0
        // player0EL.classList.toggle('player--active')
        // player1EL.classList.toggle('player--active')
        switchPlayer()
    }
    }

})

btnNew.addEventListener('click',init)
//applied dry principle
    // currentScore=0
    // activePlayer=0
    // scores=[0,0]
    // score0EL.textContent=0
    // score1EL.textContent=0
    // current0EL.textContent=0
    // current1EL.textContent=0
    // diceEL.classList.add('hidden')
    // player0EL.classList.remove('player--winner')
    // player1EL.classList.remove('player--winner')
    // player0EL.classList.add('player--active')
    // player1EL.classList.remove('player--active')
    
