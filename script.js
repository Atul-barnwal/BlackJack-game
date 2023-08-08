// let firstCard=getRandomCard()
// let seconDCard=getRandomCard()
// let cards = [firstCard,seconDCard]
// let sum=firstCard+seconDCard
let cards=[]
let sum=0
let hasBlackjack=false
let isAlive=false
let Message=""
let messageEl= document.getElementById("message-el")
// let sumEl= document.querySelector(".sum-el")
let sumEl= document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")



// let playerName="Atul"
// let playerChips=145

let player={
     name: "Atul",
     chips: 145
}

let playerEL=document.getElementById("player-el")
playerEL.textContent= player.name+": $"+player.chips



function getRandomCard(){
    let randomNum=Math.floor(Math.random()*13)+1
    if(randomNum==1){
        return 11
    }
    else if(randomNum>=11){
        return 10
    }
    else{
    return randomNum
    }
}


function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let seconDCard=getRandomCard()
    cards = [firstCard,seconDCard]
    sum=firstCard+seconDCard
      renderGame()
}

function renderGame(){
    // cardEl.textContent="cards: "+firstCard+" "+seconDCard
    // cardEl.textContent="cards: "+cards[0]+" "+cards[1]
    cardEl.textContent="cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }

    sumEl.textContent="sum: "+sum
if(sum<=20){
Message="do you want to draw a card"

}
else if(sum===21){
Message="You got blackjack"
hasBlackjack=true
}
else{
Message="you are out of game"
isAlive=false
}
// console.log(isAlive)

messageEl.textContent=Message

}

function newCard(){
    if(isAlive===true && hasBlackjack===false){
    let card= getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
}
}