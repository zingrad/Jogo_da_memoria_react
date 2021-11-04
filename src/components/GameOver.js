import React, { Fragment } from 'react'


//se props.show for true mostrar gameOver se não mostrar nada 
export default function GameOver(props) {
    return (props.show?
        <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="restart" onClick={props.handleRestart}>Jogue novamente</button>
    </div> : <Fragment />
    )
}

// é passado o onclick que recebe uma função por propriedade
