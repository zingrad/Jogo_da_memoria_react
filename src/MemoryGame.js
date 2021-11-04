import React,{useEffect, useState} from 'react'
import GameBoard from './components/GameBoard'
import GameOver from './components/GameOver'
import game from './game/game'

export default function MemoryGame() {

    const[gameOver,setGameOver] = useState(false)
    const[cards,setCards] = useState([])

    useEffect(()=>{
    setCards(game.createCardsFromTechs())
    },[])

    //função que seta o estado de gameOver pra false assim sumira da tela
    function restart(){
        setCards(game.createCardsFromTechs())
        game.clearCards()
        setGameOver(false)
    }

    function handleFlip(card){
      

        game.flipCard(card.id,()=>{
            //gameOverCallback
            setGameOver(true)
        },()=>{
            //noMatchCallback
            setCards([...game.cards])
        } )

        setCards([...game.cards])
    }

    //abaixo show recebe o estado atual de gameOver que é oque está no useState
    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver> 
        </div>
    )
}
// nesse componente tbm recebe a função restart que é passado pra handleRestart dessa forma
//o GameOver.js consegue usar esse handleRestart em um Onclick