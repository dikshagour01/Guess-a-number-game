let randomNumber=parseInt((Math.random())*100+1)
console.log(randomNumber)

const input=document.querySelector(".inputfield")
const button=document.querySelector(".submitbox")
const guessSlot=document.querySelector(".lastguess")
const remaning=document.querySelector(".remaning")
const result=document.querySelector(".result")
const lowOrhi=document.querySelector(".lowORhi")

let p=document.createElement('p');

let guessStore=[]
let numguess=1
let playgame=true;

if(playgame)
{
   button.addEventListener('click', function(e)
   {
        e.preventDefault();
        let guess=parseInt(input.value)
        validateguess(guess)
   })
}

function validateguess(guess)
{
    if(isNaN(guess))
    {
        alert("Enter a valid Number")
    }
    else if(guess < 1 )
    {
        alert("Enter Number greater than 1")
    }
    else if(guess > 100 )
    {
        alert("Enter Number less than 100")
    }
    else{
        guessStore.push(guess)
        if( numguess=== 11)
        {
            displayguess(guess)
            user_message(`Game over and random number was ${randomNumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}


function checkguess(guess)
{
    if(guess===randomNumber)
    {
        user_message(`You Guessed it right!`)
        endgame()
    }
    else if(guess < randomNumber){
       user_message(`Number TOO LOW`)
    }
    else if(guess > randomNumber){
        user_message(`Number TOO HIGH`)
     }
}


function displayguess(guess)
{
    input.value=""
    guessSlot.innerHTML +=`${guess}, `
    numguess++;
    remaning.innerHTML=`${11-numguess}`
}


function user_message(message)
{
    lowOrhi.innerHTML=`<h2> ${message} </h2>`;
}



function endgame()
{
    input.value=""
    input.setAttribute('disable','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Click here to start a new game</h2>`
    result.appendChild(p)
    playgame=false;
    newgame()
}

function newgame()
{
    const newGameButton = document.querySelector("#newgame")
    newGameButton.addEventListener('click',(e)=>{
        randomNumber=parseInt((Math.random())*100+1)
        guessStore=[]
        numguess=1
        guessSlot.innerHTML=""
        remaning.innerHTML=`${11-numguess}`
        input.removeAttribute('disable')
        result.removeChild(p)
        playgame=true;

    })
}


